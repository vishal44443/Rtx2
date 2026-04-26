import { useState } from "react";

const generations = [
  {
    gen: "RTX 20 Series",
    year: "2018–2019",
    arch: "Turing",
    flagship: "RTX 2080 Ti",
    color: "#00c896",
    icon: "🔬",
    usp: "Birth of Real-Time Ray Tracing + DLSS 1.0",
    rawGain: "~30% over GTX 10xx",
    killer: "RT Cores (dedicated ray tracing hardware) — first ever in consumer GPU",
    features: [
      "Dedicated RT Cores — hardware ray tracing for the first time",
      "Tensor Cores — AI inference on GPU",
      "DLSS 1.0 — AI upscaling (blurry but revolutionary)",
      "Mesh Shaders (geometry pipeline upgrade)",
    ],
    why: "People paid premium because ray tracing was a totally new visual category — reflections, shadows, and global illumination that was simply impossible before. It wasn't just faster, it was a new thing.",
    weakness: "DLSS 1.0 was blurry. RT performance was poor. Most games didn't support it.",
  },
  {
    gen: "RTX 30 Series",
    year: "2020–2021",
    arch: "Ampere",
    flagship: "RTX 3090",
    color: "#00a8ff",
    icon: "⚡",
    usp: "DLSS 2.0 Goes Mainstream + Massive Raw Perf Leap",
    rawGain: "~50–80% over RTX 20xx",
    killer: "DLSS 2.0 — generalized neural network, crystal-clear upscaling that actually worked",
    features: [
      "DLSS 2.0 — generalized model, sharp & stable AI upscaling",
      "2nd gen RT Cores (2x RT throughput)",
      "3rd gen Tensor Cores",
      "GDDR6X on flagship models (massive bandwidth)",
      "PCIe 4.0 support",
    ],
    why: "DLSS 2.0 was genuinely a paradigm shift — 4K performance from 1080p rendering. Combined with huge raw performance gain (crypto shortage made it even more desirable), it was a must-buy generation.",
    weakness: "No frame generation. DLSS limited to RTX cards only. Power draw jumped significantly.",
  },
  {
    gen: "RTX 40 Series",
    year: "2022–2023",
    arch: "Ada Lovelace",
    flagship: "RTX 4090",
    color: "#7c4dff",
    icon: "🧠",
    usp: "DLSS 3 Frame Generation — AI Creates Entire Frames",
    rawGain: "~30–40% raw raster over RTX 30xx",
    killer: "Frame Generation: AI generates completely new frames between rendered ones — effectively doubles FPS using AI",
    features: [
      "DLSS 3 Frame Generation (4090-class exclusive)",
      "4th gen Tensor Cores + Optical Flow Accelerator",
      "3rd gen RT Cores (2x throughput)",
      "AV1 hardware encoder (game streaming revolution)",
      "DLSS 3.5 Ray Reconstruction (RTX 20/30 also got this)",
      "Ada Lovelace shader engine efficiency gains",
    ],
    why: "Even though raw raster was 'only' 30–40% faster, Frame Gen made games feel 2x faster. A 4090 running DLSS 3 at 4K could hit 200+ FPS in games that couldn't before. Completely new experience — not just incremental.",
    weakness: "Frame Gen added latency. Required RTX 40 series only (felt locked out). Very high price ($1,599 MSRP for 4090).",
  },
  {
    gen: "RTX 50 Series",
    year: "2025",
    arch: "Blackwell",
    flagship: "RTX 5090",
    color: "#ff6b35",
    icon: "🤖",
    usp: "DLSS 4 Multi-Frame Gen — Generate 3 Frames Per 1 Rendered",
    rawGain: "~30–40% raw raster over RTX 40xx",
    killer: "Multi Frame Generation: 1 real frame + 3 AI-generated = up to 8x effective FPS multiplier over brute-force rendering",
    features: [
      "DLSS 4 Multi-Frame Generation (up to 3 extra AI frames)",
      "5th gen Tensor Cores (transformer-based AI model)",
      "DLSS Super Resolution using transformer architecture (sharper)",
      "32GB GDDR7 on RTX 5090 (1792 GB/s bandwidth)",
      "92 billion transistors",
      "NVIDIA ACE — AI NPCs with real-time neural character behavior",
      "RTX Neural Rendering Kit (geometry, materials, lighting via AI)",
    ],
    why: "RTX 5070 matches RTX 4090 performance at $549 thanks to AI. The AI TOPS jump is the real story — 3,352 AI TOPS on 5090 vs ~1,321 on 4090. The GPU is becoming an AI inference engine that also games.",
    weakness: "Raw raster gap vs 4090 is small without DLSS. DRAM shortage hurt supply. Many question if $1,999 is justified without DLSS on.",
  },
  {
    gen: "RTX 60 Series",
    year: "2027 (Expected)",
    arch: "Rubin",
    flagship: "RTX 6090",
    color: "#ff2d78",
    icon: "🌐",
    usp: "DLSS 5 Neural Rendering — AI Replaces Parts of the Graphics Pipeline",
    rawGain: "~30–40% raster, but 2x ray tracing over RTX 50xx",
    killer: "DLSS 5: AI doesn't just upscale or generate frames — it replaces entire rendering stages (lighting, materials, geometry) with neural models",
    features: [
      "DLSS 5 — generative AI enhancement of actual scene geometry & lighting",
      "Rubin architecture on TSMC 3nm/2nm",
      "GR20x GPU die — datacenter Rubin tech in gaming",
      "~2x ray tracing speed over Blackwell",
      "48GB VRAM rumored (massive LLM local inference)",
      "Cooperative Vectors (DirectX API for neural shaders)",
      "600W+ TDP (power gated, efficiency via process node)",
    ],
    why: "DLSS 5 changes what 'graphics' means. Instead of rendering every pixel the old way, AI generates photorealistic scenes that look better than traditional rendering. Jensen called this 'the way graphics ought to be' at CES 2026. It was demoed running on dual RTX 5090s — RTX 60 series is where this becomes a single-GPU feature.",
    weakness: "Still speculation/leaks. Dual-GPU DLSS 5 demo at GTC 2026 shows hardware demands are extreme. Price will likely exceed $2,499.",
  },
  {
    gen: "RTX 70–80 Series",
    year: "2029–2031 (Prediction)",
    arch: "Post-Rubin (Vera/Next)",
    flagship: "RTX 7090 / 8090",
    color: "#ffd700",
    icon: "🔮",
    usp: "AI-First GPU — Neural Rendering at Full Pipeline Level + On-Device AGI",
    rawGain: "Traditional raster becomes secondary metric",
    killer: "The GPU becomes a neural rendering engine. Traditional rasterization is fully replaced by AI inference. Games are generated, not rendered.",
    features: [
      "Full neural rendering pipeline — no traditional rasterization",
      "On-device LLM inference at 70B+ parameter scale (100GB+ VRAM?)",
      "Real-time 3D scene generation from game logic (not pre-rendered assets)",
      "AI-controlled physics, NPCs, worlds — all on-GPU",
      "Neural display (OLED/microLED native AI output)",
      "Photonic or chiplet GPU architecture",
      "VR/AR-first rendering (foveated AI rendering)",
    ],
    why: "Jensen Huang has explicitly said traditional rasterization's growth is slowing and AI is the future. Every generation, NVIDIA shifts the benchmark from 'raw FPS' to 'AI TOPS'. By RTX 70/80 series, the metric won't be 4K/240Hz — it will be 'how many AI models can you run while gaming at 8K?'. The GPU becomes the engine for AGI on your desktop.",
    weakness: "Pure speculation. Depends on: TSMC roadmap, DRAM prices, software adoption, and whether AMD/Intel close the AI gap.",
  },
];

const RatingBar = ({ value, max = 100, color }) => (
  <div style={{ background: "#1a1a2e", borderRadius: 4, height: 6, width: "100%", overflow: "hidden" }}>
    <div
      style={{
        width: `${(value / max) * 100}%`,
        height: "100%",
        background: color,
        borderRadius: 4,
        transition: "width 1s ease",
        boxShadow: `0 0 8px ${color}88`,
      }}
    />
  </div>
);

export default function NvidiaUSP() {
  const [selected, setSelected] = useState(0);
  const g = generations[selected];

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#0a0a12",
        minHeight: "100vh",
        color: "#e0e0f0",
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 6,
            color: "#555",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          NVIDIA GPU EVOLUTION
        </div>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 900,
            margin: 0,
            background: "linear-gradient(90deg, #00c896, #00a8ff, #7c4dff, #ff6b35, #ff2d78)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 1,
          }}
        >
          WHY PEOPLE BUY EVERY GENERATION
        </h1>
        <div style={{ fontSize: 11, color: "#444", marginTop: 6 }}>
          RTX 20xx → RTX 80xx · Unique Selling Points & Future Roadmap
        </div>
      </div>

      {/* Generation Selector */}
      <div
        style={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
          paddingBottom: 8,
          marginBottom: 20,
          scrollbarWidth: "none",
        }}
      >
        {generations.map((gen, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              background: selected === i ? gen.color + "22" : "#111",
              border: `1px solid ${selected === i ? gen.color : "#2a2a3a"}`,
              borderRadius: 6,
              padding: "8px 12px",
              cursor: "pointer",
              color: selected === i ? gen.color : "#666",
              fontSize: 11,
              fontFamily: "'Courier New', monospace",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              fontWeight: selected === i ? 700 : 400,
              flexShrink: 0,
              boxShadow: selected === i ? `0 0 12px ${gen.color}44` : "none",
            }}
          >
            {gen.icon} {gen.gen}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div
        style={{
          background: "#0e0e1a",
          border: `1px solid ${g.color}44`,
          borderRadius: 12,
          padding: 20,
          boxShadow: `0 0 30px ${g.color}18`,
          marginBottom: 16,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: g.color, letterSpacing: 3, textTransform: "uppercase" }}>
              {g.arch} · {g.year}
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: "#fff",
                marginTop: 2,
              }}
            >
              {g.gen}
            </div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>Flagship: {g.flagship}</div>
          </div>
          <div
            style={{
              background: g.color + "18",
              border: `1px solid ${g.color}55`,
              borderRadius: 8,
              padding: "8px 12px",
              textAlign: "right",
            }}
          >
            <div style={{ fontSize: 10, color: "#666", marginBottom: 2 }}>RAW PERF GAIN</div>
            <div style={{ fontSize: 13, color: g.color, fontWeight: 700 }}>{g.rawGain}</div>
          </div>
        </div>

        {/* USP Banner */}
        <div
          style={{
            background: g.color + "12",
            border: `1px solid ${g.color}33`,
            borderRadius: 8,
            padding: "12px 14px",
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 9, letterSpacing: 3, color: g.color, marginBottom: 4 }}>
            ★ UNIQUE SELLING POINT
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>{g.usp}</div>
          <div
            style={{
              fontSize: 11,
              color: "#aaa",
              marginTop: 8,
              lineHeight: 1.5,
              borderTop: `1px solid ${g.color}22`,
              paddingTop: 8,
            }}
          >
            🔑 <strong style={{ color: g.color }}>Killer Feature:</strong> {g.killer}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 8 }}>KEY TECHNOLOGIES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {g.features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: 12,
                  color: "#ccc",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ color: g.color, flexShrink: 0 }}>▸</span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Why people buy */}
        <div
          style={{
            background: "#151525",
            borderRadius: 8,
            padding: 12,
            marginBottom: 12,
            borderLeft: `3px solid ${g.color}`,
          }}
        >
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 6 }}>
            WHY PEOPLE ACTUALLY PAY FOR IT
          </div>
          <div style={{ fontSize: 12, color: "#bbb", lineHeight: 1.6 }}>{g.why}</div>
        </div>

        {/* Weakness */}
        <div
          style={{
            background: "#1a1010",
            borderRadius: 8,
            padding: 12,
            borderLeft: "3px solid #ff4444",
          }}
        >
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#ff4444", marginBottom: 6 }}>
            ⚠ WEAKNESS / PUSHBACK
          </div>
          <div style={{ fontSize: 12, color: "#999", lineHeight: 1.6 }}>{g.weakness}</div>
        </div>
      </div>

      {/* The Big Pattern */}
      <div
        style={{
          background: "#0e0e1a",
          border: "1px solid #2a2a4a",
          borderRadius: 12,
          padding: 20,
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 12 }}>
          THE NVIDIA USP EVOLUTION PATTERN
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "RTX 20xx", usp: "Ray Tracing exists", color: "#00c896" },
            { label: "RTX 30xx", usp: "DLSS actually works", color: "#00a8ff" },
            { label: "RTX 40xx", usp: "AI generates frames", color: "#7c4dff" },
            { label: "RTX 50xx", usp: "AI generates 3 frames per 1", color: "#ff6b35" },
            { label: "RTX 60xx", usp: "AI replaces rendering stages", color: "#ff2d78" },
            { label: "RTX 70–80xx", usp: "AI IS the renderer", color: "#ffd700" },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 60, fontSize: 10, color: row.color, flexShrink: 0 }}>{row.label}</div>
              <div style={{ flex: 1 }}>
                <RatingBar value={20 + i * 16} color={row.color} />
              </div>
              <div style={{ fontSize: 11, color: "#888", width: 200, flexShrink: 0 }}>{row.usp}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Jensen's Vision */}
      <div
        style={{
          background: "linear-gradient(135deg, #0e0e1a, #121230)",
          border: "1px solid #ff2d7844",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: 3, color: "#ff2d78", marginBottom: 10 }}>
          JENSEN HUANG · CES 2026 VISION
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#ddd",
            lineHeight: 1.7,
            fontStyle: "italic",
            borderLeft: "3px solid #ff2d78",
            paddingLeft: 14,
            marginBottom: 14,
          }}
        >
          "The future is neural rendering. That's the way graphics ought to be. You're going to see
          the ability to generate imagery of almost any style — from extreme photorealism, basically
          a photograph interacting with you at 500 frames a second, all the way to cartoon shading."
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#777",
            lineHeight: 1.6,
            background: "#0a0a18",
            padding: 12,
            borderRadius: 8,
          }}
        >
          <span style={{ color: "#ff6b35" }}>Bottom line:</span> Every time raw GPU performance only improves 30–40%,
          NVIDIA introduces a new AI-powered capability that{" "}
          <span style={{ color: "#fff" }}>changes what "performance" even means</span>. By RTX 60–70 series,
          the question won't be "how many FPS does it render?" — it'll be "how much of the world can your GPU
          generate using AI?" DLSS 5 (already demoed at GTC 2026 on dual RTX 5090s) points the way.
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 16, fontSize: 10, color: "#333" }}>
        Sources: Tom's Hardware · PCGamer · NVIDIA GTC 2026 · Wccftech · RedGamingTech leaks
      </div>
    </div>
  );
}
