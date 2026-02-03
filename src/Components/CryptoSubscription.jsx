import { useState } from "react";
import "../Styles/CryptoSubscription.css";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    priceMonthly: 25,
    priceYearly: 250,
    features: [
      "40 swaps / month",
      "Basic portfolio analytics",
      "Standard execution speed",
      "Email support",
    ],
  },
  {
    name: "Pro",
    priceMonthly: 59,
    priceYearly: 590,
    popular: true,
    features: [
      "Unlimited swaps",
      "Advanced market charts",
      "Priority execution",
      "24/7 support",
      "Trading API access",
    ],
  },
  {
    name: "Institutional",
    priceMonthly: 149,
    priceYearly: 1490,
    features: [
      "Dedicated account manager",
      "Deep liquidity pools",
      "White-label interface",
      "Compliance tools",
      "Custom integrations",
    ],
  },
];

export default function CryptoSubscription() {
  const [billing, setBilling] = useState("monthly");
  const navigate=useNavigate();

  return (
    <section className="premium-subscription">
      <div className="premium-header">
        <h2>Premium Crypto-to-Crypto Plans</h2>
        <p>
          Elegant pricing for professional traders and institutions seeking
          seamless digital-asset exchange.
        </p>

        <div className="billing-toggle">
          <span className={billing === "monthly" ? "active" : ""}>
            Monthly
          </span>

          <label className="switch">
            <input
              type="checkbox"
              checked={billing === "yearly"}
              onChange={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
            />
            <span className="slider" />
          </label>

          <span className={billing === "yearly" ? "active" : ""}>Yearly</span>
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <div className="badge">Most Popular</div>}

            <h3>{plan.name}</h3>

            <div className="price">
              $
              {billing === "monthly"
                ? plan.priceMonthly
                : plan.priceYearly}
              <span>/{billing}</span>
            </div>

            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button className="cta-btn" onClick={()=>{navigate("/contact-us")}}>Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
}
