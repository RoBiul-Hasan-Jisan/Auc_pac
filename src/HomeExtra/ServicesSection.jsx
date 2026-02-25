// src/HomeExtra/ServicesSection.jsx

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Independent marine surveying, inspection and advisory services
              supporting shipowners, charterers and insurers worldwide.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2 text-blue-600">•</span>
                      {item}
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