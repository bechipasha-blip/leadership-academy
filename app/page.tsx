import Link from "next/link";
import { courses } from "@/lib/data";

export default function HomePage() {
  const featured = courses[0];

  return (
    <main className="page-shell">
      <nav className="topbar">
        <div className="brand">Leadership Academy</div>
        <div className="nav-links">
          <Link href="/courses">Courses</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/" className="primary-button">Get Started</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Build better leaders</span>
          <h1>Train managers and future leaders with measurable growth.</h1>
          <p>
            Deliver leadership courses, interactive scenarios, real-world assessments,
            and mentor feedback in one structured app.
          </p>

          <div className="cta-row">
            <Link href="/courses" className="primary-button">
              Explore Courses
            </Link>
            <Link href="/dashboard" className="secondary-button">
              View Dashboard
            </Link>
          </div>
        </div>

        <div className="card-panel">
          <div className="mini-card">
            <span>Top track</span>
            <h3>{featured.title}</h3>
            <div className="progress-bar">
              <div style={{ width: "78%" }} />
            </div>
            <small>78% complete</small>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span>Quizzes</span>
              <strong>12</strong>
            </div>
            <div className="stat-box">
              <span>Mentor sessions</span>
              <strong>4</strong>
            </div>
          </div>

          <div className="assessment-box">
            <span>Latest assessment</span>
            <strong>Conflict Resolution</strong>
            <em>Score: 88%</em>
          </div>
        </div>
      </section>
    </main>
  );
}
