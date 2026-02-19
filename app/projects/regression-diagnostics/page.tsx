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
    heading: "Data Engineering & Pipelines",
    subheading:
      "Building data pipelines and systems to process, transform, and reconcile large-scale datasets.",
    items: [
      {
        title: "Distributed Data Reconciliation Pipeline",
        org: "Financial Services",
        tags: ["Data Pipeline", "Reconciliation", "Scalability"],
        href: "/projects/reconciliation",
        bullets: [
          "Designed a pipeline to match and reconcile multi-million row datasets across systems.",
          "Standardized identifiers and transformation logic to improve matching accuracy.",
          "Built exception tracking workflows to surface discrepancies for downstream resolution.",
        ],
      },
      {
        title: "Fraud Detection ML Pipeline",
        org: "Financial Services",
        tags: ["ML Pipeline", "Feature Engineering", "Production"],
        href: "/projects/fraud",
        bullets: [
          "Developed an end-to-end ML pipeline from data ingestion to model output.",
          "Engineered features and validation checks to improve model reliability.",
          "Integrated monitoring to track model performance and data drift.",
        ],
      },
    ],
  },
  {
    heading: "Data Quality & Reliability",
    subheading:
      "Ensuring data accuracy, consistency, and trust through validation frameworks and monitoring.",
    items: [
      {
        title: "Data Quality Monitoring & Profiling System",
        org: "Financial Reporting",
        tags: ["Data Quality", "Profiling", "Monitoring"],
        href: "/projects/data-governance",
        bullets: [
          "Profiled 50+ datasets to identify null rates, duplicates, and schema inconsistencies.",
          "Designed reusable validation rules for data quality checks across pipelines.",
          "Generated summary metrics to track data quality over time.",
        ],
      },
      {
        title: "Automated Data Validation Framework",
        org: "Financial Services",
        tags: ["Testing", "Validation", "Automation"],
        href: "/projects/data-testing",
        bullets: [
          "Built automated validation checks to ensure data consistency across transformations.",
          "Created reusable test cases for regression testing of data pipelines.",
          "Reduced manual validation effort and improved release confidence.",
        ],
      },
    ],
  },
  {
    heading: "Analytics & Data Modeling",
    subheading:
      "Transforming raw data into structured, analysis-ready datasets for business insights.",
    items: [
      {
        title: "Regression Modeling & Diagnostics",
        org: "Academic / Personal",
        tags: ["Modeling", "EDA", "Statistics"],
        href: "/projects/regression-diagnostics",
        bullets: [
          "Built regression models and evaluated performance using cross-validation.",
          "Analyzed bias-variance tradeoffs and model complexity.",
          "Visualized model behavior using diagnostic plots.",
        ],
      },
      {
        title: "Regression Baseline Modeling",
        org: "Academic / Personal",
        tags: ["Baseline", "Evaluation"],
        href: "/projects/regression-baseline",
        bullets: [
          "Established baseline models for comparison across multiple approaches.",
          "Evaluated model performance using RMSE and cross-validation.",
          "Provided interpretable insights into feature relationships.",
        ],
      },
    ],
  },
];
export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        Projects
      </h1>

      <p className="mt-4 max-w-2xl text-zinc-600 leading-7">
        A selection of work across data engineering, data quality, and machine
        learning systems. Focused on building reliable data pipelines and
        turning complex datasets into clear, actionable insights.
      </p>

      <div className="mt-10 space-y-14">
        {projectGroups.map((group) => (
          <section key={group.heading}>
            <h2 className="text-xl font-semibold text-zinc-900">
              {group.heading}
            </h2>

            {group.subheading && (
              <p className="mt-2 text-sm text-zinc-500 max-w-2xl">
                {group.subheading}
              </p>
            )}

            <div className="mt-6 grid gap-6">
              {group.items.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium text-zinc-900">
                      {project.title}
                    </h3>
                    <span className="text-xs text-zinc-500">
                      {project.org}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                    {project.bullets.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>

                  {project.href && (
                    <Link
                      href={project.href}
                      className="mt-4 inline-block text-sm text-zinc-900 hover:underline"
                    >
                      View details →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}