import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { isEmailConfigured, sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

// Single-instance in-memory limiter: resets on redeploy/restart and does not
// share state across serverless instances. Good enough to blunt basic repeat
// submissions; not a substitute for an edge-level rate limiter in production.
const submissionsByIp = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", message: "Trop de tentatives. Merci de réessayer dans une minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_error", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: "not_configured",
        message:
          "L'envoi automatique n'est pas encore configuré sur cet environnement. Merci de nous contacter directement par e-mail ou par téléphone.",
      },
      { status: 503 }
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "send_failed",
        message: "L'envoi a échoué. Merci de réessayer ou de nous contacter directement.",
      },
      { status: 502 }
    );
  }
}
