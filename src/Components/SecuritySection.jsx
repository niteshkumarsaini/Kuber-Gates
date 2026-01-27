import React from "react";
import "../Styles/SecuritySection.css";
import { FaCheckCircle } from "react-icons/fa";
// import securityImg from "../assets/security-illustration.png";

const securityPoints = [
  "End-to-end encrypted transactions",
  "Hardened and scalable infrastructure",
  "Multi-layer fraud prevention systems",
  "Compliance-ready architecture",
  "Continuous monitoring and alerts",
];

const SecuritySection = () => {
  return (
    <section className="security-section">
      <div className="security-container">

        {/* LEFT CONTENT */}
        <div className="security-left">
          <h2>
            Security built into <span>every transaction</span>
          </h2>

          <p className="security-subtitle">
            KuberGates is designed with a security-first approach to protect
            payments, data, and business operations at every stage.
          </p>

          <ul className="security-list">
            {securityPoints.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="security-right">
          <img
            src={securityImg}
            alt="Enterprise Security Illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default SecuritySection;
