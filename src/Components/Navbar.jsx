import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Wallet,
  CreditCard,
  Link2, 
  FileText,
  Repeat,
  Gift,
  Layers,
  Globe,
  RotateCcw,
  Code2
} from "lucide-react";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const goTo = (path) => {
    setOpen(null); // close dropdown
    navigate(path);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Kuber Gates"
            onClick={redirectToHome}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* NAV LINKS */}
        <ul className="navbar-links">

          {/* PRODUCTS */}
          <li
            onMouseEnter={() => setOpen("products")}
            onMouseLeave={() => setOpen(null)}
          >
            Products <ChevronDown size={16} />

            <AnimatePresence>
              {open === "products" && (
                <motion.div
                  className="dropdown mega-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <div className="dropdown-grid">

                    {/* COLUMN 1 */}
                    <div className="dropdown-column">
                      <div className="dropdown-item" onClick={() => goTo("/products/crypto-payments")}>
                        <Wallet /> Accept Crypto Payments
                      </div>
                      {/* <div className="dropdown-item" onClick={() => goTo("/products/fiat-payments")}>
                        <CreditCard /> Accept Fiat Payments
                      </div> */}
                      <div className="dropdown-item" onClick={() => goTo("/products/payment-gateway")}>
                        <Layers /> Payment Gateway
                      </div>
                      <div className="dropdown-item" onClick={() => goTo("/products/payment-links")}>
                        <Link2 /> Payment Links
                      </div>
                      <div className="dropdown-item" onClick={() => goTo("/products/invoices")}>
                        <FileText /> Invoices
                      </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="dropdown-column">
                      <div className="dropdown-item" onClick={() => goTo("/products/subscriptions")}>
                        <Repeat /> Subscriptions
                      </div>
                      {/* <div className="dropdown-item" onClick={() => goTo("/products/donations")}>
                        <Gift /> Donation Payments
                      </div> */}
                      <div className="dropdown-item" onClick={() => goTo("/products/white-label")}>
                        <Layers /> White-Label Payments
                      </div>
                      <div className="dropdown-item" onClick={() => goTo("/products/multi-currency")}>
                        <Globe /> Multi-Currency Support
                      </div>
                      <div className="dropdown-item" onClick={() => goTo("/products/refunds")}>
                        <RotateCcw /> Refunds & Partial Refunds
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* DEVELOPERS */}
          <li
            onMouseEnter={() => setOpen("developers")}
            onMouseLeave={() => setOpen(null)}
          >
            Developers <ChevronDown size={16} />

            <AnimatePresence>
              {open === "developers" && (
                <motion.div
                  className="dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <div className="dropdown-item" onClick={() => goTo("/developers/api-docs")}>
                    <Code2 /> API Docs
                  </div>
                  <div className="dropdown-item" onClick={() => goTo("/developers/sdks")}>
                    <Code2 /> SDKs
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* STATIC LINKS */}
          <li onClick={() => goTo("/company")}>Company</li>
          <li onClick={() => goTo("/pricing")}>Pricing</li>

        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <button className="btn-login" onClick={() => goTo("/login")}>
            Login
          </button>
          <button className="btn-primary" onClick={() => goTo("/get-started")}>
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}
