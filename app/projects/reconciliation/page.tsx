export default function ReconciliationCase() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <p className="text-sm text-zinc-500">Case study</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Large-Scale Financial Data Reconciliation Platform
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        How I helped a financial services organization reconcile 50+ datasets
        with higher accuracy and faster turnaround.
      </p>

      {/* Context */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          A large financial services organization aggregated transaction data from
          more than 50 upstream systems into downstream reporting and regulatory platforms.
          These datasets were owned by different teams and evolved independently, leading
          to inconsistencies, mismatches, and reporting risk.
        </p>
      </section>

      {/* Problem */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">The problem</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          Inconsistent identifiers, formatting differences, and mismatched records created
          reconciliation backlogs, delayed reporting, and reduced confidence in downstream data.
        </p>
      </section>

      {/* What I built */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I built</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          I designed a reconciliation workflow that normalized, matched, and validated data
          across 50+ datasets, while tracking over 200 reconciliation items in a centralized
          control system.
        </p>
      </section>

      {/* How it worked */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">How it worked</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
          <li>Standardized identifiers and formats across all datasets</li>
          <li>Applied deterministic matching and validation rules</li>
          <li>Flagged missing, duplicated, or inconsistent records</li>
          <li>Tracked issue ownership and resolution status</li>
          <li>Generated operational and leadership reports</li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
          <li>~10% increase in reconciliation completion rate</li>
          <li>~95% automated matching accuracy across multi-million-row datasets</li>
          <li>~30% reduction in downstream data errors</li>
        </ul>
      </section>
    </main>
  );
}
