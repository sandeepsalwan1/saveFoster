import { ImageResponse } from "next/og";

export const alt = "Save The Foster nonprofit supporting foster youth";
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
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1e2029 0%, #293778 60%, #8fa8db 100%)",
          color: "white",
          padding: "76px 84px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 34 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "white",
              color: "#293778",
              fontSize: 36,
            }}
          >
            ♥
          </div>
          Save The Foster
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.05 }}>
            Support. Empower. Uplift.
          </div>
          <div style={{ fontSize: 32, color: "#eef0ff" }}>
            Helping foster youth and vulnerable children thrive.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#dfe3ff" }}>savethefoster.com</div>
      </div>
    ),
    size,
  );
}
