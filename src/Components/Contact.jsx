import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  MapPin,
  Phone
} from "lucide-react";
import Swal from "sweetalert2";
import "../Styles/Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Missing information",
        text: "Please fill in all required fields before submitting.",
        confirmButtonColor: "#3b82f6"
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message sent successfully",
      text: "Our team will get back to you within 24 hours.",
      confirmButtonText: "Okay",
      confirmButtonColor: "#3b82f6"
    });

    e.target.reset();
  };

  return (
    <section className="kg-contact-section">
      <motion.div
        className="kg-contact-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        {/* LEFT */}
        <div className="kg-contact-left">
          <h2>Get in Touch</h2>
          <p className="kg-desc">
            We’re here to answer your questions, discuss partnerships,
            or help you get started with KuberGates.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=New+Delhi+India"
            target="_blank"
            rel="noopener noreferrer"
            className="kg-info kg-link"
          >
            <MapPin size={18} />
            <span>New Delhi, India</span>
          </a>

          <a href="tel:+919XXXXXXXXX" className="kg-info kg-link">
            <Phone size={18} />
            <span>+91 9XXXXXXXXX</span>
          </a>

          <a
            href="mailto:support@kubergates.com"
            className="kg-info kg-link"
          >
            <Mail size={18} />
            <span>support@kubergates.com</span>
          </a>
        </div>

        {/* RIGHT */}
        <form className="kg-contact-right" onSubmit={handleSubmit}>
          <div className="kg-field">
            <User size={18} />
            <input
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>

          <div className="kg-field">
            <Mail size={18} />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="kg-field kg-textarea">
            <MessageSquare size={18} />
            <textarea
              name="message"
              placeholder="Write your message..."
            />
          </div>

          <button type="submit" className="kg-submit">
            Send Message
          </button>
        </form>

      </motion.div>
    </section>
  );
}
