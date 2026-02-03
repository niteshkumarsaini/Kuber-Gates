import { motion } from "framer-motion";
import {
  FaUndoAlt,
  FaPercentage,
  FaClock,
  FaGlobe,
  FaShieldAlt,
  FaFileInvoiceDollar
} from "react-icons/fa";
import "../Styles/RefundsComponent.css";
import { useNavigate } from "react-router-dom";

export default function RefundsComponent() {
  const navigate=useNavigate();
  return (
    <section className="refund-section">
      <div className="refund-container">

        {/* HEADER */}
        <motion.div
          className="refund-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="refund-badge">REFUNDS</span>
          <h2>Refunds & Partial Refunds made simple</h2>
          <p>
            Handle full and partial refunds across fiat and crypto payments
            with complete transparency and control.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="refund-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="refund-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Why businesses trust our refund system</h3>

            <div className="refund-points">
              <div className="refund-point">
                <FaUndoAlt />
                <div>
                  <h4>Full & Partial Refunds</h4>
                  <p>
                    Refund the entire amount or a specific portion of any
                    transaction.
                  </p>
                </div>
              </div>

              <div className="refund-point">
                <FaPercentage />
                <div>
                  <h4>Pro‑rated & Line‑item refunds</h4>
                  <p>
                    Issue refunds based on product value, subscriptions, or usage.
                  </p>
                </div>
              </div>

              <div className="refund-point">
                <FaClock />
                <div>
                  <h4>Fast Processing</h4>
                  <p>
                    Automated refund execution with real‑time status updates.
                  </p>
                </div>
              </div>

              <div className="refund-point">
                <FaGlobe />
                <div>
                  <h4>Multi‑Currency Support</h4>
                  <p>
                    Refund in the original payment currency or settle in your
                    preferred currency.
                  </p>
                </div>
              </div>

              <div className="refund-point">
                <FaShieldAlt />
                <div>
                  <h4>Secure & Compliant</h4>
                  <p>
                    Built with audit trails, role‑based access, and compliance
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="refund-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="refund-card-icon">
              <FaFileInvoiceDollar />
            </div>

            <h4>End‑to‑end refund control</h4>
            <p>
              Issue refunds directly from your dashboard or via API with
              detailed reporting and customer transparency.
            </p>

            <ul className="refund-card-list">
              <li>✔ Full & partial refunds</li>
              <li>✔ Fiat & crypto transactions</li>
              <li>✔ Real‑time refund tracking</li>
              <li>✔ Refund webhooks & reports</li>
            </ul>

            <button className="refund-btn" onClick={()=>{navigate("/contact-us")}}>
              Learn more
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
