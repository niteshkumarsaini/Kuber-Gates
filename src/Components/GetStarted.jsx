import React, { useState } from "react";
import styles from "../Styles/GetStarted.module.css";
import logo from "../assets/logo.png";

const GetStarted = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className={styles.container}>
      {/* LEFT FEATURES SECTION */}
      <div className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <h2 className={styles.featuresTitle}>Why Choose Us?</h2>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Secure Payments</h3>
              <p>Bank-grade encryption to protect every transaction.</p>
            </div>

            <div className={styles.featureCard}>
              <h3>Real-time Dashboard</h3>
              <p>Track revenue, refunds, and settlements instantly.</p>
            </div>

            <div className={styles.featureCard}>
              <h3>Easy Integration</h3>
              <p>Developer-friendly APIs & quick onboarding.</p>
            </div>

            <div className={styles.featureCard}>
              <h3>24/7 Support</h3>
              <p>Our experts are always ready to help you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className={styles.formSection}>
        <div className={styles.card}>
          <img src={logo} alt="Company Logo" className={styles.formLogo} />

          <h1 className={styles.title}>
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h1>

          <form className={styles.form}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
              />
            )}

            <input type="email" placeholder="Email" className={styles.input} />

            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />

            <button type="submit" className={styles.submitBtn}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className={styles.toggleText}>
            {isLogin ? "New here?" : "Already have an account?"}
            <span onClick={toggleForm} className={styles.toggleLink}>
              {isLogin ? " Sign Up" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
