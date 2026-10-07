"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [user, setUser] = useState<{ name?: string; role?: string } | null>(null);

  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => setUser(data.user ?? null))
      .catch(() => setUser(null));
  }, []);

  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Leadership operations</h1>
        </div>
        <div className="header-actions">
          <Link href="/dashboard" className="secondary-button">Team dashboard</Link>
          <Link href="/login" className="secondary-button">Sign out</Link>
        </div>
      </div>

      <div className="user-banner admin-banner">
        <div>
          <span className="eyebrow">Current admin</span>
          <h2>{user?.name ?? "Elena Vasquez"}</h2>
        </div>
        <p>{user?.role === "admin" ? "Administrator access enabled" : "Demo access"}</p>
      </div>

      <div className="stats-grid admin-grid">
        {[
          { label: "Active learners", value: "1,284" },
          { label: "Completion rate", value: "89%" },
          { label: "Mentors online", value: "46" },
          { label: "Avg. assessment", value: "91%" },
        ].map((item) => (
          <div key={item.label} className="stat-box">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <section className="content-panel">
        <h2>Leader performance</h2>
        <div className="table-shell">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Skill score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Ava Nguyen", role: "Senior operations leader", score: 94 },
                { name: "Marcus Lee", role: "People manager", score: 90 },
                { name: "Priya Solanki", role: "Program lead", score: 88 },
                { name: "Daniel Brooks", role: "Team director", score: 86 },
              ].map((member) => (
                <tr key={member.name}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.score}%</td>
                  <td>
                    <span className="status-badge success">On track</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
