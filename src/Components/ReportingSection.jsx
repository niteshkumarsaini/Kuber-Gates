import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Download,
  RefreshCcw
} from "lucide-react";
import "../Styles/ReportingSection.css";

const features = [
  {
    icon: <BarChart3 />,
    title: "Real-time transaction tracking",
    desc: "See every payment update instantly. Filter by currency, status, wallet type, and more."
  },
  {
    icon: <FileText />,
    title: "Complete order and settlement history",
    desc: "View full life cycle data for every transaction — from checkout to payout — all in one place."
  },
  {
    icon: <Download />,
    title: "Pre-formatted reports and data exporting",
    desc: "Generate ready-to-use CSV or PDF reports for accounting or audits in seconds."
  },
  {
    icon: <RefreshCcw />,
    title: "Transparent currency conversion records",
    desc: "Track every rate used for settlements and conversions for full audit confidence."
  }
];

export default function ReportingSection() {
  return (
    <section className="reporting-section">
      <div className="reporting-container">

        {/* Heading */}
        <motion.div
          className="reporting-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Clear reporting and no-sweat reconciliation</h2>
          <p>
            Every crypto payment is tracked, logged, and exportable.
            No spreadsheets, no confusion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="reporting-grid">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="reporting-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="reporting-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
