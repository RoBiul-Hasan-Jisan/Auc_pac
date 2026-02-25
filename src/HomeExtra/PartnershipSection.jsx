import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function CommitmentSection() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Our Commitment – AusPac Marine Consulting</title>
        <meta
          name="description"
          content="AusPac Marine Consulting delivers expert, discreet, and commercially aware maritime consulting to safeguard clients’ operations, finances, and reputation globally."
        />
        <meta property="og:title" content="Our Commitment – AusPac Marine Consulting" />
        <meta
          property="og:description"
          content="Expert, discreet, and commercially aware maritime consulting protecting clients’ operations, finances, and reputation worldwide."
        />
      </Helmet>

      <section
        aria-labelledby="commitment-heading"
        className="max-w-4xl mx-auto px-6 py-24 text-gray-900"
      >
        <h2
          id="commitment-heading"
          className="text-4xl font-bold text-[#0077B6] mb-8"
          
        >
          Our Commitment
        </h2>

        <ul className="space-y-6 text-lg leading-relaxed list-disc list-inside">
          <li>
            Operate with discretion, technical excellence, and commercial awareness in every engagement.
          </li>
          <li>
            Protect clients’ operational, financial, and reputational interests beyond mere compliance.
          </li>
          <li>
            Deliver independent reporting, regulatory insight, and structured risk assessments.
          </li>
          <li>
            Combine seagoing experience, regulatory knowledge, and commercial expertise across Australia, the Pacific, and international shipping corridors.
          </li>
        </ul>
      </section>
    </HelmetProvider>
  );
}