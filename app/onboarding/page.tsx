"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For individuals building leadership fundamentals.",
    features: ["3 core leadership tracks", "Progress tracking", "Skill assessments", "Email support"],
    planId: "starter",
  },
  {
    name: "Growth",
    price: "$79",
    description: "For managers who want coaching, analytics, and certifications.",
    features: ["Everything in Starter", "Full course library", "Certification paths", "Advanced analytics"],
    planId: "growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations scaling leadership development across teams.",
    features: ["Team onboarding", "Admin dashboards", "Progress reporting", "Dedicated support"],
    planId: "enterprise",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setUser(data.user ?? null);
        } else {
          router.push("/login");
        }
      })
      .catch(() => router.push("/login"));
  }, [router]);

  async function handleSelectPlan(planId: string) {
    if (planId === "enterprise") {
      router.push("/contact-sales");
      return;
    }

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });

    if (response.ok) {
      router.push(`/checkout?plan=${planId}`);
    }
  }

  return (
    <main className="page-shell narrow-shell">
      <div className="onboarding-hero">
        <span className="eyebrow">Welcome to Leadership Academy</span>
        <h1>Choose your learning plan, {user?.name ?? "leader"}.</h1>
        <p>Select the plan that matches your leadership goals.</p>
      </div>

      <div className="pricing-grid onboarding-pricing">
        {plans.map((plan) => (
          <div
            key={plan.planId}
            className={`price-card ${plan.featured ? "featured" : ""} ${selectedPlan === plan.planId ? "selected" : ""}`}
          >
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
            <button
              onClick={() => handleSelectPlan(plan.planId)}
              className={plan.featured ? "primary-button full-width" : "secondary-button full-width"}
            >
              {plan.planId === "enterprise" ? "Talk to sales" : `Select ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      <div className="onboarding-footer">
        <p>You can change your plan anytime from your account settings.</p>
        <Link href="/dashboard" className="secondary-button">
          Skip for now
        </Link>
      </div>
    </main>
  );
}
