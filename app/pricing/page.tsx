import Link from "next/link";

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
            <Link href="/checkout" className={plan.featured ? "primary-button full-width" : "secondary-button full-width"}>
              {plan.name === "Enterprise" ? "Talk to sales" : "Get started"}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
