import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Surveys from "./pages/Surveys";
import Contact from "./pages/Contact";
import Whyauspac from "./pages/whyauspac";

// Sector Pages
import PIClubs from "./pages/sector/PIClubs";
import Mining from "./pages/sector/Mining";
import OilGas from "./pages/sector/OilGas";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />

        <main className="min-h-[80vh]">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Surveys />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-auspac" element={<Whyauspac />} />

            {/* Sector Pages */}
            <Route path="/sector/pi-clubs" element={<PIClubs />} />
            <Route path="/sector/mining" element={<Mining />} />
            <Route path="/sector/oil-gas" element={<OilGas />} />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 text-gray-500">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;