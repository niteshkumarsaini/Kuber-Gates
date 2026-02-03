import { useNavigate } from "react-router-dom";
import "../Styles/Pricing.css";

export default function Pricing() {
  const navigate=useNavigate();
  
  return (
    <section className="pricing-container">

      {/* HERO */}
      <div className="pricing-header">
        <h1>Enterprise-Ready Crypto Payments</h1>
        <p>
          Transparent pricing designed for startups, scale-ups, and global
          enterprises. No hidden fees. No long-term contracts.
        </p>
      </div>

      {/* PLANS */}
      <div className="plans-wrapper">

        {/* STANDARD */}
        <div className="plan-card popular">
          <span className="badge">Most Popular</span>
          <h3 className="plan-title">Growth</h3>
          <p className="plan-price">1%</p>
          <p className="plan-desc">
            Per successful transaction — built for fast-growing digital
            businesses.
          </p>

          <ul className="plan-features">
            <li>✓ Global crypto & fiat settlement</li>
            <li>✓ Weekly automated payouts</li>
            <li>✓ API access & webhooks</li>
            <li>✓ Fraud monitoring tools</li>
            <li>✓ Email & chat support</li>
          </ul>

          <button className="btn-plan" onClick={()=>{navigate("/get-started")}}>Start Accepting Payments</button>
        </div>

        {/* ENTERPRISE */}
        <div className="plan-card">
          <h3 className="plan-title">Enterprise</h3>
          <p className="plan-price">Custom</p>
          <p className="plan-desc">
            Tailored pricing and infrastructure for large-scale platforms.
          </p>

          <ul className="plan-features">
            <li>✓ Dedicated technical account manager</li>
            <li>✓ Custom SLAs & uptime guarantees</li>
            <li>✓ White-label checkout experience</li>
            <li>✓ Priority compliance onboarding</li>
            <li>✓ 24/7 premium support</li>
          </ul>

          <button className="btn-plan secondary" onClick={()=>{navigate("/contact-us")}}>
            Talk to Sales
          </button>
        </div>

      </div>

      {/* COMPARISON */}
      <div className="comparison-section">
        <h2>Compare Plans</h2>

        <div className="table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Growth</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>API Access</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Automated Settlements</td>
                <td>Weekly</td>
                <td>Custom</td>
              </tr>
              <tr>
                <td>Fraud Detection</td>
                <td>Standard</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>Dedicated Manager</td>
                <td>—</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Custom Checkout</td>
                <td>—</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
