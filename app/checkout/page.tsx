"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const plans: Record<string, { name: string; price: number; description: string }> = {
  starter: { name: "Starter", price: 29, description: "For individuals building leadership fundamentals." },
  growth: { name: "Growth", price: 79, description: "For managers who want coaching, analytics, and certifications." },
};

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") ?? "starter";
  const plan = plans[planId];
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsProcessing(true);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });

    setIsProcessing(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.message ?? "Unable to process subscription.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  if (!plan) {
    return (
      <main className="page-shell narrow-shell">
        <p>Plan not found.</p>
        <Link href="/onboarding">Back to plans</Link>
      </main>
    );
  }

  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Checkout</span>
          <h1>Complete your purchase</h1>
        </div>
      </div>

      <div className="checkout-shell">
        <section className="checkout-card">
          <h2>Order summary</h2>

          <div className="summary-item">
            <span>{plan.name} plan</span>
            <strong>${plan.price}/month</strong>
          </div>

          <div className="summary-item">
            <span>Full course library</span>
            <strong>Included</strong>
          </div>

          <div className="summary-item total-row">
            <span>First charge</span>
            <strong>${plan.price}</strong>
          </div>

          <p className="summary-note">Your subscription will renew monthly. You can cancel anytime from your account settings.</p>
        </section>

        <section className="checkout-card">
          <h2>Payment details</h2>

          <form onSubmit={handleCheckout} className="payment-form">
            <div className="form-grid">
              <div className="field-group">
                <label>Cardholder name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="field-group" style={{ gridColumn: "span 2" }}>
                <label>Card number</label>
                <input type="text" placeholder="4242 4242 4242 4242" required />
              </div>
              <div className="field-group">
                <label>Expiry date</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className="field-group">
                <label>CVC</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>

            {error ? <p className="error-message">{error}</p> : null}

            <button type="submit" className="primary-button full-width" disabled={isProcessing}>
              {isProcessing ? "Processing..." : `Pay $${plan.price} to get started`}
            </button>
          </form>

          <p className="checkout-note">This is a demo. Use card 4242 4242 4242 4242 for testing.</p>
        </section>
      </div>
    </main>
  );
}
