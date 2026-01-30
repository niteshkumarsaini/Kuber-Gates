import { motion } from "framer-motion";
import {
  FaLink,
  FaWallet,
  FaGlobe,
  FaBolt,
  FaShieldAlt
} from "react-icons/fa";
import "../Styles/PaymentLinksComponent.css";

export default function PaymentLinks() {
  return (
    <section className="pl-section">
      <div className="pl-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="pl-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="pl-badge">PAYMENT LINKS</span>

          <h1>
            Create payment links <br />
            <span>in seconds</span>
          </h1>

          <p>
            Generate secure, shareable payment links to accept crypto and fiat
            payments globally — no website or custom checkout required.
          </p>

          <ul className="pl-points">
            <li><FaShieldAlt /> Enterprise‑grade security</li>
            <li><FaGlobe /> Global & multi‑currency support</li>
            <li><FaBolt /> Instant settlement</li>
          </ul>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="pl-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pl-card">

            <div className="pl-item">
              <div className="pl-icon blue">
                <FaLink />
              </div>
              <div>
                <h4>Create Payment Link</h4>
                <p>Generate a shareable checkout link instantly</p>
              </div>
            </div>

            <div className="pl-item">
              <div className="pl-icon purple">
                <FaWallet />
              </div>
              <div>
                <h4>Accept Crypto & Fiat</h4>
                <p>Support cards, UPI, wallets & crypto</p>
              </div>
            </div>

            <div className="pl-item">
              <div className="pl-icon pink">
                <FaGlobe />
              </div>
              <div>
                <h4>Global Customers</h4>
                <p>Accept payments from anywhere</p>
              </div>
            </div>

            <div className="pl-item">
              <div className="pl-icon gold">
                <FaBolt />
              </div>
              <div>
                <h4>Instant Settlement</h4>
                <p>Fast & reliable payouts</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

