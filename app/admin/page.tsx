import Link from "next/link";

export default function AdminPage() {
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
