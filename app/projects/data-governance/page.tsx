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
        Built a foundation of data quality, profiling, and documentation to ensure downstream
        analytics and financial reporting were trustworthy and explainable.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          Multiple business teams were consuming financial and operational datasets from different
          upstream systems. However, inconsistent schemas, null values, and undocumented definitions
          were causing confusion and rework in analytics and reporting.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">The problem</h2>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>No clear understanding of data completeness, accuracy, or consistency</li>
            <li>Different teams using different definitions for the same metrics</li>
            <li>Reporting errors were discovered late, increasing rework and risk</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I built</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          A data profiling and governance workflow that made dataset quality visible, measurable,
          and easier for both engineers and analysts to trust.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>Automated profiling for row counts, nulls, duplicates, and value distributions</li>
            <li>EDA notebooks and summary reports for business-facing transparency</li>
            <li>Standardized documentation for tables, fields, and metrics</li>
            <li>Status dashboards used in sprint and leadership reviews</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Impact</h2>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>Reduced ambiguity around dataset quality and ownership</li>
            <li>Improved trust in financial and operational reporting</li>
            <li>Faster onboarding for analysts and new engineers</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Why this matters in interviews</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
          <li>Shows data quality and governance thinking</li>
          <li>Demonstrates bridging business + engineering</li>
          <li>Highlights documentation and stakeholder alignment</li>
        </ul>
      </section>
    </main>
  );
}
