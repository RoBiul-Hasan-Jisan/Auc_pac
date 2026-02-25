// src/pages/About.jsx

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Us | AusPac</title>
        <meta
          name="description"
          content="AusPac is an independent marine surveying and maritime consultancy delivering high-level surveying, superintendence, audit, and casualty response services."
        />
      </Helmet>
 
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#0077B6' }}>
          About AusPac
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            AusPac is an independent marine surveying and maritime consultancy delivering high-level surveying, superintendence, audit, and casualty response services.
          </p>

          <p>
            We provide evidence-based, defensible reporting supported by regulatory expertise and commercial awareness.
          </p>

          <p>
            Our practice is built on discretion, procedural discipline, and technical accuracy. We understand that maritime operations operate at the intersection of compliance, commercial exposure, and reputational risk.
          </p>

          <p>
            We act as trusted technical advisors protecting operational, financial, and legal interests.
          </p>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default About;