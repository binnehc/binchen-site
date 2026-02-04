import Link from "next/link";

type Project = {
  title: string;
  org: string;
  bullets: string[];
  tags: string[];
  href?: string;
};

const projects: Project[] = [
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
    tags: ["Data Testing", "Defect validation", "QA process"],
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
  title: "Machine Learning-based Fraud Detection - Data Pipeline",
  org: "Financial Services",
  tags: ["SQL", "Python", "ML Pipeline", "Alerts", "Monitoring"],
  bullets: [
  "Built SQL and Python checks to validate incoming fraud signals and model input data.",
  "Detected missing, delayed, and anomalous records before they impacted model scoring.",
  "Implemented production alerts to notify teams of data quality and pipeline failures.",
  "Maintained tracking and reporting to support weekly risk and operations reviews.",
],
  href: "/projects/fraud",
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
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

      <p className="mt-3 text-base leading-7 text-zinc-600">
        Case studies from building and operating data pipelines for financial reporting, reconciliation, 
        and data quality at scale.
      </p>

      <div className="mt-8 grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </main>
  );
}
