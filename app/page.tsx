// app/page.tsx
import Link from "next/link";

const highlights = [
  {
    title: "Regulatory grade reconciliation at scale",
    desc: "Standardize identifiers, match records, and track exceptions across many upstream systems so discrepancies are visible, owned, and auditable instead of lost in manual trackers.",
  },
  {
    title: "Data quality controls that prevent regressions",
    desc: "Validation rules, automated checks, and release ready test cases that catch issues early and keep financial reporting stable as pipelines evolve.",
  },
  {
    title: "Analytics ready datasets stakeholders trust",
    desc: "Clear metric definitions, documented logic, and governed datasets that let finance and operations teams answer questions without debating what the numbers mean.",
  },
];

const featured = [
  {
    label: "Case study",
    title: "Large Scale Financial Data Reconciliation",
    summary:
      "How I improved matching accuracy and reduced discrepancies across multi million row financial datasets in a regulated environment without exposing client details.",
    href: "/projects/reconciliation",
    tags: ["Reconciliation", "Controls", "Audit-ready"],
  },
  {
    label: "Case study",
    title: "Fraud and Risk Data Pipeline Reliability",
    summary:
      "How I strengthened data quality checks, monitoring, and incident response for a production fraud and risk pipeline in a regulated financial environment.",
    href: "/projects/fraud",
    tags: ["Data quality", "Monitoring", "Alerts"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-14">
      {/* HERO */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
          I build trust layers for financial data.
        </h1>

        <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
        I’m drawn to the moment when someone says “the data doesn’t make sense.”
        That’s where I do my best work. I turn ambiguity into clarity so teams can see what’s going on, why it matters, and what to fix next.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            View case studies →
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
          >
            About
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
          >
            Download resume
          </a>
        </div>
      </section>

      {/* WHAT I DELIVER */}
      <section className="mt-12 max-w-5xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-900">
            What I deliver
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {highlights.map((x) => (
              <div key={x.title} className="rounded-xl border border-zinc-200 bg-white p-5">
                <h3 className="text-base font-semibold text-zinc-900">{x.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">Featured case studies</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {featured.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:bg-zinc-50"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {c.label}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-zinc-900">{c.title}</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">{c.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm font-medium text-zinc-900">Read case study →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* QUIET TRUST SIGNALS */}
      <section className="mt-12">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-900">Focus areas</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Data controls",
              "Reconciliation",
              "Quality and validation",
              "Data governance",
              "Risk and fraud signals",
              "Monitoring and alerts",
              "Stakeholder reporting",
              "Audit-ready documentation",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-zinc-600">
              If you want the most concrete example, start with the reconciliation case study.
              <span className="ml-2">
                <Link
                  href="/projects/reconciliation"
                  className="font-medium text-zinc-900 hover:underline"
                >
                  Read it →
                </Link>
              </span>
            </p>

            <a
              href="mailto:binnehc@gmail.com"
              className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
