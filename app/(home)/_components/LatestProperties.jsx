import React from "react";
import HomeImage from "@/public/home.jpg";
import Image from "next/image";
import { Bath, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data for flat listings
const flats = [
  {
    title: "Luxury Apartment",
    rent: 25000,
    description:
      "A spacious 3BHK apartment with modern amenities, located in the heart of the city.",
    bedroomNumbers: 3,
    bathroomNumbers: 2,
  },
  {
    title: "Cozy Studio Flat",
    rent: 12000,
    description:
      "A compact and fully furnished studio flat, perfect for bachelors or students.",
    bedroomNumbers: 1,
    bathroomNumbers: 1,
  },
  {
    title: "Family-Friendly Flat",
    rent: 18000,
    description:
      "A 2BHK flat in a peaceful neighborhood, ideal for families with kids.",
    bedroomNumbers: 2,
    bathroomNumbers: 2,
  },
];

export const LatestProperties = () => {
  return (
    <section className="w-full min-h-screen px-5 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto md:pl-20 pl-0 flex gap-0 items-center relative">
        {/* Vertical Text */}
        <div className="-rotate-90 absolute top-32 -left-14 hidden md:flex items-center gap-3">
          <div className="h-[1.5px] w-[60px] rounded bg-black"></div>
          <h2 className="uppercase font-semibold tracking-[2px]">Properties</h2>
        </div>

        {/* Properties Section */}
        <div className="md:space-y-4 space-y-2 py-10 w-full">

          <h1 className="text-2xl md:text-3xl font-semibold uppercase text-center md:text-left">
            Explore the latest properties <br className="hidden md:block" />
            and select your home
          </h1>

          {/* Properties Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0">
            {flats.map((flat, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <Image
                  src={HomeImage}
                  width={350}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover"
                  alt="home_image"
                />
                <div className="p-4 space-y-2">
                  <h1 className="text-xl font-semibold">{flat.title}</h1>
                  <h3 className="text-lg font-semibold text-blue-600">
                    ${flat.rent} / month
                  </h3>
                  <p className="text-sm text-gray-600">{flat.description}</p>

                  <div className="flex text-sm gap-4 mt-2">
                    <h1 className="flex items-center gap-1">
                      <Bed size={18} />
                      {flat.bedroomNumbers} Bedroom
                    </h1>
                    <h1 className="flex items-center gap-1">
                      <Bath size={18} />
                      {flat.bathroomNumbers} Bathroom
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-6">
            <Button className="bg-blue-500 hover:bg-blue-600 transition-all duration-200">
              Load more listings
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
