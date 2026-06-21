import { ImageResponse } from "next/og";

export const alt =
  "Vector — Migrate Azure DevOps repos to GitHub, keep your green squares";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GREENS = ["#0e4429", "#006d32", "#26a641", "#39d353"];

export default function OpenGraphImage() {
  // Deterministic strip of contribution squares for the motif.
  const squares = Array.from({ length: 11 });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1b2230 0%, #0d1117 60%)",
          color: "#e6edf3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              borderRadius: 5,
              background: "#39d353",
            }}
          />
          <div style={{ display: "flex", fontSize: 26, color: "#8b949e", letterSpacing: 1 }}>
            vector-migrate
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, letterSpacing: -4 }}>
            Vector
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              maxWidth: 920,
              fontSize: 40,
              lineHeight: 1.25,
              color: "#8b949e",
            }}
          >
            Move your repos from Azure DevOps to GitHub — without losing your green squares.
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {squares.map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                width: 40,
                height: 40,
                borderRadius: 8,
                background: i < 3 ? "#161b22" : GREENS[i % GREENS.length],
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
