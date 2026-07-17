import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/resume";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0f172a 0%, #1e293b 55%, #1e3a5f 100%)",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#1d4ed8",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            SG
          </div>
          <span style={{ color: "#94a3b8", fontSize: 22, letterSpacing: "0.08em" }}>
            PORTFOLIO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 28, color: "#93c5fd", fontWeight: 500 }}>
            {siteConfig.title}
          </div>
          <div style={{ fontSize: 22, color: "#94a3b8", maxWidth: 800 }}>
            NLP · Data Science · Agentic AI · Healthcare AI · Doshisha University
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
