import { Resend } from "resend";
import type { ContactFormValues } from "./validation";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
}

export async function sendContactEmail(data: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "btpleadspro@gmail.com";

  if (!apiKey || !from) {
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Prénom", data.firstName],
    ["Nom", data.lastName],
    ["Entreprise", data.company],
    ["Téléphone", data.phone],
    ["E-mail", data.email],
    ["Métier", data.trade],
    ["Zone d'intervention", data.area],
    ["Service recherché", data.service],
    ["Budget publicitaire mensuel", data.budget],
    ["Objectif principal", data.goal],
  ];

  const html = `
    <h2>Nouvelle demande de diagnostic — BTP Leads Pro</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;border:1px solid #ddd">${label}</td><td style="border:1px solid #ddd">${escapeHtml(
              value
            )}</td></tr>`
        )
        .join("")}
    </table>
    ${data.message ? `<h3>Message</h3><p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>` : ""}
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Nouvelle demande — ${data.company} (${data.service})`,
    html,
  });

  if (error) {
    throw new Error(error.message || "EMAIL_SEND_FAILED");
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
