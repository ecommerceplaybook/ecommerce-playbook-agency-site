"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const projectTypes = ["CRO Audit", "Implementation", "Experimentation", "Lifecycle"];
const budgetRanges = ["<$10k", "$10k-$25k", "$25k-$50k", "$50k+"];

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("Something went wrong. Please try again.");
    } else {
      setStatus("Thanks! We’ll reply within 1 business day.");
      event.currentTarget.reset();
    }

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Name</span>
          <Input name="name" required placeholder="Alex Rivera" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <Input type="email" name="email" required placeholder="alex@brand.com" />
        </label>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Project Type</span>
          <Select name="projectType" defaultValue={projectTypes[0]}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Budget</span>
          <Select name="budget" defaultValue={budgetRanges[0]}>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">Project Summary</span>
        <Textarea name="message" required rows={6} placeholder="What’s working, what’s not, and key metrics." />
      </label>
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Request"}
      </Button>
      {status && <p className="text-center text-sm text-slate-600">{status}</p>}
    </form>
  );
}
