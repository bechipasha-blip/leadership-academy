import Link from "next/link";

const stats = [
  { label: "Enrolled Courses", value: "12" },
  { label: "Completed Modules", value: "28" },
  { label: "Avg. Assessment Score", value: "91%" },
];

const courseProgress = [
  { name: "Leading Through Change", progress: 85, status: "In progress" },
  { name: "Coaching High Performers", progress: 62, status: "In progress" },
  { name: "Executive Communication", progress: 100, status: "Completed" },
];

export default function DashboardPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Overview</span>
          <h1>Your leadership dashboard</h1>
        </div>
        <Link href="/courses" className="secondary-button">
          Browse courses
        </Link>
      </div>

      <div className="stats-grid dashboard-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box large-box">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <section className="content-panel">
        <h2>Current learning path</h2>
        <div className="stack-list">
          {courseProgress.map((course) => (
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
