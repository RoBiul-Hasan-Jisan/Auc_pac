import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiSmartphone } from "react-icons/fi";
import { SiWechat } from "react-icons/si";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClasses =
    "text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded";

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 select-none">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <a
            href="#top"
            onClick={scrollToTop}
            className="text-white text-3xl font-bold mb-4 inline-block hover:text-indigo-400 transition-colors duration-300"
          >
            AusPac Marine
          </a>
          <p className="text-gray-400 leading-relaxed">
            Trusted marine surveying and consultancy services with discretion, precision, and responsiveness.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation" className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className={linkClasses} onClick={scrollToTop}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FiMapPin className="text-indigo-500 w-5 h-5" />
              <span>PO Box 3058, Melbourne, Australia</span>
            </li>
            <li className="flex items-center gap-3">
              <FiSmartphone className="text-indigo-500 w-5 h-5" />
              <a href="tel:+61480556364" className={linkClasses}>
                +61 480 556 364
              </a>{" "}
              <span className="text-gray-400">(International)</span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-indigo-500 w-5 h-5" />
              <a href="tel:0480556364" className={linkClasses}>
                0480 556 364
              </a>{" "}
              <span className="text-gray-400">(Within Australia)</span>
            </li>
            <li className="flex items-center gap-3">
              <SiWechat className="text-green-500 w-5 h-5" />
              <span>CaptHasan1977</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-indigo-500 w-5 h-5" />
              <a href="mailto:survey@auspac.au" className={linkClasses}>
                survey@auspac.au
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm select-text">
        &copy; {new Date().getFullYear()} AusPac Marine. All rights reserved.
      </div>
    </footer>
  );
}