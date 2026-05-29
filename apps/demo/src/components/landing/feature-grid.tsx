"use client";

import Link from "next/link";

import { solutionCards } from "@/components/landing/landing-copy";

const cobalt = "var(--nyx-accent)";
const green = "var(--nyx-signal-green)";

export function FeatureGrid() {
  return (
    <section
      className="relative isolate border-t"
      style={{ borderColor: "rgba(10,10,13,0.08)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-7 sm:py-16">
        <div className="max-w-2xl">
          <span
            className="font-sans text-[10px] uppercase tracking-[0.18em]"
            style={{ color: cobalt }}
          >
            {solutionCards.eyebrow}
          </span>
          <h2
            className="mt-3 font-sans font-semibold leading-tight tracking-[-0.02em]"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
          >
            <span style={{ color: "rgb(28,25,23)" }}>{solutionCards.title}</span>
            <span style={{ color: "rgb(87,83,78)" }}> {solutionCards.titleMuted}</span>
          </h2>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-px sm:grid-cols-2"
          style={{ background: "rgb(231,229,228)" }}
        >
          {solutionCards.cards.map((f) => {
            const clusterColor = f.cluster === "L1" || f.cluster === "ZK" ? green : cobalt;
            const clusterBg = f.cluster === "L1" || f.cluster === "ZK" ? "rgba(95,184,95,0.08)" : "var(--nyx-accent-soft)";
            return (
            <article
              key={f.eyebrow}
              className="group relative overflow-hidden text-left"
              style={{ background: "white", padding: "28px 32px 24px" }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-85"
                style={{
                  backgroundImage: `url(${f.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "hue-rotate(192deg) saturate(1.5) brightness(0.9)",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.94) 20%, rgba(255,255,255,0.62) 100%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: clusterBg,
                      border: `1px solid ${f.cluster === "TEE" || f.cluster === "FBA" ? "oklch(0.62 0.14 260 / 0.35)" : "rgba(95,184,95,0.35)"}`,
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: clusterColor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="font-sans text-[8.5px] uppercase tracking-[0.18em]"
                      style={{ color: clusterColor }}
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

                <div className="mt-8">
                  <span
                    className="font-sans text-[11px] leading-[1.65]"
                    style={{ color: "rgb(87,83,78)" }}
                  >
                    {f.sub}
                  </span>
                </div>
              </div>

              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to right, transparent, ${clusterColor}55, transparent)`,
                }}
              />
            </article>
          );
          })}
        </div>

        <Link
          href="/docs/architecture-overview"
          className="mt-8 inline-flex items-center gap-2 rounded-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:text-[var(--nyx-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nyx-accent)] focus-visible:ring-offset-4"
        >
          Technical architecture
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/docs"
          className="ml-6 mt-8 inline-flex items-center gap-2 rounded-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:text-[var(--nyx-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nyx-accent)] focus-visible:ring-offset-4"
        >
          Read docs
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
