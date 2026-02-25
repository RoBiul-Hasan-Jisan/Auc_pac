import React from "react";

export default function Whyauspac() {
  const points = [
    {
      title: "Technical Authority",
      description: "Seagoing experience combined with certified audit capability",
    },
    {
      title: "Global Standards, Regional Expertise",
      description: "International conventions with Australian regulatory depth",
    },
    {
      title: "Commercial Awareness",
      description: "Strong understanding of charter party, insurance, and operational risk exposure",
    },
    {
      title: "Independence & Integrity",
      description: "Arbitration-ready reporting",
    },
    {
      title: "Rapid Deployment",
      description: "Casualty response, PSC readiness, high-moisture cargo monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B6] mb-8">
          Why AusPac
        </h1>
        <div className="space-y-6 text-left">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-[#0077B6] mb-2">
                {point.title}
              </h2>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}