import { supabase } from "../client";
import type { FAQItem } from "@/lib/types";

export async function getFAQItems(): Promise<FAQItem[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("faq_items")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data ?? []) as FAQItem[];
}
