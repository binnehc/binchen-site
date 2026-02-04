import Link from "next/link";

export default function DataGovernanceCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900">
        ← Back to Projects
      </Link>

      <p className="mt-6 text-sm text-zinc-500">Case study</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Data Governance & Data Profiling for Financial Reporting
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        Built a data governance and profiling foundation that made financial reporting trustworthy,
        explainable, and auditable.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          Multiple finance and operations teams were using the same datasets to drive reporting and
          decisions, but no one could clearly explain where the numbers came from, what they meant,
          or whether they were correct.
          <br />
          <br />
          As a result, analysts spent more time reconciling numbers than analyzing them, and reporting
          cycles were slowed by repeated questions and last-minute fixes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">The problem</h2>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>Different teams were producing different answers to the same financial questions</li>
            <li>Data quality issues were discovered only after reports were already in use</li>
            <li>
              No clear ownership of tables, metrics, or definitions, creating audit and compliance
              risk
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I built</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          A lightweight data governance and profiling system that made dataset quality, ownership,
          and definitions visible before issues reached reporting and leadership.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>
              Automated profiling of row counts, nulls, duplicates, and value distributions to
              surface issues early
            </li>
            <li>
              Business-friendly EDA summaries that translated technical findings into financial
              context
            </li>
            <li>
              Standardized documentation for tables, fields, and financial metrics to align teams
            </li>
            <li>Status dashboards used in sprint planning and leadership reviews to drive accountability</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Impact</h2>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>Reduced ambiguity around dataset quality, ownership, and metric definitions</li>
            <li>Improved confidence in financial and operational reporting</li>
            <li>Shortened onboarding time for analysts and engineers</li>
            <li>
              Lowered the risk of reporting errors reaching leadership or external stakeholders
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Why this matters in interviews</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
          <li>Shows how I design data quality, controls, and governance in real financial systems</li>
          <li>Demonstrates how I bridge engineering, analytics, and business stakeholders</li>
          <li>Reflects how I build systems that reduce risk and increase trust at scale</li>
        </ul>
      </section>
    </main>
  );
}
