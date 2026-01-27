// PaymentDemo.jsx - Complete React component with external CSS
import React, { useState, useEffect } from 'react';
import '../Styles/PaymentDemo.css'; // External CSS file below

const PaymentDemo = () => {
  const [activeTab, setActiveTab] = useState('invoices');
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 34 * 60 + 54);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 2 * 3600 + 34 * 60 + 54; // Reset timer
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const tabs = [
    { id: 'invoices', label: 'Invoices' },
    { id: 'recurring', label: 'Recurring payments' },
    { id: 'links', label: 'Payment links' }
  ];

  return (
    <div className="payment-demo-container">
      <h1 className="demo-title">We make digital payments to plug</h1>
      
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="payment-form">
        <div className="crypto-info">
          <div className="crypto-name">TRON (TRC-20)</div>
          <div className="timer">{formatTime(timeLeft)}</div>
        </div>
        <div className="amount-section">
          <input 
            type="text" 
            className="amount-input" 
            value="10.00 USDT" 
            readOnly 
          />
          <div className="crypto-symbol">TRX</div>
        </div>
        <button className="pay-btn">Pay</button>
      </div>

      <div className="features">
        <div className="feature">
          <strong>No rolling reserves</strong>
        </div>
        <div className="feature">
          <strong>Global coverage</strong>
        </div>
        <div className="feature">
          <strong>Zero chargebacks</strong>
        </div>
        <div className="feature">
          <strong>Instant transactions</strong>
        </div>
      </div>
    </div>
  );
};

export default PaymentDemo;
