import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [mobileSectorOpen, setMobileSectorOpen] = useState(false); // State for mobile accordion
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside (Desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSectorOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/image/AUSPAC LOGO1.png"
            alt="AusPac Logo"
            className="h-14 w-14 object-contain"
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#0077B6]">Aus</span>
            <span className="text-[#00B4D8]">Pac</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#0077B6] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#0077B6] transition">
            About Us
          </Link>

          {/* Sector Expertise Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSectorOpen(!sectorOpen)}
              className="flex items-center gap-1 hover:text-[#0077B6] transition font-medium"
            >
              Sector Expertise
              <HiChevronDown
                className={`transition-transform duration-300 ${
                  sectorOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sectorOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-white shadow-lg border rounded-md py-3 animate-fadeIn">
                <Link
                  to="/sector/pi-clubs"
                  className="block px-5 py-2 hover:bg-gray-50 transition"
                  onClick={() => setSectorOpen(false)}
                >
                  P&I Clubs & Insurance Interests
                </Link>
                <Link
                  to="/sector/mining"
                  className="block px-5 py-2 hover:bg-gray-50 transition"
                  onClick={() => setSectorOpen(false)}
                >
                  Mining & Resource Majors
                </Link>
                <Link
                  to="/sector/oil-gas"
                  className="block px-5 py-2 hover:bg-gray-50 transition"
                  onClick={() => setSectorOpen(false)}
                >
                  Oil & Gas Terminals & Tanker Operators
                </Link>
              </div>
            )}
          </div>

          <Link to="/services" className="hover:text-[#0077B6] transition">
            Services
          </Link>
          <Link to="/why-auspac" className="hover:text-[#0077B6] transition">
            Why AusPac
          </Link>
          
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#0077B6] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#005f8f] transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <HiX className="h-7 w-7 text-[#0077B6]" />
          ) : (
            <HiOutlineMenuAlt3 className="h-7 w-7 text-[#0077B6]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pt-2 pb-6 space-y-1 border-t bg-white absolute w-full shadow-lg">
          <Link to="/" className="block py-3 text-gray-800 font-medium hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block py-3 text-gray-800 font-medium hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          {/* Mobile Sector Expertise Accordion */}
          <div>
            <button
              onClick={() => setMobileSectorOpen(!mobileSectorOpen)}
              className="flex w-full items-center justify-between py-3 text-gray-800 font-medium hover:text-[#0077B6]"
            >
              Sector Expertise
              <HiChevronDown
                className={`transition-transform duration-300 ${
                  mobileSectorOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Dropdown Items */}
            {mobileSectorOpen && (
              <div className="flex flex-col pl-4 mt-1 mb-2 border-l-2 border-gray-100 space-y-1">
                <Link to="/sector/pi-clubs" className="block py-2 text-sm text-gray-600 hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
                  P&I Clubs & Insurance Interests
                </Link>
                <Link to="/sector/mining" className="block py-2 text-sm text-gray-600 hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
                  Mining & Resource Majors
                </Link>
                <Link to="/sector/oil-gas" className="block py-2 text-sm text-gray-600 hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
                  Oil & Gas Terminals & Tanker Operators
                </Link>
              </div>
            )}
          </div>

          <Link to="/services" className="block py-3 text-gray-800 font-medium hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/why-auspac" className="block py-3 text-gray-800 font-medium hover:text-[#0077B6]" onClick={() => setIsOpen(false)}>
            Why AusPac
          </Link>
         

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#0077B6] text-white py-3 rounded-md mt-4 font-semibold hover:bg-[#005f8f] transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}