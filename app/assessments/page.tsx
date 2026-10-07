import Link from "next/link";

export default function AssessmentsPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Assessments</span>
          <h1>Leadership skill checks</h1>
        </div>
        <div className="header-actions">
          <Link href="/dashboard" className="secondary-button">Dashboard</Link>
          <Link href="/login" className="secondary-button">Sign out</Link>
        </div>
      </div>

      <section className="content-panel">
        <h2>Recent evaluations</h2>

        <div className="stack-list">
          {[
            { title: "Conflict Resolution", score: 88, status: "Strong" },
            { title: "Decision Quality", score: 93, status: "Excellent" },
            { title: "Delegation Readiness", score: 79, status: "Improving" },
            { title: "Executive Presence", score: 85, status: "Strong" },
          ].map((assessment) => (
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
