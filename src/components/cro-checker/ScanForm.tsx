"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function ScanForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/cro-checker/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create scan");
      }

      const data = await response.json();
      router.push(`/cro-checker/report/${data.scan.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:items-start">
      <div className="flex-1">
        <Input
          type="url"
          placeholder="Enter your website URL (e.g., https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
          required
          className="w-full"
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
      <Button type="submit" disabled={loading || !url.trim()} size="lg">
        {loading ? "Checking..." : "Check your performance for free"}
      </Button>
    </form>
  );
}
