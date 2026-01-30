import { motion } from "framer-motion";
import {
  FaLink,
  FaPaperPlane,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaGlobe,
  FaBolt
} from "react-icons/fa";
import "../Styles/PaymentLinkSupport.css";

export default function PaymentLinkSupport() {
  return (
    <section className="pls-section">
      <div className="pls-container">

        {/* HEADER */}
        <motion.div
          className="pls-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="pls-badge">PAYMENT LINKS</span>
          <h2>Get paid instantly with shareable links</h2>
          <p>
            Create a payment link in seconds and start accepting payments
            globally — no website or custom checkout required.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="pls-grid">

          {/* LEFT – STEPS */}
          <motion.div
            className="pls-steps"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="pls-step">
              <FaLink />
              <div>
                <h4>Create a payment link</h4>
                <p>Generate a unique payment link from your dashboard.</p>
              </div>
            </div>

            <div className="pls-step">
              <FaPaperPlane />
              <div>
                <h4>Share with customers</h4>
                <p>Send via WhatsApp, email, SMS, or social media.</p>
              </div>
            </div>

            <div className="pls-step">
              <FaMoneyCheckAlt />
              <div>
                <h4>Get paid instantly</h4>
                <p>Customers pay using cards, UPI, wallets, or crypto.</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – BENEFITS CARD */}
          <motion.div
            className="pls-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="pls-card-item">
              <FaShieldAlt />
              <div>
                <h5>Secure by design</h5>
                <p>Enterprise-grade security and PCI-DSS compliance.</p>
              </div>
            </div>

            <div className="pls-card-item">
              <FaGlobe />
              <div>
                <h5>Global payments</h5>
                <p>Accept payments from customers worldwide.</p>
              </div>
            </div>

            <div className="pls-card-item">
              <FaBolt />
              <div>
                <h5>Fast settlements</h5>
                <p>Lightning-fast settlement and real-time tracking.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
