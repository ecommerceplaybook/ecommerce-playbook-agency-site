import { supabase } from "../client";
import type { Page, PageSlug } from "@/lib/types";

export async function getPageBySlug(slug: PageSlug): Promise<Page | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data as Page | null;
}
