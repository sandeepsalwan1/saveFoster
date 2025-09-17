import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const subject = (body.subject || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const toEmail = process.env.TO_EMAIL || "salwansandeep5@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev"; // Works for Resend test mode
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // No API key configured. Log for dev visibility and fail politely.
      console.warn("[contact] RESEND_API_KEY not set. Email not sent. Payload:", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json(
        { error: "Email service not configured on the server." },
        { status: 500 },
      );
    }

    // Send email via Resend HTTP API without extra deps
    const html = `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Save The Foster <${fromEmail}>`,
        to: [toEmail],
        subject: subject || "New contact form message",
        reply_to: email,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const text = await resendResponse.text();
      console.error("[contact] Resend error:", text);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}

