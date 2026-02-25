import { FaShip, FaCheckCircle } from "react-icons/fa";

export default function PIClubs() {
  const services = [
    "Marine Casualty & Incident Investigation",
    "Cargo Damage & Shortage Claims Assessment",
    "Draft Survey Disputes",
    "Bunker Quantity & Quality Investigations",
    "Hatch Integrity & Water Ingress Assessment",
    "Terminal & Stevedore Damage Investigations",
    "Vessel Condition & Pre-Delivery Risk Surveys",
  ];

  const values = [
    "Immediate mobilisation across Australia and the Pacific region.",
    "Independent technical reporting structured for arbitration, insurance review, and legal proceedings.",
    "Liability-sensitive, evidence-driven documentation protecting Member interests.",
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0077B6] mb-4">
          P&I Clubs & Insurance Interests
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          AusPac provides specialised maritime attendance services for Protection & Indemnity (P&I) Clubs and insurance stakeholders. Our team ensures professional vessel attendance, documentation, compliance verification, and reporting support for global insurers.
        </p>
      </div>

      {/* What We Provide Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white shadow-sm rounded-md p-4 hover:shadow-md transition"
            >
              <FaShip className="text-[#0077B6] mt-1" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Value Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Value</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {values.map((value, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}