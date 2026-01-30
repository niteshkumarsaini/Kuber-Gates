import { motion } from "framer-motion";
import {
  FaCode,
  FaBookOpen,
  FaPlug,
  FaShieldAlt,
  FaClock,
  FaTerminal
} from "react-icons/fa";
import "../Styles/APIComponent.css";

export default function APIComponent() {
  return (
    <section className="api-section">
      <div className="api-container">

        {/* HEADER */}
        <motion.div
          className="api-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="api-badge">API DOCUMENTATION</span>
          <h2>Build powerful payment experiences with our APIs</h2>
          <p>
            Our developer‑first APIs enable seamless integration of payments,
            invoices, crypto, and payouts. Full documentation is on the way.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="api-grid">

          {/* LEFT */}
          <motion.div
            className="api-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>What you’ll be able to build</h3>

            <div className="api-points">
              <div className="api-point">
                <FaPlug />
                <div>
                  <h4>Payment APIs</h4>
                  <p>Accept cards, bank transfers, payment links, and crypto.</p>
                </div>
              </div>

              <div className="api-point">
                <FaBookOpen />
                <div>
                  <h4>Invoices & Billing</h4>
                  <p>Create, send, and track invoices programmatically.</p>
                </div>
              </div>

              <div className="api-point">
                <FaShieldAlt />
                <div>
                  <h4>Secure Webhooks</h4>
                  <p>Real‑time event updates with signature verification.</p>
                </div>
              </div>

              <div className="api-point">
                <FaCode />
                <div>
                  <h4>Developer‑friendly SDKs</h4>
                  <p>Clean APIs with predictable, typed responses.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="api-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Decorative blobs */}
            <span className="api-glow api-glow-1" />
            <span className="api-glow api-glow-2" />

            <div className="api-card-top">
              <div className="api-card-icon">
                <FaTerminal />
              </div>
              <span className="api-status">COMING SOON</span>
            </div>

            <h4>Developer documentation</h4>
            <p>
              We’re preparing detailed API references, examples, and guides
              to help you integrate in minutes.
            </p>

            {/* CODE PREVIEW */}
            <div className="api-code">
              <code>
                POST /v1/payments<br />
                Authorization: Bearer <span>API_KEY</span><br />
                {"{"}<br />
                &nbsp;&nbsp;"amount": 1000,<br />
                &nbsp;&nbsp;"currency": "USD"<br />
                {"}"}
              </code>
            </div>

            <ul className="api-card-list">
              <li>✔ REST API reference</li>
              <li>✔ API keys & auth</li>
              <li>✔ Webhooks & events</li>
              <li>✔ SDK examples</li>
            </ul>

            <button className="api-btn" disabled>
              Docs launching shortly
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
