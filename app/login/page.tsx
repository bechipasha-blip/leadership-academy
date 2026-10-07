import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="page-shell auth-shell">
      <div className="auth-card">
        <span className="eyebrow">Welcome back</span>
        <h1>Sign in to your leadership portal</h1>
        <p>Access courses, assessments, and coaching activities.</p>

        <form className="auth-form">
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@company.com" defaultValue="manager@leadership.academy" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="Enter password" defaultValue="password123" />
          </label>

          <div className="remember-row">
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <Link href="/">Forgot password?</Link>
          </div>

          <Link href="/dashboard" className="primary-button full-width">
            Sign in
          </Link>
        </form>

        <div className="divider"><span>or</span></div>

        <div className="auth-actions">
          <button type="button" className="secondary-button full-width">Continue with Google</button>
          <button type="button" className="secondary-button full-width">Use demo account</button>
        </div>
      </div>
    </main>
  );
}
