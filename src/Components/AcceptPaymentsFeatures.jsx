import React from "react";
import { Globe, ShieldCheck, RefreshCcw } from "lucide-react";
import "../Styles/AcceptPaymentsFeatures.css";

export default function AcceptPaymentsFeatures() {
  return (
    <section className="ac-features-section">
      <div className="ac-features-container">

        <h2 className="ac-features-title">
          Grow revenue with frictionless crypto payments
        </h2>

        <p className="ac-features-subtitle">
          Reach a global audience and accept crypto payments through a secure,
          intuitive checkout experience built to reduce friction and increase
          successful transactions.
        </p>

        <div className="ac-features-grid">
          <div className="ac-feature-card">
            <Globe size={28} />
            <h3>Reach global customers</h3>
            <p>
              Accept payments from customers worldwide without relying on
              traditional banking infrastructure or regional payment methods.
            </p>
          </div>

          <div className="ac-feature-card">
            <ShieldCheck size={28} />
            <h3>Eliminate chargeback risk</h3>
            <p>
              Crypto payments are push-based, meaning transactions are final
              and protect your business from costly disputes and fraud.
            </p>
          </div>

          <div className="ac-feature-card">
            <RefreshCcw size={28} />
            <h3>Flexible settlement options</h3>
            <p>
              Settle funds the way you prefer — convert to fiat, receive
              stablecoins, or hold crypto directly in your wallet.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
