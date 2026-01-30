import { motion } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  Building2,
  Globe,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import "../Styles/PaymentGatewayComponent.css";

export default function PaymentGatewayComponent() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pg-section">
        <div className="pg-container">
          <div className="pg-hero">

            {/* LEFT */}
            <motion.div
              className="pg-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="pg-badge">PAYMENT GATEWAY</span>

              <h1>
                Accept payments <br />
                <span>globally & securely</span>
              </h1>

              <p>
                KuberGates enables businesses to accept cards, UPI, net banking,
                and international payments with enterprise-grade security and
                lightning-fast settlements.
              </p>

              <div className="pg-actions">
                <button className="pg-primary">Get Started</button>
                <button className="pg-secondary">View Docs</button>
              </div>
            </motion.div>

            {/* RIGHT – PRODUCT CARD */}
            <motion.div
              className="pg-right"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="pg-card">
                <div className="pg-card-ambient" />

                <div className="pg-card-ui">

                  <div className="pg-item">
                    <CreditCard />
                    <div>
                      <p>Card Payments</p>
                      <small>Visa, Mastercard, RuPay & global cards</small>
                    </div>
                  </div>

                  <div className="pg-item">
                    <Smartphone />
                    <div>
                      <p>UPI & Wallets</p>
                      <small>Google Pay, PhonePe, Paytm & more</small>
                    </div>
                  </div>

                  <div className="pg-item">
                    <Building2 />
                    <div>
                      <p>Net Banking</p>
                      <small>100+ banks with real-time confirmation</small>
                    </div>
                  </div>

                  <div className="pg-item">
                    <Globe />
                    <div>
                      <p>International Payments</p>
                      <small>Accept payments from global customers</small>
                    </div>
                  </div>

                  <div className="pg-item">
                    <ShieldCheck />
                    <div>
                      <p>Fraud & Risk Protection</p>
                      <small>AI-based checks & smart routing</small>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TRUST / FEATURES SECTION */}
      <section className="pg-trust">
        <div className="pg-trust-container">

          <div className="pg-trust-item">
            <ShieldCheck />
            <h4>Bank-Grade Security</h4>
            <p>
              PCI-DSS compliant infrastructure with encryption, tokenization,
              and secure authentication.
            </p>
          </div>

          <div className="pg-trust-item">
            <Globe />
            <h4>Global Coverage</h4>
            <p>
              Accept payments from multiple countries with local settlement
              support.
            </p>
          </div>

          <div className="pg-trust-item">
            <TrendingUp />
            <h4>High Success Rates</h4>
            <p>
              Optimized routing and retries ensure maximum transaction success.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
