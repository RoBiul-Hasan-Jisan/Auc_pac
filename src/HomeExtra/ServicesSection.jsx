import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ServicesSection() {
  const coreAreas = [
    "Marine Surveys & Superintendence",
    "P&I & Casualty Response",
    "Regulatory Compliance & Audit",
    "Bulk Commodities & Mineral Logistics",
    "Tanker & Offshore Operations",
    "Container & Agricultural Cargo Inspections",
  ];

  const sectorExpertise = [
    "International P&I Clubs",
    "Mining & Resource Majors",
    "Oil & Gas Terminals & Tanker Operators",
  ];

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

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0077B6]">
              Core Practice Areas
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Delivering specialist advisory and technical services with global standards.
            </p>
          </div>

          {/* Core Practice Areas Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex items-start"
              >
                <span className="text-[#0077B6] text-2xl mr-4 flex-shrink-0">•</span>
                <p className="text-gray-700 font-medium">{area}</p>
              </div>
            ))}
          </div>

          {/* Sector Expertise */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0077B6]">
              Sector Expertise
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              We provide specialist advisory and technical services across three critical sectors of global trade:
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {sectorExpertise.map((sector, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
                >
                  <p className="text-gray-700 font-medium flex items-center">
                    <span className="text-[#0077B6] text-2xl mr-3">•</span>
                    {sector}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </HelmetProvider>
  );
}