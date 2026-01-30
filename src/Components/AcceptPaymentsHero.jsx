import React from "react";
import { ArrowRight, Shield } from "lucide-react";
import "../Styles/AcceptPaymentsHero.css";
import kuberLogo from "../assets/logo.png";

export default function AcceptPaymentsHero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">
          <p className="hero-eyebrow">Crypto Payments Infrastructure</p>

          <h1 className="hero-title">
            Crypto payments,
            <span>built for scale</span>
          </h1>

          <p className="hero-description">
            Accept global crypto payments with a secure, enterprise-grade
            checkout — optimized for speed, compliance, and conversion.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Create business account <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">View live demo</button>
          </div>

          <div className="hero-meta">
            <Shield size={14} />
            <span>PCI-ready • Secure by design • Enterprise grade</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-product">
          <div className="checkout-shell">
            <div className="checkout-top">
              <img src={kuberLogo} alt="KuberGates" className="ac-logo" />
              <span>Secure Checkout</span>
            </div>

            <div className="checkout-amount">
              <span>Amount</span>
              <strong>₹8,500.00</strong>
            </div>

            <div className="checkout-row">
              <span>Network</span>
              <span className="pill">Bitcoin</span>
            </div>

            <div className="checkout-address">
              <span>Wallet address</span>
              <code>bc1q…9xk2</code>
            </div>

            <button className="checkout-pay">
              Confirm payment
            </button>

            <p className="checkout-expiry">
              Session expires in 14:58
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
