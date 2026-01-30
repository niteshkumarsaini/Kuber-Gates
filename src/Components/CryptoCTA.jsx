import { motion } from "framer-motion";
import "../Styles/CryptoCTA.css";

export default function CryptoCTA() {
  return  (
     <section className="premium-cta">
      {/* animated background glow */}
      <div className="cta-glow blue" />
      <div className="cta-glow pink" />

      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Start accepting crypto payments today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          A premium crypto payment gateway built for modern global businesses.
        </motion.p>

        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
   
    
  );
}
