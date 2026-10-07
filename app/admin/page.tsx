import Link from "next/link";
import { courseStats, teamMembers } from "@/lib/data";

export default function AdminPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Leadership operations</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">
          Team dashboard
        </Link>
      </div>

      <div className="stats-grid admin-grid">
        {courseStats.map((item) => (
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
              {teamMembers.map((member) => (
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
