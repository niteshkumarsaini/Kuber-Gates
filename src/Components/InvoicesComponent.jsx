import { motion } from "framer-motion";
import {
  FaFileInvoice,
  FaPaperPlane,
  FaCreditCard,
  FaShieldAlt,
  FaClock,
  FaGlobe
} from "react-icons/fa";
import "../Styles/InvoicesComponent.css";

export default function InvoicesComponent() {
  return (
    <section className="inv-section">
      <div className="inv-container">

        {/* HEADER */}
        <motion.div
          className="inv-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inv-badge">INVOICES</span>
          <h2>Send professional invoices & get paid faster</h2>
          <p>
            Create, send, and manage invoices effortlessly. Accept payments
            globally via cards, UPI, bank transfers, and crypto.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="inv-grid">

          {/* LEFT – STEPS */}
          <motion.div
            className="inv-steps"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inv-step">
              <FaFileInvoice />
              <div>
                <h4>Create an invoice</h4>
                <p>
                  Generate branded invoices with line items, taxes, and due
                  dates.
                </p>
              </div>
            </div>

            <div className="inv-step">
              <FaPaperPlane />
              <div>
                <h4>Send to customers</h4>
                <p>
                  Share invoices via email, WhatsApp, or a secure payment link.
                </p>
              </div>
            </div>

            <div className="inv-step">
              <FaCreditCard />
              <div>
                <h4>Accept payments</h4>
                <p>
                  Customers pay using cards, UPI, bank transfer, or crypto.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – INVOICE CARD */}
          <motion.div
            className="inv-card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inv-card-item">
              <FaShieldAlt />
              <div>
                <h5>Secure & compliant</h5>
                <p>Enterprise‑grade security with PCI‑DSS compliance.</p>
              </div>
            </div>

            <div className="inv-card-item">
              <FaClock />
              <div>
                <h5>Faster settlements</h5>
                <p>Get paid quickly with real‑time payment tracking.</p>
              </div>
            </div>

            <div className="inv-card-item">
              <FaGlobe />
              <div>
                <h5>Global invoicing</h5>
                <p>Send invoices and accept payments worldwide.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
