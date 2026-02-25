import React, { memo, useMemo, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const placeholderBlur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNjYiIGZpbGw9IiNkZDhkOGQiLz48L3N2Zz4=";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(placeholderBlur);

  useEffect(() => {
    // Swap to real hero image after mount
    setBgImage("/image/herosection3.jpg"); 
  }, []);

  const style = useMemo(
    () => ({
      height: "80vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 0.5s ease-in-out",
    }),
    [bgImage]
  );

  return (
    <>
      <Helmet>
        <title>AusPac Marine Surveying & Maritime Risk Advisory</title>
        <meta
          name="description"
          content="Trusted marine surveying, casualty response, and maritime risk advisory across Australia, the Pacific region, and international trade routes."
        />
        <meta
          property="og:title"
          content="AusPac Marine Surveying & Maritime Risk Advisory"
        />
        <meta
          property="og:description"
          content="Independent, technical, and commercially aware marine surveying and maritime risk advisory services across Australia, the Pacific, and international shipping."
        />
      </Helmet>

      <section role="banner" className="relative w-full" style={style}>
        <span className="sr-only">
          Hero image depicting marine surveying at sea
        </span>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="font-extrabold leading-tight animate-fadeIn">
            <span className="block text-4xl md:text-5xl lg:text-6xl">
              AusPac Marine
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2">
              Surveying & Maritime Risk Advisory
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium animate-fadeIn delay-200">
            Independent. Technical. Commercially Aware.
          </p>

          <p className="mt-2 text-base md:text-lg max-w-2xl animate-fadeIn delay-400">
            Trusted marine surveying, casualty response, and maritime risk advisory across Australia, the Pacific region, and international trade routes.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-600">
            <a
              href="/services"
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
            >
              Expore our services
            </a>
            <a
              href="/contact"
              className="bg-white text-indigo-700 hover:bg-gray-100 transition-colors duration-300 font-semibold py-3 px-6 rounded-full shadow-lg"
            >
              Contact AusPac
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(HeroSection);