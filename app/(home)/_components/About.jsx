import Image from "next/image";
import React from "react";
import modelImage from "@/public/modelImage.jpg";

export const About = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="max-w-6xl flex items-center gap-20">
        <Image
          src={modelImage}
          className="object-contain w-[350px] h-[400px] "
        />
        <div className="space-y-5">
            <h1 className="text-3xl font-bold uppercase">Meet krystelle romy</h1>
          <p className="w-full md:max-w-2xl text-md text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            culpa reprehenderit nobis quod non exercitationem cum inventore quia
            minima optio, illum ad! Sint laboriosam, architecto, <br/> <br /> consequatur
            quasi cumque culpa repudiandae magni sed ratione pariatur voluptate,
            harum voluptates dolores accusamus suscipit nihil ducimus ullam est
            minus cupiditate sequi error quae beatae. Reiciendis molestias quos
            repudiandae possimus id dolores, nemo consequuntur minus numquam ex,
            temporibus totam delectus nostrum earum inventore, non ut ea quasi
            et. Recusandae a reiciendis culpa quo excepturi rem optio deleniti
            in non delectus, distinctio, et id minima? Nam similique nisi cumque
            incidunt quaerat ratione quibusdam consequuntur maxime optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni.
          </p>
        </div>
      </div>
    </section>
  );
};
