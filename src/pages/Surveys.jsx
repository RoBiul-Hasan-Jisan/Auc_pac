import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaShip, FaTools, FaClipboardCheck } from "react-icons/fa";
import services from "../data/services"; 

export default function ServicesSection() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Survey Services | AusPac</title>
        <meta
          name="description"
          content="Professional marine survey, inspection, audit and cargo supervision services."
        />
      </Helmet>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077B6]">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Independent marine surveying, inspection, and advisory services supporting shipowners, charterers, and insurers worldwide.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#0077B6]/10 rounded-full mb-4">
                  {index % 3 === 0 && <FaShip className="text-[#0077B6] text-2xl" />}
                  {index % 3 === 1 && <FaTools className="text-[#0077B6] text-2xl" />}
                  {index % 3 === 2 && <FaClipboardCheck className="text-[#0077B6] text-2xl" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0077B6] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}