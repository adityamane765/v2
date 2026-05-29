import { plainBand } from "@/components/landing/landing-copy";

const accent = "var(--nyx-accent)";

export function PlainOverview() {
  return (
    <section
      className="relative isolate border-t"
      style={{ borderColor: "rgba(10,10,13,0.08)", background: "rgb(250,250,249)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-16">
        <div className="max-w-2xl">
          <span
            className="font-sans text-[10px] uppercase tracking-[0.18em]"
            style={{ color: accent }}
          >
            {plainBand.eyebrow}
          </span>
          <h2
            className="mt-3 font-sans font-semibold leading-tight tracking-[-0.02em]"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
          >
            <span style={{ color: "rgb(28,25,23)" }}>{plainBand.title}</span>
          </h2>
          <p
            className="mt-4 max-w-xl font-sans text-[12px] leading-[1.85]"
            style={{ color: "rgb(87,83,78)" }}
          >
            {plainBand.lede}
          </p>
        </div>

        <ul className="mt-10 grid gap-px sm:grid-cols-3" style={{ background: "rgb(231,229,228)" }}>
          {plainBand.points.map((point, i) => (
            <li
              key={point.title}
              className="nyx-rise bg-white p-7 sm:p-8"
              style={{ animationDelay: `${80 + i * 80}ms` }}
            >
              <div
                className="font-sans text-[9px] uppercase tracking-[0.2em]"
                style={{ color: accent, opacity: 0.85 }}
              >
                0{i + 1}
              </div>
              <h3
                className="mt-4 font-sans text-[14px] font-semibold leading-snug tracking-[-0.02em]"
                style={{ color: "rgb(28,25,23)" }}
              >
                {point.title}
              </h3>
              <p
                className="mt-3 font-sans text-[12px] leading-[1.8]"
                style={{ color: "rgb(87,83,78)" }}
              >
                {point.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
