import { motion } from "framer-motion";
import "../Styles/GatewayFeatures.css";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function GatewayFeatures() {
  const navigate=useNavigate();
  return (
    <div>
    <section className="gateway-section" id="gt-1">
      <div className="gateway-wrapper">

        {/* FEATURE 1 */}
        <motion.div
          className="gateway-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <div className="gateway-text">
            <span className="gateway-kicker">Payments</span>
            <h2>Get paid in crypto, settle in fiat instantly</h2>
            <p>
              Accept leading cryptocurrencies globally and convert them into
              fiat instantly. Reduce volatility risk while simplifying your
              accounting and reconciliation workflows.
            </p>

            <button className="gateway-btn" onClick={()=>{navigate("/products/crypto-payments")}}>
              Explore <span>→</span>
            </button>
          </div>

          <div className="gateway-visual glass">
            <motion.img
              src="./dashboard-mock.png"
              alt="Crypto payment dashboard"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        </div>
        </section>

        {/* FEATURE 2 */}
            <section className="gateway-section" id="gt-2">
           <div className="gateway-wrapper">

        <motion.div
          className="gateway-block" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          {/* TEXT LEFT */}
          <div className="gateway-text">
            <span className="gateway-kicker">Transfers</span>
            <h2>Send crypto globally with lower fees</h2>
            <p>
              Pay partners and suppliers across borders faster than traditional
              banking systems. Enjoy transparent pricing and near-instant
              settlement worldwide.
            </p>

            <button className="gateway-btn" onClick={()=>{navigate("/products/crypto-payments")}}>
              Explore <span>→</span>
            </button>
          </div>

          {/* IMAGE RIGHT */}
          <div className="gateway-visual glass">
            <motion.img
              src="./transfer-ui.png"
              alt="Global transfers"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            />
          </div>
        </motion.div>
</div>
</section>

        {/* <motion.div
          className="gateway-block reverse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <div className="gateway-visual glass">
            <motion.img
              src="./transfer-ui.png"
              alt="Global transfers"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            />
          </div>

          <div className="gateway-text">
            <span className="gateway-kicker">Transfers</span>
            <h2>Send crypto globally with lower fees</h2>
            <p>
              Pay partners and suppliers across borders faster than traditional
              banking systems. Enjoy transparent pricing and near-instant
              settlement worldwide.
            </p>

            <button className="gateway-btn">
              Explore <span>→</span>
            </button>
          </div>
        </motion.div> */}

        {/* FEATURE 3 */}
        {/* <motion.div
          className="gateway-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <div className="gateway-text">
            <span className="gateway-kicker">Treasury</span>
            <h2>Manage, convert & withdraw from one dashboard</h2>
            <p>
              Control your digital assets from a single secure platform.
              Convert, withdraw, and monitor balances across crypto and fiat
              accounts in real time.
            </p>

            <button className="gateway-btn">
              Explore <span>→</span>
            </button>
          </div>

          <div className="gateway-visual glass">
            <motion.img
              src="wallet-ui.png"
              alt="Asset management"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            />
          </div>
        </motion.div> */}
          <section className="gateway-section">
          <div className="gateway-wrapper">
        <motion.div
  className="gateway-block"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  variants={fadeUp}
>
  {/* TEXT LEFT */}
  <div className="gateway-text">
    <span className="gateway-kicker">Treasury</span>
    <h2>Manage, convert & withdraw from one dashboard</h2>
    <p>
      Control your digital assets from a single secure platform.
      Convert, withdraw, and monitor balances across crypto and fiat
      accounts in real time.
    </p>

    <button className="gateway-btn" onClick={()=>{navigate("/products/crypto-payments")}}>
      Explore <span>→</span>
    </button>
  </div>

  {/* IMAGE RIGHT */}
  <div className="gateway-visual glass">
    <motion.img
      src="./wallet-ui.png"
      alt="Asset management"
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3.5 }}
    />
  </div>
</motion.div>


      </div>
    </section>
    </div>
  );
}
