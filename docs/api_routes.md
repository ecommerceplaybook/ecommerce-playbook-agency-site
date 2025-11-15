6. API Routes
6.1 Tools API

// src/app/api/tools/route.ts
import { NextResponse } from "next/server";
import { getTools } from "@/lib/supabase/queries/tools";

export async function GET() {
  const tools = await getTools();
  return NextResponse.json({ tools });
}

// src/app/api/tools/[slug]/route.ts
import { NextResponse } from "next/server";
import { getToolBySlug } from "@/lib/supabase/queries/tools";

interface Params {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: Params) {
  const tool = await getToolBySlug(params.slug);
  if (!tool) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(tool);
}

6.2 Contact API

// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, budget, projectType } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: wire to email provider or Supabase table
  // For now just log or no-op.

  return NextResponse.json({ ok: true });
}

6.3 Shopify Proxy APIs

Repeat this pattern for:
	•	/api/shopify/products
	•	/api/shopify/products/[handle]
	•	/api/shopify/collections
	•	/api/shopify/collections/[handle]

Use the functions from lib/shopify.