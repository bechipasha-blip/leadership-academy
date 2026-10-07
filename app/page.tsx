import Link from "next/link";

const highlights = [
  { title: "Leadership tracks", description: "Practical courses built for real-world leadership challenges." },
  { title: "Skill assessments", description: "Measure growth in communication, coaching, and decision-making." },
  { title: "Team reporting", description: "Give managers and leaders visibility into performance and readiness." },
  { title: "Career momentum", description: "Help employees become stronger leaders with measurable progress." },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For individuals building leadership fundamentals.",
    features: ["3 core leadership tracks", "Progress tracking", "Skill assessments", "Email support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "For managers who want coaching, analytics, and certifications.",
    features: ["Everything in Starter", "Full course library", "Certification paths", "Advanced analytics"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations scaling leadership development across teams.",
    features: ["Team onboarding", "Admin dashboards", "Progress reporting", "Dedicated support"],
    featured: false,
  },
];

const testimonials = [
  {
    quote: "Leadership Academy helped our managers improve communication and accountability in just a few weeks.",
    author: "Alicia Gomez",
    role: "Operations Director",
  },
  {
    quote: "The program feels practical, immediate, and aligned with the real situations leaders face every day.",
    author: "Marcus Chen",
    role: "Senior Manager",
  },
  {
    quote: "We used it to support a leadership development program across multiple teams and it was easy to roll out.",
    author: "Nadia Patel",
    role: "People & Culture Lead",
  },
];

export default function HomePage() {
  return (
    <main className="landing-shell">
      <header className="landing-header">
        <div className="brand-wrap">
          <span className="brand-mark">LA</span>
          <span className="brand-name">Leadership Academy</span>
        </div>

        <nav className="landing-nav">
          <Link href="/pricing">Pricing</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/assessments">Assessments</Link>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="nav-link-button secondary">Log in</Link>
          <Link href="/pricing" className="nav-link-button primary">Get started</Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Leadership growth platform</span>
          <h1>Turn managers into confident leaders</h1>
          <p>
            Build the communication, coaching, and decision-making skills that help teams perform at a higher level.
          </p>
          <div className="cta-row">
            <Link href="/pricing" className="primary-button hero-button">Start free assessment</Link>
            <Link href="/pricing" className="secondary-button hero-button">View pricing</Link>
          </div>
          <div className="mini-stats">
            <div>
              <strong>4.9/5</strong>
              <span>Average learner rating</span>
            </div>
            <div>
              <strong>12k+</strong>
              <span>Leaders trained</span>
            </div>
            <div>
              <strong>89%</strong>
              <span>Completion rate</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card">
            <span className="panel-label">Top leadership track</span>
            <h3>Leading Through Change</h3>
            <div className="progress-bar">
              <div style={{ width: "78%" }} />
            </div>
            <small>78% complete</small>
          </div>

          <div className="panel-grid">
            <div className="mini-stat-box">
              <span>Quizzes</span>
              <strong>12</strong>
            </div>
            <div className="mini-stat-box">
              <span>Mentor</span>
              <strong>4</strong>
            </div>
          </div>

          <div className="panel-assessment">
            <span>Latest assessment</span>
            <strong>Conflict Resolution</strong>
            <em>Score: 88%</em>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <span>Trusted by growing teams and leaders</span>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">Why teams choose us</span>
          <h2>Leadership training that drives real-world performance</h2>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="two-column section-spacing">
        <div>
          <span className="eyebrow">The problem</span>
          <h2>Managers are often promoted before they’re trained.</h2>
        </div>
        <div>
          <p>
            Leadership Academy gives professionals the tools to communicate better, coach with confidence, navigate change,
            and lead high-performance teams without guesswork.
          </p>
        </div>
      </section>

      <section className="learning-section section-spacing">
        <div className="section-heading narrow-heading">
          <span className="eyebrow">What learners get</span>
          <h2>Structured growth across the leadership journey</h2>
        </div>
        <div className="learning-grid">
          <div className="learning-card">
            <h3>Leadership Foundations</h3>
            <ul>
              <li>Communication</li>
              <li>Emotional intelligence</li>
              <li>Coaching conversations</li>
              <li>Conflict resolution</li>
            </ul>
          </div>
          <div className="learning-card">
            <h3>Manager Development</h3>
            <ul>
              <li>Delegation</li>
              <li>Decision-making</li>
              <li>Change leadership</li>
              <li>Executive presence</li>
            </ul>
          </div>
          <div className="learning-card">
            <h3>Team & Org Growth</h3>
            <ul>
              <li>Manager readiness assessments</li>
              <li>Progress dashboards</li>
              <li>Team reporting</li>
              <li>Organizational benchmarking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pricing-section section-spacing">
        <div className="section-heading">
          <span className="eyebrow">Pricing</span>
          <h2>Choose the plan that fits your leadership goals</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`price-card ${plan.featured ? "featured" : ""}`}>
              <div className="price-topline">
                <h3>{plan.name}</h3>
                {plan.featured ? <span className="popular-tag">Most popular</span> : null}
              </div>
              <div className="price-row">
                <span className="price-value">{plan.price}</span>
                <span className="price-period">/ month</span>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href="/pricing" className={plan.featured ? "primary-button full-width" : "secondary-button full-width"}>
                {plan.name === "Enterprise" ? "Talk to sales" : "Get started"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section section-spacing">
        <div className="section-heading">
          <span className="eyebrow">Customer feedback</span>
          <h2>Leaders trust the process</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.author} className="testimonial-card">
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner section-spacing">
        <div>
          <span className="eyebrow">Start now</span>
          <h2>Take the free leadership assessment</h2>
        </div>
        <Link href="/login" className="primary-button">Start free assessment</Link>
      </section>

      <footer className="landing-footer">
        <div className="brand-wrap">
          <span className="brand-mark">LA</span>
          <span className="brand-name">Leadership Academy</span>
        </div>
        <div className="footer-links">
          <Link href="/courses">Courses</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/assessments">Assessments</Link>
        </div>
      </footer>
    </main>
  );
}

