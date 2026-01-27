// FeaturesSection.jsx
import React from "react";
import "../Styles/FeaturesSection.css";
import {
  FaBolt,
  FaShieldAlt,
  FaGlobe,
  FaCoins,
  FaCode,
  FaChartLine,
  FaWallet,
  FaSyncAlt,
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaBolt />,
    title: "Fast & Reliable Payments",
    description:
      "Process crypto transactions instantly with optimized routing and minimal latency.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise-Grade Security",
    description:
      "Advanced encryption and secure infrastructure to protect every transaction.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Payment Coverage",
    description:
      "Accept payments from customers worldwide across multiple blockchain networks.",
  },
  {
    icon: <FaCoins />,
    title: "Multi-Crypto Support",
    description:
      "Support 100+ cryptocurrencies including stablecoins and major tokens.",
  },
  {
    icon: <FaCode />,
    title: "Developer-Friendly APIs",
    description:
      "Clean REST APIs, webhooks, and SDKs designed for fast integration.",
  },
  {
    icon: <FaChartLine />,
    title: "Real-Time Analytics",
    description:
      "Monitor payments, settlements, and performance through a unified dashboard.",
  },
  {
    icon: <FaWallet />,
    title: "Instant Wallet Settlement",
    description:
      "Receive funds directly in your wallet without intermediaries or delays.",
  },
  {
    icon: <FaSyncAlt />,
    title: "High Transaction Success Rate",
    description:
      "Highly available infrastructure optimized for maximum payment success.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">
          Why Choose <span>KuberGates</span>
        </h2>
        <p className="section-subtitle">
          A secure and scalable crypto payment infrastructure built for modern
          global businesses.
        </p>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
