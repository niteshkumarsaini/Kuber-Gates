import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaCoins,
  FaRocket,
  FaGlobe,
  FaCode,
} from "react-icons/fa";
import "../Styles/WhiteLabel.css";
import { useNavigate } from "react-router-dom";

export default function WhiteLabel() {
  const navigate=useNavigate();
  return (
    <div className="wl-container">

      {/* ================= HERO ================= */}
      <section className="wl-hero">
        <div className="wl-hero-inner">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            White-Label Crypto Payment Gateway
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Launch your branded crypto payment solution on KuberGates’
            secure, compliant, and globally scalable infrastructure.
          </motion.p>

          <div className="wl-cta">
            <button className="btn-primary" onClick={()=>{navigate("/get-started")}}>Get Started</button>
            <button className="btn-outline" onClick={()=>{navigate("/contact-us")}}>Contact Sales</button>
          </div>

          <div className="wl-stats">
            {[
              ["350+", "Supported Currencies"],
              ["0.5%", "Processing Fee"],
              ["5 min", "Avg Settlement"],
              ["Unlimited", "Transaction Volume"],
            ].map(([v, t]) => (
              <div key={t} className="stat-box">
                <strong>{v}</strong>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="wl-features">
        <div className="wl-section-inner">
          <h2>Built for Scale, Speed & Control</h2>

          <div className="feature-grid">
            {[
              [
                "Cost-Effective",
                "Deploy enterprise crypto infrastructure without long development cycles or capital expenditure.",
              ],
              [
                "Full Customization",
                "White-label UI, domains, checkout flows, compliance logic, and API configuration.",
              ],
              [
                "Fast Integration",
                "SDKs, REST APIs and sandbox environments across major technology stacks.",
              ],
            ].map(([title, text]) => (
              <motion.div
                key={title}
                className="feature-card"
                whileHover={{ y: -4 }}
              >
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="wl-why">
        <div className="wl-section-inner">
          <h2>Why Choose KuberGates</h2>

          <ul className="why-grid">
            {[
              ["High-speed processing", FaBolt],
              ["Enterprise-grade security", FaShieldAlt],
              ["Low fees, higher margins", FaCoins],
              ["Simplified merchant onboarding", FaRocket],
              ["Borderless settlement", FaGlobe],
              ["Developer-first tooling", FaCode],
            ].map(([text, Icon]) => (
              <li key={text}>
                <Icon />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="wl-final">
        <div className="wl-section-inner">
          <h2>Launch Your White-Label Gateway Today</h2>

          <div className="wl-cta">
            <button className="btn-primary" onClick={()=>{navigate("/contact-us")}}>Start Free</button>
            <button className="btn-outline" onClick={()=>{navigate("/contact-us")}}>Book a Demo</button>
          </div>
        </div>
      </section>

    </div>
  );
}
