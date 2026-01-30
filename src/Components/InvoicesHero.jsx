import { motion } from "framer-motion";
import "../Styles/InvoicesComponent.css";

export default function InvoicesHero() {
  return (
    <section className="inv-hero">
      <div className="inv-container">
        <motion.div
          className="inv-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inv-badge">INVOICES</span>
          <h1>Create & manage invoices effortlessly</h1>
          <p>
            Generate professional invoices, send them globally, and get paid
            faster using cards, UPI, wallets, or crypto — all from one dashboard.
          </p>

          <div className="inv-actions">
            <button className="inv-primary">Create Invoice</button>
            <button className="inv-secondary">View Docs</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
