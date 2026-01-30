import React from "react";
import { FaShieldAlt, FaLock, FaFileAlt } from "react-icons/fa";
import "../Styles/ComplianceSection.css";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "MiCA-aligned compliance",
    description:
      "Operate confidently with a fully licensed MiCA infrastructure built for future-ready crypto businesses.",
  },
  {
    icon: <FaLock />,
    title: "Institution-grade security",
    description:
      "Enterprise-level security to protect funds, transactions, and sensitive data at every layer.",
  },
  {
    icon: <FaFileAlt />,
    title: "Smart reporting & audits",
    description:
      "Advanced reporting tools designed for audits, accounting, and regulatory transparency.",
  },
];

const ComplianceSection = () => {
  return (
    <section className="compliance-section">
      <div className="compliance-container">
        {/* Left Content */}
        <div className="compliance-left">
          <p className="subtitle">REGULATORY & SECURITY FRAMEWORK</p>
          <h2 className="title">
            Built on trust, compliance & institutional security
          </h2>
        </div>

        {/* Right Content */}
        <div className="compliance-right">
          <img src="./IG.png" alt="Compliance Illustration" />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplianceSection;
