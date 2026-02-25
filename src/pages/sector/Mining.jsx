import { FaShip, FaCheckCircle } from "react-icons/fa";

export default function Mining() {
  const commodities = [
    "Nickel Ore",
    "Iron Ore",
    "Manganese",
    "Spodumene",
    "Copper Concentrate",
    "Salt",
    "Paragoethite",
  ];

  const services = [
    "Port Captaincy & Loading Supervision",
    "Moisture Monitoring & TML Compliance Oversight",
    "Liquefaction Risk Mitigation",
    "Draft Survey Verification",
    "Vessel Suitability & Hold Fitness Advisory",
    "Loading Optimisation & Charter Party Protection",
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0077B6] mb-4">
          Mining & Resource Majors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We support mining and resource corporations with reliable port attendance, logistics coordination, and operational compliance for bulk carriers and shipments.
        </p>
      </div>

      {/* Commodities Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Commodities Supported</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {commodities.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white shadow-sm rounded-md p-4 hover:shadow-md transition"
            >
              <FaShip className="text-[#0077B6] text-xl" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white shadow-sm rounded-md p-4 hover:shadow-md transition"
            >
              <FaCheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}