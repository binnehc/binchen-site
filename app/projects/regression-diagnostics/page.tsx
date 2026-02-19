// app/projects/regression-diagnostics/page.tsx
import Link from "next/link";

export default function RegressionDiagnostics() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <Link
        href="/projects"
        className="text-sm text-zinc-600 hover:text-zinc-900"
      >
        ← Back to Projects
      </Link>

      <p className="mt-6 text-sm text-zinc-500">Project</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Regression Modeling & Diagnostics
      </h1>

      <p className="mt-4 text-zinc-600 leading-7">
        Built and evaluated regression models to understand relationships
        between variables, diagnose model performance, and analyze bias-variance
        tradeoffs using cross-validation techniques.
      </p>

      {/* Problem */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-3 text-zinc-600 leading-7">
          The goal was to evaluate how model complexity affects prediction
          performance, and to identify the optimal model using different
          validation strategies.
        </p>
      </section>

      {/* Approach */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Approach</h2>
        <ul className="mt-3 space-y-2 text-zinc-600">
          <li>• Built polynomial regression models of varying degrees</li>
          <li>• Applied cross-validation techniques (5-fold, repeated CV, LOO)</li>
          <li>• Compared training vs validation error</li>
        </ul>
      </section>

      {/* Implementation */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Implementation</h2>
        <ul className="mt-3 space-y-2 text-zinc-600">
          <li>• Python (NumPy, scikit-learn)</li>
          <li>• Model evaluation using RMSE</li>
          <li>• Visualization with Matplotlib / Seaborn</li>
        </ul>
      </section>

      {/* Insights */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Key Insights</h2>
        <ul className="mt-3 space-y-2 text-zinc-600">
          <li>• Higher-degree models can overfit without proper validation</li>
          <li>• Cross-validation provides more reliable performance estimates</li>
          <li>• Bias-variance tradeoff is critical in model selection</li>
        </ul>
      </section>
    </main>
  );
}
