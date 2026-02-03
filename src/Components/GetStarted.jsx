import React, { useState } from "react";
import styles from "../Styles/GetStarted.module.css";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";

export default function GetStarted() {
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const requiredFields = isLogin
      ? ["email", "password"]
      : ["name", "company", "phone", "email", "password"];

    const isMissing = requiredFields.some(
      (field) => !form.get(field)?.trim()
    );

    // ❌ ERROR ALERT (Professional)
    if (isMissing) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill all required fields.",
        iconHtml: `
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
            stroke="#c0392b" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        `,
        customClass: {
          icon: "kg-swal-icon"
        },
        confirmButtonColor: "#d16b86"
      });
      return;
    }

    // ✅ SUCCESS ALERT (Professional)
    Swal.fire({
      title: isLogin ? "Login Successful" : "Account Created",
      text: isLogin
        ? "Welcome back to KuberGates"
        : "Your account has been registered successfully.",
      iconHtml: `
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
          stroke="#d16b86" stroke-width="2.4"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      `,
      customClass: {
        icon: "kg-swal-icon"
      },
      confirmButtonColor: "#d16b86",
      confirmButtonText: "Continue",
      timer: 2200,
      showConfirmButton: false
    });

    e.target.reset();
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.layout}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2>Why Choose KuberGates?</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>Secure Payments</h4>
              <p>Enterprise-grade security for every transaction.</p>
            </div>

            <div className={styles.card}>
              <h4>Real-time Dashboard</h4>
              <p>Instant visibility into revenue & settlements.</p>
            </div>

            <div className={styles.card}>
              <h4>Easy Integration</h4>
              <p>Developer-friendly APIs & SDKs.</p>
            </div>

            <div className={styles.card}>
              <h4>24/7 Support</h4>
              <p>Dedicated experts whenever you need help.</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.formCard}>
            <img src={logo} alt="KuberGates" />

            <h1>{isLogin ? "Welcome Back" : "Create Your Account"}</h1>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input name="name" placeholder="Full Name" />
                  <input name="company" placeholder="Company Name" />
                  <input name="phone" placeholder="Phone Number" />
                </>
              )}

              <input name="email" type="email" placeholder="Email Address" />
              <input
                name="password"
                type="password"
                placeholder="Password"
              />

              <button type="submit">
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p>
              {isLogin ? "New here?" : "Already have an account?"}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? " Sign Up" : " Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
