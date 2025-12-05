import { supabase } from "../client";
import type { Tool } from "@/lib/types";

export async function getTools(): Promise<Tool[]> {
  if (!supabase) return [];
  const { data, error } = await supabase.from("tools").select("*").order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as Tool[];
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data as Tool | null;
}
