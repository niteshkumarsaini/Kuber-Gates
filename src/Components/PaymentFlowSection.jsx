import React from "react";
import "../Styles/PaymentFlowSection.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentFlowSection = () => {
  const navigate=useNavigate();
  return (
    <section className="payment-flow">
      <div className="payment-container">
        
        {/* LEFT CONTENT */}
        <div className="payment-left">
          <h2>
            Optimize & Accept <span>Crypto Payments</span>
          </h2>

          <p className="f-subtitle" style={{margin:"25px 3px"}}>
            Kuber Gates enables businesses to accept crypto payments globally
            with enterprise-grade security and seamless integration.
          </p>

          <ul className="payment-points">
            <li><FaCheckCircle /> 100+ cryptocurrencies supported</li>
            <li><FaCheckCircle /> Low processing fees</li>
            <li><FaCheckCircle /> High-speed transaction processing</li>
            <li><FaCheckCircle /> Auto-conversion options available</li>
            <li><FaCheckCircle /> 24/7 technical support</li>
          </ul>

          <div className="payment-actions">
            <button className="btn-primary pa-btn" onClick={()=>{navigate("/get-started")}}>Get Started</button>
            <button className="btn-outline pa-btn" onClick={()=>{navigate("/developers/api-docs")}} >View Documentation</button>
          </div>
        </div>

        {/* RIGHT MOCK CARD */}
        <div className="payment-right">
          <div className="payment-mock">
            <h4>Kuber Gates Payment</h4>

            <div className="step active">1. Choose Asset</div>
            <div className="input-box">USDT (TRC20)</div>

            <div className="step">2. Enter Amount</div>
            <div className="amount">100.00 USDT</div>

            <button className="mock-btn" onClick={()=>{alert("Processing...")}}>Proceed to Pay</button>

            <p className="mock-note">
              * Demo environment – no real funds involved
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PaymentFlowSection;
