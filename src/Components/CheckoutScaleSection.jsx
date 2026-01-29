import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, Layers } from "lucide-react";
import "../Styles/CheckoutScaleSection.css";
import checkoutBg from "../../public/bt-1.jpg";

export default function CheckoutScaleSection() {
  return (
    <section className="scale-section">
      <div className="scale-container">

        {/* LEFT */}
        <motion.div
          className="scale-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>
            Checkout built
            <span> for scale & reliability</span>
          </h2>

          <p className="scale-subtitle">
            KuberGates delivers a production-ready checkout engineered for
            high-volume payments, global reach, and enterprise-grade reliability —
            without custom UI work.
          </p>

          <ul className="scale-points">
            <li><ShieldCheck /> Enterprise-grade security & compliance</li>
            <li><Zap /> High-throughput payment processing</li>
            <li><Layers /> Multi-chain & multi-currency support</li>
            <li><Globe /> Global customers, local settlement</li>
          </ul>

          <span className="scale-footnote">
            Trusted by fast-growing fintech, SaaS, and commerce platforms.
          </span>
        </motion.div>

        {/* RIGHT – REAL PRODUCT CARD */}
        <motion.div
          className="scale-right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="checkout-card-pro">

            {/* background image texture */}
            <img src={checkoutBg} alt="" className="card-bg-image" />

            {/* ambient gradient */}
            <div className="card-ambient" />

            {/* content */}
         <div className="card-ui">
  <motion.div
    className="checkout-item primary"
    whileHover={{ scale: 1.03 }}
  >
    <span className="dot blue" />
    <div>
      <p>Connect Wallet</p>
      <small>400+ wallets supported</small>
    </div>
  </motion.div>

  <motion.div
    className="checkout-item"
    whileHover={{ scale: 1.03 }}
  >
    <span className="dot gold" />
    <p>Instant Settlement</p>
  </motion.div>

  <motion.div
    className="checkout-item"
    whileHover={{ scale: 1.03 }}
  >
    <span className="dot pink" />
    <p>Multi-Currency Payouts</p>
  </motion.div>

  {/* NEW ITEM 4 */}
  <motion.div
    className="checkout-item"
    whileHover={{ scale: 1.03 }}
  >
    <span className="dot blue" />
    <p>Fraud & Risk Protection</p>
  </motion.div>

  {/* NEW ITEM 5 */}
  <motion.div
    className="checkout-item"
    whileHover={{ scale: 1.03 }}
  >
    <span className="dot gold" />
    <p>Real-Time Payment Analytics</p>
  </motion.div>
</div>


          </div>
        </motion.div>

      </div>
    </section>
  );
}
