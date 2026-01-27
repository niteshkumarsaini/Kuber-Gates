import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Wallet, Code2 } from "lucide-react";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} alt="Kuber Gates" className="logo"/>
          {/* <span>Kuber Gates</span> */}
        </div>

        {/* NAV */}
        <ul className="navbar-links">

          <li
            onMouseEnter={() => setOpen("products")}
            onMouseLeave={() => setOpen(null)}
          >
            Products <ChevronDown size={16} />
            <AnimatePresence>
              {open === "products" && (
                <motion.div
                  className="dropdown"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <div className="dropdown-item">
                    <Wallet size={18} /> Crypto Payments
                  </div>
                  <div className="dropdown-item">
                    <Wallet size={18} /> Payouts
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li
            onMouseEnter={() => setOpen("developers")}
            onMouseLeave={() => setOpen(null)}
          >
            Developers <ChevronDown size={16} />
            <AnimatePresence>
              {open === "developers" && (
                <motion.div
                  className="dropdown"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <div className="dropdown-item">
                    <Code2 size={18} /> API Docs
                  </div>
                  <div className="dropdown-item">
                    <Code2 size={18} /> SDKs
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>Company</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <button className="btn-login">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>

      </div>
    </header>
  );
}
