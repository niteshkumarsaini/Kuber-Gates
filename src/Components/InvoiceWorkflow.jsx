import { motion } from "framer-motion";
import {
  FaPlusCircle,
  FaPaperPlane,
  FaMoneyBillWave
} from "react-icons/fa";
import "../Styles/InvoicesComponent.css";

export default function InvoiceWorkflow() {
  return (
    <section className="inv-workflow">
      <div className="inv-container inv-workflow-grid">

        {/* LEFT */}
        <motion.div
          className="inv-steps"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>How invoices work</h2>

          <div className="inv-step">
            <FaPlusCircle />
            <div>
              <h4>Create invoice</h4>
              <p>Add items, taxes, due dates and customer details.</p>
            </div>
          </div>

          <div className="inv-step">
            <FaPaperPlane />
            <div>
              <h4>Send instantly</h4>
              <p>Email or share invoice link with customers.</p>
            </div>
          </div>

          <div className="inv-step">
            <FaMoneyBillWave />
            <div>
              <h4>Get paid</h4>
              <p>Receive payments instantly with real‑time status.</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="inv-preview"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5>Invoice Preview</h5>

          <div className="inv-preview-row">
            <span>Invoice #</span>
            <strong>INV‑2048</strong>
          </div>

          <div className="inv-preview-row">
            <span>Amount</span>
            <strong>$1,250.00</strong>
          </div>

          <div className="inv-preview-row">
            <span>Status</span>
            <span className="inv-status">Pending</span>
          </div>

          <button className="inv-preview-btn" onClick={()=>{alert("We are working on it. It will be functional soon.")}}>Pay Invoice</button>
        </motion.div>

      </div>
    </section>
  );
}
