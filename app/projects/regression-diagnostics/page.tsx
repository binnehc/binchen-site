import Link from "next/link";

export default function RegressionDiagnosticsCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-900">
        ← Back to Projects
      </Link>

      <p className="mt-6 text-sm text-zinc-500">Case study</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Diagnosing Regression Under Noise & Limited Data
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        Used controlled synthetic experiments to understand how noise and sample size affect metric stability,
        coefficient variance, and confidence in results.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Context</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            This case study uses synthetic regression data to explore how data properties—specifically noise
            and sample size—shape model performance. Synthetic setups are valuable because the “true” relationship
            is known, enabling clearer reasoning about error and variability.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Why this matters</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            In real-world ML, weak results often reflect data constraints rather than bad algorithms.
            Understanding how uncertainty shows up in metrics helps teams set expectations, avoid overfitting,
            and decide when to invest in better data versus more complex models.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Generated regression data with controlled noise and known parameters.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Fit linear regression as a diagnostic tool to observe stability across conditions.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>Compared metrics and coefficient behavior as noise increased or sample size decreased.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Insights</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            As noise increases, error metrics worsen and R² can drop even when the model form is correct.
            With limited data, coefficient estimates and metrics become more volatile, which can lead to
            overconfident conclusions if evaluation is treated as a single fixed number.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Tradeoffs and limitations</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            Synthetic data provides controlled clarity but lacks real-world issues like missingness, feature
            interactions, and measurement bias. The value here is building intuition that transfers to applied
            evaluation work.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Key takeaways</h2>
          <p className="mt-3 text-zinc-600 leading-7">
            Performance metrics are only meaningful in context. Noise and sample size shape what “good” looks like,
            and stable evaluation practices are as important as model choice.
          </p>
        </div>
      </section>
    </main>
  );
}
