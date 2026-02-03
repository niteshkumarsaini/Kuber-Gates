import { useNavigate } from "react-router-dom";
import "../Styles/PaymentFlow.css";
import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    title: "Invoice Generation",
    desc: "Create real-time crypto invoices with locked pricing and multi-chain support."
  },
  {
    step: "Step 2",
    title: "Customer Payment",
    desc: "Customers pay securely using supported cryptocurrencies worldwide."
  },
  {
    step: "Step 3",
    title: "Instant Conversion",
    desc: "We automatically convert funds into fiat or preferred crypto assets."
  },
  {
    step: "Step 4",
    title: "Fast Settlement",
    desc: "Receive funds directly in your bank account or crypto wallet."
  }
];

export default function PaymentFlow() {
  const navigate=useNavigate();
  return (
    <section className="flow-section">
      <div className="flow-glow" />

      <div className="flow-wrapper">
        {/* HEADER */}
        <motion.div
          className="flow-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="flow-badge">Payment Flow</span>
          <h2>How KuberGates powers crypto payments</h2>
          <p>
            A seamless crypto payment infrastructure designed to optimize
            settlements, reduce volatility, and scale your business globally.
          </p>

          <button className="flow-cta" onClick={()=>{navigate("/developers/api-docs")}}>
            Explore integrations →
          </button>
        </motion.div>

        {/* CARDS */}
        <div className="flow-cards">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="flow-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
            >
              <div className="flow-card-top">
                <span className="flow-step">{item.step}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
