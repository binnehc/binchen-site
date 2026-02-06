import Link from "next/link";

export default function RegressionBaselineCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900">
        ← Back to Projects
      </Link>

      <p className="mt-6 text-sm text-zinc-500">Case study</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Interpretable Regression Baseline for Compensation Prediction
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        Built a transparent regression baseline to validate assumptions, evaluate performance,
        and communicate results clearly before introducing complexity.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Context</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            This case study focuses on a foundational regression problem: predicting compensation from
            years of experience. While the dataset is intentionally small and simplified, it mirrors
            a common real-world scenario—using limited historical data to establish a baseline model
            that stakeholders can understand, validate, and trust.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Why this matters</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            In applied machine learning work, teams rarely start with complex models. A simple baseline
            helps validate signal in the data, surface data issues early, and align expectations before
            investing in feature expansion or higher-capacity algorithms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Started with ordinary least squares linear regression to prioritize interpretability.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Used multiple metrics (MAE / MSE / R²) to understand error from different angles.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Reviewed results visually to confirm behavior looked reasonable, not just “high scoring.”</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Evaluation and interpretation</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            Rather than treating a single metric as truth, I used complementary measures to interpret
            model behavior. MAE helps quantify typical error in real units, MSE emphasizes larger misses,
            and R² indicates how much variance the model explains. Together, they support more grounded
            conclusions about model usefulness and limitations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Tradeoffs and limitations</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            This baseline prioritizes clarity over expressiveness. With limited features and small sample size,
            performance estimates can be unstable. In a production setting, I would expand feature coverage,
            use cross-validation for stability, and define monitoring signals to detect drift over time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Key takeaways</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            A strong baseline is less about “winning metrics” and more about building trust: clear assumptions,
            sensible evaluation, and communication that supports decision-making.
          </p>
        </div>
      </section>
    </main>
  );
}
