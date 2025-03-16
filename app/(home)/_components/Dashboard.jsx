import Image from "next/image";
import React from "react";
import HomeImage from "@/public/home.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Dashboard = () => {
  return (
    <section className="w-full h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={HomeImage} alt="Background" fill className="object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-[4] bg-black/40"></div>

      <div className="absolute w-full z-20 px-5 md:px-0 text-white flex justify-center items-center h-screen">
        <div className="max-w-4xl text-center md:space-y-6 space-y-3">
          <h1 className="md:text-5xl text-3xl font-semibold uppercase">
            Find your dream house
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa, nobis, illum deserunt quisquam mollitia saepe harum voluptates nisi veniam atque porro assumenda voluptatum labore fuga odit veritatis culpa? Itaque!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mt-4">
            <Button className="cursor-pointer md:px-20 px-8 border-[2px]" variant="ghost">
              Explore Homes
            </Button>
            <Button className="cursor-pointer md:px-20 px-8 border-[2px]" variant="ghost">
              Get Started
            </Button>
          </div>

          {/* Search Box */}
          <div className="bg-gray-300 mt-8 text-center max-w-2xl mx-auto md:p-3 p-2 rounded-lg flex gap-2">
            <Input
              placeholder="Enter an address, city or neighborhood"
              className="bg-white text-black text-sm md:text-base w-full"
            />
            <Button className="px-4 text-sm bg-blue-500 uppercase cursor-pointer">
              Search 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
