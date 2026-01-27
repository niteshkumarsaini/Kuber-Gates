import React, { useState, useEffect } from "react";
import "../Styles/PaymentGatewaySection.css";

const accordionData = [
  {
    title: "Invoices",
    description: "Create crypto invoices for e-commerce and services. Set prices in fiat or crypto and let customers pay using their preferred blockchain network.",
    mockup: "invoices" // Maps to first image
  },
  {
    title: "Recurring payments", 
    description: "Automate recurring crypto payments for subscriptions, SaaS products, and memberships.",
    mockup: "recurring" // Maps to second image
  },
  {
    title: "Hosted checkout",
    description: "Accept payments using a KuberGates-hosted checkout page without building frontend logic.",
    mockup: "hosted" // Maps to third image
  },
  {
    title: "Payment links",
    description: "Generate secure crypto payment links and share them across any platform.",
    mockup: "payment-links" // Maps to fourth image
  },
];

const PaymentGatewaySection = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("crypto");
  const [expiryTime, setExpiryTime] = useState(2 * 3600 + 34 * 60 + 54);
  const [hoveredMockup, setHoveredMockup] = useState("invoices");

  useEffect(() => {
    const interval = setInterval(() => {
      setExpiryTime((prev) => {
        if (prev <= 1) return 2 * 3600 + 34 * 60 + 54;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatExpiryTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const getMockupContent = (mockupType) => {
    switch(mockupType) {
      case "invoices":
        return (
          <>
            <div className="mockup-amount">10.00 USDT</div>
            <div className="mockup-network">TRON (TRC-20)</div>
            <div className="mockup-timer">Expires in <strong>{formatExpiryTime(expiryTime)}</strong></div>
            <button className="mockup-pay-btn">Pay</button>
          </>
        );
      case "recurring":
        return (
          <>
            <div className="mockup-qr">QR Code Here</div>
            <div className="mockup-status">✓ Active Subscription</div>
            <div className="mockup-recurring">Monthly: 10 USDT</div>
          </>
        );
      case "hosted":
        return (
          <>
            <div className="mockup-universal">Universal Payment Solution</div>
            <div className="mockup-qr-large">Large QR</div>
            <div className="mockup-scan">Scan to Pay</div>
          </>
        );
      case "payment-links":
        return (
          <>
            <div className="mockup-status-alert">Status: Completed</div>
            <div className="mockup-amount-large">6 USDT ✓</div>
            <button className="mockup-copy-btn">Copy Link</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="kg-gateway">
      <h2 className="kg-heading">
        We make it easy for you to plug into{" "}
        <span>digital payments</span>
      </h2>

      <div className="kg-wrapper">
        {/* LEFT SIDE - ACCORDION */}
        <div className="kg-left">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`kg-accordion ${active === index || hoveredMockup === item.mockup ? "active" : ""}`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setHoveredMockup(item.mockup)}
              onMouseLeave={() => setHoveredMockup(accordionData[active]?.mockup || "invoices")}
            >
              <div className="kg-accordion-header">
                <h4>{item.title}</h4>
                <span>{active === index ? "−" : "+"}</span>
              </div>
              {active === index && (
                <p className="kg-accordion-body">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – DYNAMIC MOCKUP */}
        <div className="kg-right">
          <div className="kg-widget">
            <div className="kg-widget-tabs">
              <button
                className={tab === "fiat" ? "active" : ""}
                onClick={() => setTab("fiat")}
              >
                Fiat invoice
              </button>
              <button
                className={tab === "crypto" ? "active" : ""}
                onClick={() => setTab("crypto")}
              >
                Crypto invoice
              </button>
            </div>

            <div className="kg-widget-body">
              <div className="kg-brand">KuberGates</div>
              
              <div className="kg-mockup-container">
                {getMockupContent(hoveredMockup)}
              </div>

              {hoveredMockup === "invoices" && (
                <>
                  <button className="kg-pay-btn">Pay with KuberGates</button>
                  <div className="kg-divider">OR</div>
                  <button className="kg-wallet-btn">Wallet Connect</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentGatewaySection;
