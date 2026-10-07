"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  role: string;
  plan?: string;
};

const courses = [
  {
    id: "leading-change",
    name: "Leading Through Change",
    progress: 85,
    status: "In progress",
    modules: 12,
    description: "Navigate change, align teams, and drive adoption.",
  },
  {
    id: "coaching",
    name: "Coaching High Performers",
    progress: 62,
    status: "In progress",
    modules: 10,
    description: "Develop coaching skills and unlock team potential.",
  },
  {
    id: "communication",
    name: "Executive Communication",
    progress: 100,
    status: "Completed",
    modules: 8,
    description: "Present with confidence and influence with clarity.",
  },
  {
    id: "delegation",
    name: "Effective Delegation",
    progress: 0,
    status: "Not started",
    modules: 7,
    description: "Delegate effectively and empower your team.",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setUser(data.user ?? null);
        } else {
          router.push("/login");
        }
      })
      .catch(() => router.push("/login"));
  }, [router]);

  async function handleSignOut() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  function startCourse(courseId: string) {
    setSelectedCourse(courseId);
    router.push(`/courses/${courseId}`);
  }

  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Your leadership growth</h1>
        </div>
        <div className="header-actions">
          {user?.role === "admin" && <Link href="/admin" className="secondary-button">Admin</Link>}
          <button type="button" className="secondary-button" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>

      <div className="user-banner">
        <div>
          <span className="eyebrow">Welcome back</span>
          <h2>{user?.name ?? "Team leader"}</h2>
        </div>
        <div>
          <p>{user?.email ?? "manager@leadership.academy"}</p>
          {user?.plan && <p className="plan-badge">{user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} plan</p>}
        </div>
      </div>

      <div className="stats-grid dashboard-stats">
        {[
          { label: "Courses in progress", value: "2" },
          { label: "Completed modules", value: "28" },
          { label: "Average score", value: "91%" },
        ].map((stat) => (
          <div key={stat.label} className="stat-box large-box">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <section className="content-panel">
        <div className="section-title">
          <h2>Your learning path</h2>
          <Link href="/assessment" className="secondary-button">Take assessment</Link>
        </div>
        <div className="stack-list">
          {courses.map((course) => (
            <div key={course.id} className="progress-card">
              <div className="progress-header">
                <div>
                  <h3>{course.name}</h3>
                  <small>{course.status}</small>
                </div>
                <strong>{course.progress}%</strong>
              </div>
              <p className="course-description">{course.description}</p>
              <div className="progress-bar">
                <div style={{ width: `${course.progress}%` }} />
              </div>
              <div className="course-footer">
                <span>{course.modules} modules</span>
                <button
                  onClick={() => startCourse(course.id)}
                  className={course.progress === 0 ? "primary-button" : "secondary-button"}
                >
                  {course.progress === 0 ? "Start now" : "Continue"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <h2>Next steps</h2>
        <div className="next-steps">
          <div className="step-card">
            <span className="step-number">1</span>
            <h4>Complete your profile</h4>
            <p>Help us personalize your learning experience.</p>
            <Link href="/settings/profile" className="secondary-button">Edit profile</Link>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <h4>Join a cohort</h4>
            <p>Learn with peers and access group coaching sessions.</p>
            <Link href="/cohorts" className="secondary-button">View cohorts</Link>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <h4>Schedule coaching</h4>
            <p>Get personalized feedback from our leadership coaches.</p>
            <Link href="/coaching" className="secondary-button">Book session</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
