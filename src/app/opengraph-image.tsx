import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#070A0E",
          color: "#F5F7FA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#11161D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
              <path d="M8 24L20 12L32 24" stroke="#FC4C01" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 29L20 23L26 29" stroke="#04A5EF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>{site.brand.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, maxWidth: 900, lineHeight: 1.1 }}>
          Transformez les recherches Google en demandes de devis.
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 30, color: "#A7B0BC" }}>
          {site.brand.tagline} — {site.contact.area}
        </div>
      </div>
    ),
    size
  );
}
