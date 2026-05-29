import Link from "next/link";

import { NyxLockup } from "@/components/brand/nyx-mark";
import { hero } from "@/components/landing/landing-copy";

const mono = "font-sans";
const muted = "rgb(87, 83, 78)";

export function LandingHeroCopy() {
  return (
    <div className="relative max-w-2xl">
      <div className="mb-9 sm:mb-10">
        <NyxLockup size={76} markSize={116} tone="ink" />
      </div>
      <h1
        className={`${mono} font-semibold leading-tight`}
        style={{
          fontSize: "clamp(28px, 4.5vw, 44px)",
          letterSpacing: "-0.02em",
        }}
      >
        <span className="block" style={{ color: "rgb(28, 25, 23)" }}>
          Settle in the dark.
        </span>
        <span className="mt-2 block" style={{ color: "var(--nyx-accent)", opacity: 0.85 }}>
          Prove in the light.
        </span>
      </h1>
      <p className={`${mono} mt-6 max-w-xl text-[13px] leading-[1.85] sm:text-[14px]`} style={{ color: muted }}>
        {hero.lede}
      </p>
      <p className={`${mono} mt-4 max-w-lg text-[12px] leading-[1.75]`} style={{ color: "rgb(120, 113, 108)" }}>
        {hero.aside}
      </p>
      <div className="mt-8">
        <Link
          href="/architecture"
          className={`${mono} inline-flex items-center rounded-sm px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition hover:opacity-90`}
          style={{
            background: "var(--nyx-accent-soft)",
            border: "1px solid oklch(0.62 0.14 260 / 0.45)",
            color: "var(--nyx-accent)",
          }}
        >
          How it works
        </Link>
        <Link
          href="/docs"
          className={`${mono} ml-3 inline-flex items-center rounded-sm border border-stone-200 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 transition hover:border-[var(--nyx-accent)]/50 hover:text-[var(--nyx-accent)]`}
        >
          Docs
        </Link>
      </div>
    </div>
  );
}
