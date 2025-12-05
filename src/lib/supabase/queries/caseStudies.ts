import { supabase } from "../client";
import type { CaseStudy } from "@/lib/types";

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as CaseStudy[];
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data as CaseStudy | null;
}
