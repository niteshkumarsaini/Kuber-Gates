import { motion } from "framer-motion";
import "../Styles/HeroSection.css";
import StatsSection from "../Components/StatsSection";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate=useNavigate();



  return (
    <section className="m-hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            Trusted by 5,000+ Global Businesses
          </div>

          <h1>
            Accept Crypto Payments
            <span> Globally & Securely</span>
          </h1>

          <p>
            Kuber Gates is a premium crypto payment gateway enabling
            businesses to accept, manage, and settle cryptocurrency
            payments worldwide with enterprise-grade security.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={()=>{navigate("/get-started")}}>Get Started</button>
            <button className="btn-secondary" onClick={()=>{navigate("/developers/api-docs")}}>View Documentation</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>100+</strong>
              <span>Supported Coins</span>
            </div>
            <div>
              <strong>99.99%</strong>
              <span>Uptime</span>
            </div>
            <div>
              <strong>150+</strong>
              <span>Countries</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-visual-card">
            <StatsSection />
          </div>
        </motion.div>

      </div>
      <div className="hero-mobile-section">
        <StatsSection/>
      </div>
    </section>
  );
};

export default HeroSection;
