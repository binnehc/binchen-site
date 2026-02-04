import Link from "next/link";

export default function DataTestingCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900">
        ← Back to Projects
      </Link>

      <p className="mt-6 text-sm text-zinc-500">Case study</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Data Testing & Defect Validation for Production Pipelines
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        Designed and executed validation workflows to ensure data fixes actually worked and did not
        introduce regressions into production pipelines.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          Data pipelines were being actively developed and patched as defects were discovered.
          However, fixes often caused side effects that were only detected after deployment.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">The problem</h2>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>No consistent way to verify whether a fix actually resolved a defect</li>
            <li>Regression bugs were common after changes</li>
            <li>Business teams lacked confidence in reported numbers</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I built</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          A structured validation workflow that converted defect reports into testable data checks
          and ensured fixes were verified before and after deployment.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>Test cases derived from real defect tickets</li>
            <li>Before/after dataset comparisons to confirm fixes</li>
            <li>Regression checks on impacted downstream tables</li>
            <li>Validation logs shared with engineering and QA teams</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Impact</h2>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>Fewer production regressions</li>
            <li>Higher confidence in data fixes</li>
            <li>Better collaboration between QA, engineering, and analytics teams</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Why this matters in interviews</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
          <li>Shows you treat data like software (testable, verifiable)</li>
          <li>Demonstrates production mindset</li>
          <li>Highlights cross-team debugging skills</li>
        </ul>
      </section>
    </main>
  );
}
