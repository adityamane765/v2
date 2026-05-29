"use client";

import Link from "next/link";

const cobalt = "var(--nyx-accent)";
const green = "#5fb85f";

const FEATURES = [
  {
    eyebrow: "01 · Hidden intent",
    title: "Private orders,\npublicly settled.",
    sub: "Side, price, and amount stay inside the TDX enclave until batch settlement.",
    cluster: "TEE",
    clusterColor: cobalt,
    clusterBg: "var(--nyx-accent-soft)",
    tech: "Intel TDX · Phala",
    image: "/card-1.jpg",
  },
  {
    eyebrow: "02 · Verifiable settlement",
    title: "Every batch has\nproof material.",
    sub: "VALID_SPEND · VALID_MATCH_BATCH · BN254 verification on Solana.",
    cluster: "L1",
    clusterColor: green,
    clusterBg: "rgba(95,184,95,0.08)",
    tech: "groth16-solana",
    image: "/card-3.jpg",
  },
  {
    eyebrow: "03 · Attested executor",
    title: "The matcher is\nmeasured code.",
    sub: "Intel TDX attestation binds settlement signatures to the approved image.",
    cluster: "TEE",
    clusterColor: cobalt,
    clusterBg: "var(--nyx-accent-soft)",
    tech: "Phala Cloud",
    image: "/card-2.jpg",
  },
  {
    eyebrow: "04 · UTXO accounting",
    title: "Shielded notes,\nverifiable roots.",
    sub: "Poseidon commitments, nullifiers, and root history keep funds reconcilable.",
    cluster: "L1",
    clusterColor: green,
    clusterBg: "rgba(95,184,95,0.08)",
    tech: "darkpool-crypto",
    image: "/card-4.jpg",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="landing-content"
      className="relative isolate border-t"
      style={{ borderColor: "rgba(10,10,13,0.08)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-7 sm:py-16">
        <div className="max-w-2xl">
          <span
            className="font-sans text-[10px] uppercase tracking-[0.18em]"
            style={{ color: cobalt }}
          >
            Investor brief
          </span>
          <h2
            className="mt-3 font-sans font-semibold leading-tight tracking-[-0.02em]"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
          >
            <span style={{ color: "rgb(28,25,23)" }}>A private liquidity venue</span>
            <span style={{ color: "rgb(87,83,78)" }}> with a verifiable settlement core.</span>
          </h2>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-px sm:grid-cols-2"
          style={{ background: "rgb(231,229,228)" }}
        >
          {FEATURES.map((f) => (
            <article
              key={f.eyebrow}
              className="group relative overflow-hidden text-left"
              style={{ background: "white", padding: "28px 32px 24px" }}
            >
              {/* background image - shifted to cobalt blue via filter */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-85"
                style={{
                  backgroundImage: `url(${f.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "hue-rotate(192deg) saturate(1.5) brightness(0.9)",
                }}
              />

              {/* dark gradient overlay so text stays readable */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.94) 20%, rgba(255,255,255,0.62) 100%)",
                }}
              />

              {/* content container to ensure it renders above the absolute-positioned media */}
              <div className="relative z-10">
                {/* top row */}
                <div className="flex items-center justify-between">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: f.clusterBg,
                      border: `1px solid ${f.cluster === "TEE" ? "oklch(0.62 0.14 260 / 0.35)" : "rgba(95,184,95,0.35)"}`,
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: f.clusterColor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="font-sans text-[8.5px] uppercase tracking-[0.18em]"
                      style={{ color: f.clusterColor }}
                    >
                      {f.cluster}
                    </span>
                  </div>
                  <span
                    className="font-sans text-[9px] tracking-[0.12em]"
                    style={{ color: "rgb(120,113,108)" }}
                  >
                    {f.tech}
                  </span>
                </div>

                {/* title block */}
                <div className="mt-10">
                  <div
                    className="font-sans text-[9px] uppercase tracking-[0.2em]"
                    style={{ color: "rgb(120,113,108)" }}
                  >
                    {f.eyebrow}
                  </div>
                  <h3
                    className="mt-3 font-sans font-semibold leading-[1.18] tracking-[-0.025em] whitespace-pre-line"
                    style={{
                      fontSize: "clamp(17px, 2vw, 21px)",
                      color: "rgb(28,25,23)",
                    }}
                  >
                    {f.title}
                  </h3>
                </div>

                {/* sub — bottom */}
                <div className="mt-8">
                  <span
                    className="font-sans text-[11px] leading-[1.65]"
                    style={{ color: "rgb(87,83,78)" }}
                  >
                    {f.sub}
                  </span>
                </div>
              </div>

              {/* hover line */}
              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to right, transparent, ${f.clusterColor}55, transparent)`,
                }}
              />
            </article>
          ))}
        </div>

        <Link
          href="/docs/architecture-overview"
          className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:text-[var(--nyx-accent)]"
        >
          Technical architecture
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/docs"
          className="ml-6 mt-8 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:text-[var(--nyx-accent)]"
        >
          Read docs
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
