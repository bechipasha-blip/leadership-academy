import Link from "next/link";
import { assessments } from "@/lib/data";

export default function AssessmentsPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Assessments</span>
          <h1>Leadership skill checks</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">
          Return to dashboard
        </Link>
      </div>

      <section className="content-panel">
        <h2>Recent evaluations</h2>

        <div className="stack-list">
          {assessments.map((assessment) => (
            <div key={assessment.title} className="assessment-card">
              <div className="assessment-topline">
                <div>
                  <h3>{assessment.title}</h3>
                  <small>{assessment.status}</small>
                </div>
                <strong>{assessment.score}%</strong>
              </div>
              <div className="progress-bar">
                <div style={{ width: `${assessment.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
