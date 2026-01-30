import {
  FaFileInvoice,
  FaGlobe,
  FaClock,
  FaLock
} from "react-icons/fa";
import "../Styles/InvoicesComponent.css";

export default function InvoiceFeatures() {
  return (
    <section className="inv-features">
      <div className="inv-container inv-feature-grid">

        <div className="inv-feature">
          <FaFileInvoice />
          <h4>Professional Invoices</h4>
          <p>Custom-branded invoices with tax, discounts & notes.</p>
        </div>

        <div className="inv-feature">
          <FaGlobe />
          <h4>Global Payments</h4>
          <p>Accept payments worldwide in multiple currencies.</p>
        </div>

        <div className="inv-feature">
          <FaClock />
          <h4>Auto Reminders</h4>
          <p>Automatic reminders for unpaid or overdue invoices.</p>
        </div>

        <div className="inv-feature">
          <FaLock />
          <h4>Secure by Default</h4>
          <p>PCI‑DSS compliant & enterprise‑grade security.</p>
        </div>

      </div>
    </section>
  );
}
