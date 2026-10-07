import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For individuals building leadership fundamentals.",
    features: ["Access to 3 core tracks", "Progress tracking", "Skill assessments", "Email support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "For managers and team leads scaling coaching capability.",
    features: ["Everything in Starter", "All leadership tracks", "Mentor sessions", "Advanced analytics", "Certification badges"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations rolling out leadership development to teams.",
    features: ["Custom rollout plan", "Team dashboards", "API access", "Dedicated support", "Executive reporting"],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header pricing-header">
        <div>
          <span className="eyebrow">Pricing</span>
          <h1>Choose a plan for your leadership growth</h1>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`price-card ${plan.featured ? "featured" : ""}`}>
            <div className="price-topline">
              <h2>{plan.name}</h2>
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
            <Link href="/checkout" className={plan.featured ? "primary-button full-width" : "secondary-button full-width"}>
              {plan.name === "Enterprise" ? "Talk to sales" : "Get started"}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
