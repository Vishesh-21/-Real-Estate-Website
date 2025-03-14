import { Home, Key, Building, Hammer, Users, Map } from "lucide-react";
import React from "react";

// data for services
const services = [
  {
    icon: <Home size={60}/>,
    title: "Sell Your Home",
    desc: "Get the best market price for your property with expert assistance.",
  },
  {
    icon: <Key size={60}/>,
    title: "Buy a Home",
    desc: "Find your dream home with our extensive property listings.",
  },
  {
    icon: <Building size={60}/>,
    title: "Rent a Property",
    desc: "Browse a variety of rental options that suit your budget and lifestyle.",
  },
  {
    icon: <Hammer size={60}/>,
    title: "Property Renovation",
    desc: "Upgrade and renovate your property with top-quality services.",
  },
  {
    icon: <Users size={60}/>,
    title: "Consultation Services",
    desc: "Get expert advice on buying, selling, and investing in real estate.",
  },
  {
    icon: <Map size={60}/>,
    title: "Property Valuation",
    desc: "Know the real worth of your property with accurate market analysis.",
  },
];

export const Services = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-200 to-white">
      <div className="max-w-6xl mx-auto px-10 flex gap-3 items-center ">
        <div className="space-y-4">

          <h1 className="text-3xl font-semibold uppercase">
            exclusive, committed, professional <br />
            services we can offer you
          </h1>

          {/* services cards  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service,index) => (
              <div key={index} className="p-6 flex flex-col items-center shadow-xl bg-white rounded-xl space-y-2">
                {service.icon}
                <h1 className="text-lg font-semibold uppercase">{service.title}</h1>
                <p className="text-muted-foreground text-center">{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
