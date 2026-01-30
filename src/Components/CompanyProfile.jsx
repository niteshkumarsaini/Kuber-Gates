import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShieldAlt,
  FaBolt,
  FaBuilding,
  FaCheckCircle,
  FaChartLine,
  FaCode,
  FaUserShield,
  FaSyncAlt
} from "react-icons/fa";
import "../Styles/CompanyProfile.css";

export default function CompanyProfile() {
  return (
    <section className="cp-section">
      <div className="cp-container">

        {/* INTRO */}
        <motion.div
          className="cp-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="cp-badge">ABOUT US</span>
          <h2>Powering modern payments for the global economy</h2>
          <p>
            A unified payment infrastructure built for businesses that want to
            scale globally — faster, safer, and without complexity.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="cp-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="cp-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Who we are</h3>

            <p>
              We are a next‑generation payment infrastructure provider enabling
              businesses to accept cards, bank transfers, payment links, and
              cryptocurrencies through a single, unified platform.
            </p>

            <p>
              Inspired by global leaders like <strong>Coinbase Commerce</strong>,
              <strong> CoinGate</strong>, and <strong>NOWPayments</strong>, our
              platform is designed for high performance, regulatory compliance,
              and seamless global expansion.
            </p>

            <div className="cp-points">
              <div className="cp-point">
                <FaCheckCircle />
                <span>Unified fiat & crypto payment acceptance</span>
              </div>
              <div className="cp-point">
                <FaCheckCircle />
                <span>Enterprise‑grade security & compliance readiness</span>
              </div>
              <div className="cp-point">
                <FaCheckCircle />
                <span>Developer‑friendly APIs & SDKs</span>
              </div>
              <div className="cp-point">
                <FaCheckCircle />
                <span>Fast onboarding with minimal documentation</span>
              </div>
              <div className="cp-point">
                <FaCheckCircle />
                <span>Real‑time dashboards, analytics & reporting</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="cp-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="cp-card-item">
              <FaGlobe />
              <div>
                <h4>Global Reach</h4>
                <p>Accept payments from customers across borders and currencies.</p>
              </div>
            </div>

            <div className="cp-card-item">
              <FaShieldAlt />
              <div>
                <h4>Security & Compliance</h4>
                <p>PCI‑DSS aligned infrastructure with advanced encryption.</p>
              </div>
            </div>

            <div className="cp-card-item">
              <FaBolt />
              <div>
                <h4>Instant Settlements</h4>
                <p>Faster settlements with real‑time transaction tracking.</p>
              </div>
            </div>

            <div className="cp-card-item">
              <FaCode />
              <div>
                <h4>API‑First Platform</h4>
                <p>Built for developers with clean, scalable APIs.</p>
              </div>
            </div>

            <div className="cp-card-item">
              <FaUserShield />
              <div>
                <h4>Risk & Fraud Controls</h4>
                <p>Advanced monitoring, limits, and compliance tools.</p>
              </div>
            </div>

            <div className="cp-card-item">
              <FaSyncAlt />
              <div>
                <h4>Reliable Infrastructure</h4>
                <p>Designed for high‑volume, mission‑critical payments.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* STATS */}
        <motion.div
          className="cp-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cp-stat">
            <FaBuilding />
            <h4>10k+</h4>
            <span>Merchants onboarded</span>
          </div>

          <div className="cp-stat">
            <FaGlobe />
            <h4>150+</h4>
            <span>Countries supported</span>
          </div>

          <div className="cp-stat">
            <FaChartLine />
            <h4>99.9%</h4>
            <span>Platform uptime</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
