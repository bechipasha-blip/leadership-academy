import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="page-shell narrow-shell">
      <div className="section-header">
        <div>
          <span className="eyebrow">Checkout</span>
          <h1>Complete your enrollment</h1>
        </div>
      </div>

      <div className="checkout-shell">
        <section className="checkout-card">
          <h2>Order summary</h2>

          <div className="summary-item">
            <span>Growth plan</span>
            <strong>$79/month</strong>
          </div>

          <div className="summary-item">
            <span>Leadership track</span>
            <strong>Included</strong>
          </div>

          <div className="summary-item total-row">
            <span>Total</span>
            <strong>$79</strong>
          </div>

          <Link href="/dashboard" className="primary-button full-width">Complete purchase</Link>
        </section>

        <section className="checkout-card">
          <h2>Payment details</h2>

          <div className="form-grid">
            <div className="field-group">
              <label>Cardholder name</label>
              <input defaultValue="Jordan Kim" />
            </div>
            <div className="field-group">
              <label>Card number</label>
              <input defaultValue="4242 4242 4242 4242" />
            </div>
            <div className="field-group">
              <label>Expiry</label>
              <input defaultValue="08/29" />
            </div>
            <div className="field-group">
              <label>CVC</label>
              <input defaultValue="123" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
