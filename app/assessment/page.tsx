"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const questions = [
  {
    id: "q1",
    prompt: "When your team is facing change, what is your default approach?",
    options: [
      { value: 0, label: "I wait and react to issues as they appear." },
      { value: 1, label: "I communicate a direction and help people adapt." },
      { value: 2, label: "I align the team around a clear plan and support them through it." },
    ],
  },
  {
    id: "q2",
    prompt: "How do you handle difficult performance conversations?",
    options: [
      { value: 0, label: "I avoid them until things get worse." },
      { value: 1, label: "I address issues with clarity and empathy." },
      { value: 2, label: "I create a coaching plan and measure progress with accountability." },
    ],
  },
  {
    id: "q3",
    prompt: "When making a critical decision, what matters most?",
    options: [
      { value: 0, label: "Choosing the fastest answer." },
      { value: 1, label: "Making a thoughtful decision with team input." },
      { value: 2, label: "Balancing data, team insight, and long-term impact." },
    ],
  },
  {
    id: "q4",
    prompt: "What is your strongest leadership habit today?",
    options: [
      { value: 0, label: "I keep work moving and rely on my own judgment." },
      { value: 1, label: "I communicate clearly and support my team." },
      { value: 2, label: "I coach, guide, and create accountability for growth." },
    ],
  },
];

function calculateRecommendation(score: number) {
  if (score >= 7) {
    return {
      title: "Leadership Growth Track",
      summary: "You already show strong leadership instincts. Your next step is to build more consistency in coaching, communication, and team alignment.",
      badge: "Strong leadership potential",
    };
  }

  if (score >= 4) {
    return {
      title: "Manager Development Track",
      summary: "You are developing a solid leadership base. The next step is to deepen your coaching and decision-making skills to lead more confidently.",
      badge: "Ready for manager growth",
    };
  }

  return {
    title: "Leadership Foundations Track",
    summary: "You’re in a strong position to begin structured leadership growth. Focus on communication, difficult conversations, and thinking through decisions with clarity.",
    badge: "Foundational growth path",
  };
}

export default function AssessmentPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "" });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [error, setError] = useState("");

  function handleAnswer(questionId: string, value: number) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
    setError("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email to continue.");
      return;
    }

    const answeredCount = Object.keys(answers).length;
    if (answeredCount !== questions.length) {
      setError("Please answer all leadership questions before submitting.");
      return;
    }

    const score = Object.values(answers).reduce((total, value) => total + value, 0);
    const recommendation = calculateRecommendation(score);
    const params = new URLSearchParams({
      name: form.name,
      email: form.email,
      score: String(score),
      title: recommendation.title,
      badge: recommendation.badge,
      summary: recommendation.summary,
    });

    router.push(`/assessment/result?${params.toString()}`);
  }

  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Free assessment</span>
          <h1>Leadership readiness check</h1>
        </div>
        <Link href="/pricing" className="secondary-button">View pricing</Link>
      </div>

      <form className="assessment-form" onSubmit={handleSubmit}>
        <div className="assessment-input-grid">
          <label className="field-group">
            <span>Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              placeholder="Your name"
            />
          </label>

          <label className="field-group">
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              placeholder="you@company.com"
            />
          </label>
        </div>

        <div className="question-list">
          {questions.map((question, index) => (
            <fieldset key={question.id} className="question-card">
              <legend>
                {index + 1}. {question.prompt}
              </legend>

              <div className="option-list">
                {question.options.map((option) => (
                  <label key={`${question.id}-${option.label}`} className="option-row">
                    <input
                      type="radio"
                      name={question.id}
                      checked={answers[question.id] === option.value}
                      onChange={() => handleAnswer(question.id, option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        {error ? <p className="error-message">{error}</p> : null}

        <button type="submit" className="primary-button full-width">
          See my leadership result
        </button>
      </form>
    </main>
  );
}
