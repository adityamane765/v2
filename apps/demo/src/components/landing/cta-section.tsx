import Link from "next/link";

import { NyxMark } from "@/components/brand/nyx-mark";
import { cta } from "@/components/landing/landing-copy";

export function CtaSection() {
  return (
    <section
      className="relative isolate border-t py-20 sm:py-24"
      style={{ borderColor: "rgba(10,10,13,0.08)" }}
    >
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-7">
        <NyxMark size={56} className="mx-auto nyx-drift" style={{ color: "var(--nyx-accent)" }} />
        <h2
          className="mt-7 font-sans font-semibold leading-tight tracking-[-0.02em]"
        >
          <span
            className="block"
            style={{ fontSize: "clamp(22px, 3.5vw, 36px)", color: "var(--nyx-accent)" }}
          >
            {cta.title}
          </span>
          <span
            className="mt-2 block"
            style={{ fontSize: "clamp(18px, 2.5vw, 28px)", color: "rgb(87,83,78)" }}
          >
            {cta.titleMuted}
          </span>
        </h2>
        <p
          className="mx-auto mt-5 max-w-lg font-sans text-[12px] leading-[1.85]"
          style={{ color: "rgb(87,83,78)" }}
        >
          {cta.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/architecture-overview"
            className="group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nyx-accent)] focus-visible:ring-offset-4"
            style={{
              background: "var(--nyx-accent-soft)",
              border: "1px solid oklch(0.62 0.14 260 / 0.4)",
              color: "var(--nyx-accent)",
            }}
          >
            Architecture
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path
                d="M2 5.5h7m0 0L5.5 2m3.5 3.5L5.5 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/docs/trust-model"
            className="inline-flex items-center gap-2 rounded-sm border border-stone-200 px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:border-[var(--nyx-accent)]/50 hover:text-[var(--nyx-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nyx-accent)] focus-visible:ring-offset-4"
          >
            Trust model
          </Link>
          <Link
            href="/docs/api-and-integration"
            className="inline-flex items-center gap-2 rounded-sm border border-stone-200 px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:border-[var(--nyx-accent)]/50 hover:text-[var(--nyx-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nyx-accent)] focus-visible:ring-offset-4"
          >
            API surface
          </Link>
        </div>
      </div>
    </section>
  );
}
