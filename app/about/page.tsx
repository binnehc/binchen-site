export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        About
      </h1>

      {/* Narrative */}
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
        I work at the intersection of data, finance, and operations, building trust layers for
        financial systems. My focus is turning messy and inconsistent information into governed
        pipelines, validation controls, and reconciliation workflows so numbers are accurate,
        explainable, and usable with confidence.
        <br />
        <br />
        In regulated environments, data is not just a reporting artifact. It drives capital
        decisions, risk exposure, and regulatory outcomes. Much of my work is about defining
        what data should mean across many upstream systems, then building the checks and
        monitoring that keep those definitions true in production.
        <br />
        <br />
        I work closely with finance, risk, product, and engineering teams to translate business
        questions into data models and analytics ready datasets that leadership can rely on.
        Whether I am resolving reconciliation breaks across millions of rows or stabilizing a
        fraud risk pipeline, the goal is always the same to make data something people trust.
      </p>

      {/* Core strengths as cards */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900">
          Core strengths
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-zinc-900">
              Financial data controls
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              I design and operate validation, reconciliation, and exception workflows that
              catch issues early and prevent bad data from flowing into reporting, models,
              and regulatory outputs.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-zinc-900">
              Analytics ready datasets
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              I build datasets with clear definitions, consistent metrics, and documented
              logic so finance and operations teams can answer questions without debating
              what the numbers mean.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-zinc-900">
              Cross team execution
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              I work across product, finance, risk, and engineering to turn ambiguous business
              problems into production grade data systems that actually get used.
            </p>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Resume
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              View inline or download as PDF
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Resume PDF"
            className="h-[900px] w-full"
          />
        </div>

        <p className="mt-3 text-sm text-zinc-500">
          If the PDF does not render in your browser, use Download PDF
        </p>
      </section>
    </main>
  );
}
