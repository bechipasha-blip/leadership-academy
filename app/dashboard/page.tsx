import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  async function handleSignOut() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Overview</span>
          <h1>Your leadership dashboard</h1>
        </div>
        <div className="header-actions">
          <Link href="/assessments" className="secondary-button">
            Assessments
          </Link>
          <button type="button" className="secondary-button" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>

      <div className="stats-grid dashboard-stats">
        {[
          { label: "Enrolled Courses", value: "12" },
          { label: "Completed Modules", value: "28" },
          { label: "Avg. Assessment Score", value: "91%" },
        ].map((stat) => (
          <div key={stat.label} className="stat-box large-box">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <section className="content-panel">
        <h2>Current learning path</h2>
        <div className="stack-list">
          {[
            { name: "Leading Through Change", progress: 85, status: "In progress" },
            { name: "Coaching High Performers", progress: 62, status: "In progress" },
            { name: "Executive Communication", progress: 100, status: "Completed" },
          ].map((course) => (
            <div key={course.name} className="progress-card">
              <div className="progress-header">
                <div>
                  <h3>{course.name}</h3>
                  <small>{course.status}</small>
                </div>
                <strong>{course.progress}%</strong>
              </div>
              <div className="progress-bar">
                <div style={{ width: `${course.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
