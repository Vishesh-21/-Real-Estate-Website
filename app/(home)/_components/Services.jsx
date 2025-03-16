import { Home, Key, Building, Hammer, Users, Map } from "lucide-react";
import React from "react";

// Data for services
const services = [
  {
    icon: (
      <Home className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
    ),
    title: "Sell Your Home",
    desc: "Get the best market price for your property with expert assistance.",
  },
  {
    icon: (
      <Key className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
    ),
    title: "Buy a Home",
    desc: "Find your dream home with our extensive property listings.",
  },
  {
    icon: (
      <Building className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
    ),
    title: "Rent a Property",
    desc: "Browse a variety of rental options that suit your budget and lifestyle.",
  },
  {
    icon: (
      <Hammer className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
    ),
    title: "Property Renovation",
    desc: "Upgrade and renovate your property with top-quality services.",
  },
  {
    icon: (
      <Users className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
    ),
    title: "Consultation Services",
    desc: "Get expert advice on buying, selling, and investing in real estate.",
  },
  {
    icon: (
      <Map className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
    ),
    title: "Property Valuation",
    desc: "Know the real worth of your property with accurate market analysis.",
  },
];

export const Services = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-200 to-white p-6 relative">
      <div className="max-w-6xl mx-auto md:pl-20 pl-0 flex gap-0 items-center relative">
        {/* Vertical Text */}
        <div className="-rotate-90 absolute top-18 -left-9 hidden md:flex items-center gap-3">
          <div className="h-[1.5px] w-[60px] rounded bg-black"></div>
          <h2 className="uppercase font-semibold tracking-[2px]">Services</h2>
        </div>

        <div className="w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl text-center md:text-left md:text-3xl font-semibold uppercase leading-tight">
              Exclusive, Committed, Professional <br /> Services We Offer
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-4 md:p-6 space-y-3 transition-transform hover:scale-105"
              >
                {service.icon}
                <h2 className="text-lg font-semibold uppercase">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
