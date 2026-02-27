import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn("Supabase storage credentials not configured");
}

const supabaseAdmin = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;

const BUCKET_NAME = "cro-checker";

/**
 * Upload a screenshot to Supabase Storage
 */
export async function uploadScreenshot(
  scanId: string,
  imageBuffer: Buffer,
  metadata?: { width?: number; height?: number },
): Promise<string> {
  if (!supabaseAdmin) {
    throw new Error("Supabase storage not configured");
  }

  const fileName = `${scanId}/screenshot-${Date.now()}.png`;
  const filePath = `${fileName}`;

  // Ensure bucket exists (create if needed)
  try {
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === BUCKET_NAME);

    if (!bucketExists) {
      const { error: createError } = await supabaseAdmin.storage.createBucket(BUCKET_NAME, {
        public: true,
        fileSizeLimit: 5242880, // 5MB
      });

      if (createError && !createError.message.includes("already exists")) {
        throw createError;
      }
    }
  } catch (error) {
    console.error("Error ensuring bucket exists:", error);
  }

  // Upload the file
  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET_NAME)
    .upload(filePath, imageBuffer, {
      contentType: "image/png",
      upsert: false,
      metadata,
    });

  if (error) {
    throw new Error(`Failed to upload screenshot: ${error.message}`);
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabaseAdmin.storage.from(BUCKET_NAME).getPublicUrl(filePath);

  return publicUrl;
}

/**
 * Upload performance metrics as JSON artifact
 */
export async function uploadMetrics(
  scanId: string,
  metrics: Record<string, unknown>,
): Promise<string> {
  if (!supabaseAdmin) {
    throw new Error("Supabase storage not configured");
  }

  const fileName = `${scanId}/metrics-${Date.now()}.json`;
  const filePath = `${fileName}`;

  const jsonBuffer = Buffer.from(JSON.stringify(metrics, null, 2));

  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET_NAME)
    .upload(filePath, jsonBuffer, {
      contentType: "application/json",
      upsert: false,
    });

  if (error) {
    throw new Error(`Failed to upload metrics: ${error.message}`);
  }

  const {
    data: { publicUrl },
  } = supabaseAdmin.storage.from(BUCKET_NAME).getPublicUrl(filePath);

  return publicUrl;
}
