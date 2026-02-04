export default function FraudCase() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <p className="text-sm text-zinc-500">Case study</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Fraud Detection Data Pipeline & Quality Platform
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        How I helped stabilize and protect ML-based fraud detection through
        data engineering and quality controls.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Context</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          A financial services organization relied on machine learning models to detect fraud
          in high-volume transaction streams. The models were only as reliable as the data
          feeding them.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">The problem</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          Late, missing, or corrupted data caused model instability, false positives,
          and blind spots. There was no automated guardrail to stop bad data from reaching production.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I built</h2>
        <p className="mt-3 text-zinc-700 leading-7">
          I built a data quality and monitoring layer around the fraud pipelines to validate
          data before it reached the models and to alert teams when something went wrong.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">How it worked</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
          <li>HiveQL and Python pipelines generated model-ready datasets</li>
          <li>Automated checks validated row counts, nulls, schema, and drift</li>
          <li>Failures triggered alerts and blocked bad data</li>
          <li>Dashboards provided visibility to fraud and engineering teams</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
          <li>Prevented bad data from degrading ML performance</li>
          <li>Reduced production incidents related to data issues</li>
          <li>Improved trust in fraud detection outputs</li>
        </ul>
      </section>
    </main>
  );
}
