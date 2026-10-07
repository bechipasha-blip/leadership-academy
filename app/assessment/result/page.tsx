"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AssessmentResultPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "Leader";
  const score = Number(searchParams.get("score") ?? 0);
  const title = searchParams.get("title") ?? "Leadership Growth Track";
  const badge = searchParams.get("badge") ?? "Strong leadership potential";
  const summary =
    searchParams.get("summary") ??
    "You are ready for a structured leadership growth plan.";

  return (
    <main className="page-shell narrow-shell">
      <div className="result-banner">
        <span className="eyebrow">Your result</span>
        <h1>{name}, your leadership profile is ready.</h1>
        <p className="result-badge">{badge}</p>
      </div>

      <section className="result-card">
        <div className="score-block">
          <span>Leadership score</span>
          <strong>{score}/8</strong>
        </div>

        <div className="result-copy">
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>

        <div className="recommendation-list">
          <h3>Recommended next steps</h3>
          <ul>
            <li>Start with core leadership modules for communication and delegation</li>
            <li>Complete an assessment to identify skill gaps and coaching opportunities</li>
            <li>Upgrade to Growth for full access to leadership tracks and certifications</li>
          </ul>
        </div>

        <div className="result-actions">
          <Link href="/pricing" className="primary-button">Upgrade to Growth</Link>
          <Link href="/courses" className="secondary-button">Explore courses</Link>
        </div>
      </section>
    </main>
  );
}
