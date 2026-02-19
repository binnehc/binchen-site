// app/page.tsx
import Link from "next/link";

const highlights = [
  {
    title: "Data pipelines that scale",
    desc: "Design and build pipelines that process, transform, and reconcile large datasets reliably across systems.",
  },
  {
    title: "Data quality and validation systems",
    desc: "Automated checks, validation rules, and monitoring that prevent regressions and ensure data reliability.",
  },
  {
    title: "Decision-ready data",
    desc: "Well-defined metrics and structured datasets that make analysis faster and more trustworthy.",
  },
];

const featured = [
  {
    label: "Case study",
    title: "Distributed Data Reconciliation Pipeline",
    summary:
      "Improved matching accuracy and reduced discrepancies across multi-million row datasets by designing a scalable reconciliation system.",
    href: "/projects/reconciliation",
    tags: ["Data pipeline", "Reconciliation", "Scalability"],
  },
  {
    label: "Case study",
    title: "Fraud Detection Data Pipeline Reliability",
    summary:
      "Strengthened data quality checks, monitoring, and incident response for a production fraud detection pipeline.",
    href: "/projects/fraud",
    tags: ["Data quality", "Monitoring", "Alerts"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-20">
      {/* HERO */}
      <section className="max-w-3xl">
        <p className="text-sm text-zinc-500">Bin Chen — Data Engineer</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl leading-tight">
          I build data systems that make messy data reliable, understandable, and ready for decisions.
        </h1>

        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg max-w-2xl">
          I work at the intersection of data engineering and analytics, building pipelines,
          validation systems, and workflows that help teams understand what’s happening,
          why it matters, and what to do next.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            View projects →
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            About
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            Resume
          </a>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mt-20 border-t border-zinc-200" />

      {/* WHAT I BUILD */}
      <section className="mt-14">
        <h2 className="text-lg font-semibold text-zinc-900">
          What I build
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {highlights.map((x) => (
            <div key={x.title}>
              <h3 className="text-base font-medium text-zinc-900">
                {x.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {x.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">
            Selected work
          </h2>

          <Link
            href="/projects"
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featured.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group block rounded-xl border border-zinc-200 p-6 transition hover:border-zinc-300"
            >
              <p className="text-xs text-zinc-500">{c.label}</p>

              <h3 className="mt-2 text-lg font-medium text-zinc-900 group-hover:underline">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {c.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOCUS */}
      <section className="mt-20">
        <h2 className="text-lg font-semibold text-zinc-900">
          Focus areas
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Data pipelines",
            "Data quality",
            "Validation systems",
            "Reconciliation",
            "Monitoring",
            "Analytics workflows",
          ].map((t) => (
            <span
              key={t}
              className="text-sm text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-zinc-600">
            Start with the reconciliation pipeline if you want the most concrete example.
          </p>

          <Link
            href="/projects/reconciliation"
            className="text-sm font-medium text-zinc-900 hover:underline"
          >
            View →
          </Link>
        </div>
      </section>
    </main>
  );
}
