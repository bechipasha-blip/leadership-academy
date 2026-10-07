"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.message ?? "Unable to sign in. Please try again.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="page-shell auth-shell">
      <div className="auth-card">
        <span className="eyebrow">Welcome back</span>
        <h1>Sign in to your leadership portal</h1>
        <p>Access courses, assessments, and coaching activities.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              defaultValue="manager@leadership.academy"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              defaultValue="password123"
              required
            />
          </label>

          <div className="remember-row">
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <Link href="/">Forgot password?</Link>
          </div>

          {error ? <p className="error-message">{error}</p> : null}

          <button type="submit" className="primary-button full-width" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="divider"><span>or</span></div>

        <div className="auth-actions">
          <button type="button" className="secondary-button full-width">Continue with Google</button>
          <button
            type="button"
            className="secondary-button full-width"
            onClick={() => router.push("/dashboard")}
          >
            Use demo account
          </button>
        </div>
      </div>
    </main>
  );
}
