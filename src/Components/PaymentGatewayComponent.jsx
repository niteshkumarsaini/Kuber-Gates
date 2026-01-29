import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaMobileAlt,
  FaUniversity,
  FaGlobe,
  FaLock
} from "react-icons/fa";
import "../Styles/PaymentGatewayComponent.css";

const gateways = [
  {
    icon: <FaCreditCard />,
    title: "Card Payments",
    desc: "Accept all major debit & credit cards with fast and secure processing."
  },
  {
    icon: <FaMobileAlt />,
    title: "UPI & Wallets",
    desc: "Support UPI, Google Pay, PhonePe, Paytm and popular wallets."
  },
  {
    icon: <FaUniversity />,
    title: "Net Banking",
    desc: "Seamless bank transfers across leading Indian banks."
  },
  {
    icon: <FaGlobe />,
    title: "International Payments",
    desc: "Accept global payments with multi-currency support."
  },
  {
    icon: <FaLock />,
    title: "Secure Transactions",
    desc: "Enterprise-grade security with PCI-DSS & encryption standards."
  }
];

export default function PaymentGatewayComponent() {
  return (
    <section className="payment-section">
      <div className="payment-container">

        {/* HEADER */}
        <motion.div
          className="payment-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Powerful Payment Gateway</h2>
          <p>
            One unified platform to accept, process, and manage payments
            securely at scale.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="payment-grid">
          {gateways.map((item, index) => (
            <motion.div
              key={index}
              className="payment-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="payment-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
