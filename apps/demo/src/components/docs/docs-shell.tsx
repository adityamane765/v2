import Link from "next/link";

import { DocsSearch } from "@/components/docs/docs-search";
import { MarkdownRenderer } from "@/components/docs/markdown-renderer";
import { NyxFooter } from "@/components/brand/nyx-footer";
import { NyxNav } from "@/components/brand/nyx-nav";
import type { DocPageData } from "@/lib/docs";
import { getDocsNav, getDocsSearchIndex } from "@/lib/docs";

export function DocsShell({ doc }: { doc: DocPageData }) {
  const nav = getDocsNav();
  const searchItems = getDocsSearchIndex();

  return (
    <div className="docs-light min-h-screen bg-stone-50 text-stone-950">
      <NyxNav tone="chalk" active="docs" launchHref="/dapp" />
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 px-5 sm:px-7 lg:grid-cols-[260px_minmax(0,1fr)_220px] lg:gap-10">
        <aside className="hidden border-r border-stone-200 py-8 pr-6 lg:block">
          <Link href="/docs" className="text-sm font-semibold text-[var(--nyx-accent)]">
            Documentation
          </Link>
          <div className="mt-5">
            <DocsSearch items={searchItems} />
          </div>
          <nav className="mt-8 space-y-7">
            {nav.map((section) => (
              <div key={section.group}>
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-stone-500">
                  {section.group}
                </div>
                <div className="mt-3 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/docs/${item.slug}`}
                      className="block border-l py-1.5 pl-3 text-sm leading-snug transition-colors hover:text-[var(--nyx-accent)]"
                      style={{
                        borderColor: item.slug === doc.slug ? "var(--nyx-accent)" : "rgb(231 229 228)",
                        color: item.slug === doc.slug ? "rgb(28 25 23)" : "rgb(87 83 78)",
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 py-10 lg:py-14">
          <div className="mb-8 border-b border-stone-200 pb-5 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-stone-500">
              Docs
            </div>
            <div className="mt-3">
              <DocsSearch items={searchItems} />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {nav.flatMap((section) =>
                section.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/docs/${item.slug}`}
                    className="shrink-0 rounded-md border px-3 py-2 text-xs transition-colors"
                    style={{
                      borderColor: item.slug === doc.slug ? "oklch(0.62 0.14 260 / 0.45)" : "rgb(231 229 228)",
                      color: item.slug === doc.slug ? "var(--nyx-accent)" : "rgb(87 83 78)",
                      background: item.slug === doc.slug ? "oklch(0.62 0.14 260 / 0.08)" : "white",
                    }}
                  >
                    {item.title}
                  </Link>
                )),
              )}
            </div>
          </div>

          <div className="mb-8 border-b border-stone-200 pb-8">
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--nyx-accent)]">
              Darknyx Docs
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
              {doc.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
              {doc.description}
            </p>
          </div>
          <MarkdownRenderer content={doc.content} />
        </article>

        <aside className="hidden py-14 xl:block">
          <div className="sticky top-24 border-l border-stone-200 pl-5">
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-stone-500">
              On this page
            </div>
            <nav className="mt-3 space-y-2">
              {doc.headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="block text-xs leading-snug text-stone-500 transition hover:text-[var(--nyx-accent)]"
                  style={{ paddingLeft: heading.depth === 3 ? 12 : 0 }}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </main>
      <NyxFooter tone="chalk" />
    </div>
  );
}
