// app/projects/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  org: string;
  bullets: string[];
  tags: string[];
  href?: string;
};

type ProjectGroup = {
  heading: string;
  subheading?: string;
  items: Project[];
};

const projectGroups: ProjectGroup[] = [
  {
    heading: "Professional case studies",
    subheading:
      "Case studies from building and operating data pipelines for financial reporting, reconciliation, and data quality at scale.",
    items: [
      {
        title: "Data Governance & Data Profiling for Financial Reporting",
        org: "Financial Services",
        tags: ["Data Profiling", "EDA", "Data Governance", "Stakeholder Reporting"],
        bullets: [
          "Profiled 50+ financial datasets to quantify null rates, duplicates, schema drift, and data completeness.",
          "Built exploratory analysis and summary reports to expose data quality issues to business and analytics teams.",
          "Standardized metric definitions and dataset documentation to align reporting across teams.",
          "Created dashboards used in sprint and leadership reviews to track data readiness and risks.",
        ],
        href: "/projects/data-governance",
      },
      {
        title: "Data Testing & Production Defect Validation",
        org: "Financial Services",
        tags: ["Data Testing", "Defect Validation", "QA Process"],
        bullets: [
          "Converted real defect tickets into data validation tests to verify fixes and prevent regressions.",
          "Built before-and-after dataset comparisons to confirm pipeline changes behaved as expected.",
          "Validated downstream tables impacted by upstream fixes to ensure reporting accuracy.",
          "Produced validation reports used by engineering and QA teams before production release.",
        ],
        href: "/projects/data-testing",
      },
      {
        title: "Large-Scale Data Reconciliation",
        org: "Financial Services",
        tags: ["Reconciliation", "Power Query", "Data Matching", "Data Quality", "Data Pipeline"],
        bullets: [
          "Designed a reconciliation workflow to normalize and match 50+ multi-million-row datasets.",
          "Applied deterministic matching rules and exception handling to achieve ~95% matching accuracy.",
          "Tracked 200+ reconciliation items in a centralized control sheet for operational visibility.",
          "Generated stakeholder reports that increased reconciliation completion by ~10% and reduced errors by ~30%.",
        ],
        href: "/projects/reconciliation",
      },
      {
        title: "Fraud Scoring Data Reliability & Monitoring (ML Pipeline)",
        org: "Financial Services",
        tags: ["Data Reliability", "ML Systems", "Monitoring", "Alerts", "SQL", "Python"],
        bullets: [
          "Built SQL/Python validations to ensure fraud signals and model inputs met freshness, completeness, and schema expectations.",
          "Detected missing, delayed, and anomalous records before they impacted scoring and downstream decisions.",
          "Implemented production alerts and lightweight runbooks to reduce time-to-detection for data and pipeline failures.",
          "Maintained tracking and reporting to support weekly risk/ops reviews and prioritize fixes.",
        ],
        href: "/projects/fraud",
      },
    ],
  },
  {
    heading: "Machine learning fundamentals",
    subheading:
      "Selected studies focused on building baselines, interpreting error, and developing good evaluation instincts.",
    items: [
      {
        title: "Interpretable Regression Baseline for Compensation Prediction",
        org: "Coursework",
        tags: ["Regression", "Baseline Modeling", "Evaluation", "Interpretability"],
        bullets: [
          "Established a clean end-to-end workflow from data understanding to model evaluation.",
          "Used multiple metrics (e.g., MAE/MSE/R²) to interpret performance from different angles.",
          "Focused on transparent assumptions and stakeholder-friendly explanations of limitations.",
          "Documented clear next-step improvements (features, validation strategy, monitoring) for production readiness.",
        ],
        href: "/projects/regression-baseline",
      },
      {
        title: "Diagnosing Regression Under Noise & Limited Data",
        org: "Coursework",
        tags: ["Regression", "Bias–Variance", "Error Analysis", "Model Diagnostics"],
        bullets: [
          "Used controlled synthetic experiments to understand how noise inflates error and destabilizes evaluation.",
          "Observed how small sample sizes increase coefficient variance and metric volatility across runs.",
          "Interpreted metrics in context rather than treating single scores as absolute truth.",
          "Translated findings into practical guidance for evaluation and expectation-setting.",
        ],
        href: "/projects/regression-diagnostics",
      },
    ],
  },
];

function ProjectCard({ p }: { p: Project }) {
  const content = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-zinc-500">{p.org}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
        {p.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {p.href ? (
        <p className="mt-4 text-sm font-medium text-zinc-900">
          View case study →
        </p>
      ) : null}
    </>
  );

  const className =
    "block rounded-2xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50";

  if (p.href) {
    return (
      <Link href={p.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

      {/* Two-column layout with independent scroll */}
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {projectGroups.map((g) => (
          <section key={g.heading} className="flex max-h-[70vh] flex-col">
            {/* Header */}
            <div className="mb-6 sticky top-0 z-10 bg-zinc-50 pb-4">
              <h2 className="text-xl font-semibold tracking-tight">
                {g.heading}
              </h2>
              {g.subheading ? (
                <p className="mt-2 text-base leading-7 text-zinc-600">
                  {g.subheading}
                </p>
              ) : null}
            </div>

            {/* Scrollable list */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="grid gap-4">
                {g.items.map((p) => (
                  <ProjectCard key={p.title} p={p} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
