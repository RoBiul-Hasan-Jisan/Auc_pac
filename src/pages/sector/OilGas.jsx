import { FaTools, FaCheckCircle } from "react-icons/fa";

export default function OilGas() {
  const capabilities = [
    "Tanker & Oil Cargo Incident Investigation",
    "Ship, Terminal & Laboratory Attendance",
    "Assistant Mooring Master – Offshore Operations",
    "STS Operations – POAC",
    "Cargo Sampling & Transfer Oversight",
    "Expeditor Services",
  ];

  const advantages = [
    "Enhanced safety assurance during critical cargo transfer operations.",
    "Independent documentation for operational disputes and regulatory review.",
    "Protection of terminal integrity and operational continuity.",
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0077B6] mb-4">
          Oil & Gas Terminals & Tanker Operators
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          AusPac provides professional marine attendance services to oil and gas terminals and tanker operators, ensuring compliance, risk mitigation, and operational efficiency during critical operations.
        </p>
      </div>

      {/* Capabilities Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white shadow-sm rounded-md p-4 hover:shadow-md transition"
            >
              <FaTools className="text-[#0077B6] mt-1" />
              <p className="text-gray-700">{cap}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Advantage Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Operational Advantage</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {advantages.map((adv, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              {adv}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}