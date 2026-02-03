import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Wallet,
  Link2,
  FileText,
  Repeat,
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

  const goTo = (path) => {
    setOpen(null);
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
            onClick={() => goTo("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* DESKTOP NAV */}
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

                    <div className="dropdown-column">
                      <div className="dropdown-item" onClick={() => goTo("/products/crypto-payments")}>
                        <Wallet /> Accept Crypto Payments
                      </div>
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

                    <div className="dropdown-column">
                      <div className="dropdown-item" onClick={() => goTo("/products/subscriptions")}>
                        <Repeat /> Subscriptions
                      </div>
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

          <li onClick={() => goTo("/company")}>Company</li>
          <li onClick={() => goTo("/pricing")}>Pricing</li>
            <li onClick={() => goTo("/contact-us")}>Contact us</li>
        </ul>

        {/* DESKTOP CTA */}
        <div className="navbar-cta">
          <button className="btn-login" onClick={() => goTo("/login")}>
            Login
          </button>
          <button className="btn-primary" onClick={() => goTo("/get-started")}>
            Get Started
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="mobile-menu-btn"
          onClick={() => setOpen(open === "mobile" ? null : "mobile")}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* MOBILE MENU (ALL LINKS INCLUDED) */}
      <AnimatePresence>
        {open === "mobile" && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {/* PRODUCTS */}
            <div onClick={() => goTo("/products/crypto-payments")}>Accept Crypto Payments</div>
            <div onClick={() => goTo("/products/payment-gateway")}>Payment Gateway</div>
            <div onClick={() => goTo("/products/payment-links")}>Payment Links</div>
            <div onClick={() => goTo("/products/invoices")}>Invoices</div>
            <div onClick={() => goTo("/products/subscriptions")}>Subscriptions</div>
            <div onClick={() => goTo("/products/white-label")}>White-Label Payments</div>
            <div onClick={() => goTo("/products/multi-currency")}>Multi-Currency Support</div>
            <div onClick={() => goTo("/products/refunds")}>Refunds & Partial Refunds</div>

            {/* DEVELOPERS */}
            <div onClick={() => goTo("/developers/api-docs")}>API Docs</div>
            <div onClick={() => goTo("/developers/sdks")}>SDKs</div>

            {/* STATIC */}
            <div onClick={() => goTo("/company")}>Company</div>
            <div onClick={() => goTo("/pricing")}>Pricing</div>
             <div onClick={() => goTo("/contact-us")}>Contact us</div>
            <div onClick={() => goTo("/login")}>Login</div>

            <div className="mobile-cta" onClick={() => goTo("/get-started")}>
              Get Started
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
