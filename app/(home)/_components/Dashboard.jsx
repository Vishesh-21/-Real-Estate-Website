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
        <Image
          src={HomeImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="absolute w-full z-20 text-white flex justify-center items-center h-full">
        <div className="max-w-4xl text-center space-y-6">

            <h1 className="text-5xl font-semibold uppercase">Find your dream house</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa, nobis, illum deserunt quisquam mollitia saepe harum voluptates nisi veniam atque porro assumenda voluptatum labore fuga odit veritatis culpa? Itaque!</p>


            {/* button of the dashboard component  */}
            <div className="space-x-10">
                <Button className={'cursor-pointer px-20 border-[2px]'} variant={'ghost'}>Button 1</Button>
                <Button className={'cursor-pointer px-20 border-[2px]'} variant={'ghost'}>Button 1</Button>
            </div>

            {/* search box  */}
            <div className="bg-gray-300 text-center max-w-2xl mx-auto p-3 rounded-lg gap-2 flex">
                <Input placeholder="Enter an address, city or neighborhood" className={'bg-white text-black'}/>
                <Button className={'px-4 bg-blue-500 uppercase'} >Search Listings</Button>
            </div>
        </div>
      </div>
    </section>
  );
};
