export type AnalyticsEvent =
  | "phone_click"
  | "email_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "offer_view"
  | "offer_cta_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("cyberattract-cookie-consent") === "accepted";
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event, params);
}
