import { motion } from "framer-motion";
import {
  FaJs,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaCode,
  FaCubes,
  FaRocket
} from "react-icons/fa";
import "../Styles/SDKsComponent.css";

export default function SDKsComponent() {
  return (
    <section className="sdk-section">
      <div className="sdk-container">

        {/* HEADER */}
        <motion.div
          className="sdk-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="sdk-badge">SDKs</span>
          <h2>Integrate faster with official SDKs</h2>
          <p>
            Use our official SDKs to integrate payments, invoices, crypto,
            and webhooks with minimal code and maximum reliability.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="sdk-grid">

          {/* LEFT */}
          <motion.div
            className="sdk-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Why use our SDKs?</h3>

            <div className="sdk-points">
              <div className="sdk-point">
                <FaRocket />
                <div>
                  <h4>Quick setup</h4>
                  <p>Start accepting payments in minutes with minimal configuration.</p>
                </div>
              </div>

              <div className="sdk-point">
                <FaCubes />
                <div>
                  <h4>Unified APIs</h4>
                  <p>Single SDK for payments, invoices, payment links, and crypto.</p>
                </div>
              </div>

              <div className="sdk-point">
                <FaCode />
                <div>
                  <h4>Clean abstractions</h4>
                  <p>Well‑structured methods with predictable responses.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="sdk-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Decorative glow */}
            <span className="sdk-glow" />

            <div className="sdk-card-top">
              <h4>Available SDKs</h4>
              <span className="sdk-status">MORE COMING</span>
            </div>

            <div className="sdk-languages">
              <div className="sdk-lang">
                <FaJs />
                <span>JavaScript</span>
              </div>
              <div className="sdk-lang">
                <FaNodeJs />
                <span>Node.js</span>
              </div>
              <div className="sdk-lang">
                <FaPython />
                <span>Python</span>
              </div>
              <div className="sdk-lang">
                <FaPhp />
                <span>PHP</span>
              </div>
            </div>

            {/* CODE */}
            <div className="sdk-code">
              <code>
                npm install @kubergates/sdk<br /><br />
                {`const client = new KuberGates({ apiKey: "API_KEY" });`}<br />
                {`await client.payments.create({ amount: 1000, currency: "USD" });`}
              </code>
            </div>

            <p className="sdk-note">
              Official SDK documentation and examples will be released shortly.
            </p>

            <button className="sdk-btn" disabled>
              SDK Docs coming soon
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
