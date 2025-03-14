import React from "react";
import HomeImage from "@/public/home.jpg";
import Image from "next/image";
import { Bath, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";

//data for flat
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
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-10 flex gap-3 items-center ">
        {/* vertical text 
        <div className="-rotate-90 flex items-center gap-3">
          <div className="h-[1.5px] w-[60px] rounded bg-black"></div>
          <h2 className="uppercase font-semibold tracking-[2px]">Properties</h2>
        </div> */}

        {/* properties section  */}
        <div>
          <h1 className="text-3xl font-semibold uppercase">
            explore the latest properties <br />
            and select your home
          </h1>

          {/* properties cards  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flats.map((flat, index) => {
              return (
                <div
                  className="rounded-xl overflow-hidden shadow-lg"
                  key={index}
                >
                  <Image src={HomeImage} className="w-full h-52" />
                  <div className="p-4 space-y-2">
                    <h1 className="text-xl font-semibold">{flat.title}</h1>
                    <h3 className="text-xl font-semibold">${flat.rent}</h3>
                    <p className="text-sm">{flat.description}</p>

                    <div className="flex text-sm gap-4">
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
              );
            })}
          </div>
        </div>
      </div>

      <Button className={'bg-blue-500 mt-10 cursor-pointer'}>Load more listings</Button>
    </section>
  );
};
