import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, budget, projectType } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.info("Contact submission", { name, email, message, budget, projectType });

  return NextResponse.json({ ok: true });
}
