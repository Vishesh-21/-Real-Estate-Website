import Image from "next/image";
import React from "react";
import modelImage from "@/public/modelImage.jpg";

export const About = () => {
  return (
    <section className="w-full min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-6xl py-5 px-4 flex items-center md:gap-20 gap-6 flex-col md:flex-row">
        {/* Image */}
        <div className="w-full max-w-[350px] flex justify-center">
          <Image
            src={modelImage}
            alt="Model"
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:space-y-5 space-y-3 text-center md:text-left">
          <h1 className="md:text-3xl text-2xl font-bold uppercase">
            Meet Krystelle Romy
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-justify md:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            culpa reprehenderit nobis quod non exercitationem cum inventore quia
            minima optio, illum ad! Sint laboriosam, architecto, consequatur quasi
            cumque culpa repudiandae magni sed ratione pariatur voluptate,<br /><br /> harum
            voluptates dolores accusamus suscipit nihil ducimus ullam est minus
            cupiditate sequi error quae beatae. Reiciendis molestias quos
            repudiandae possimus id dolores, nemo consequuntur minus numquam ex,
            temporibus totam delectus nostrum earum inventore, non ut ea quasi et.
            Recusandae a reiciendis culpa quo excepturi rem optio deleniti in non
            delectus, distinctio, et id minima? <br /> Nam similique nisi cumque incidunt
            quaerat ratione quibusdam consequuntur maxime optio.
          </p>
        </div>
      </div>
    </section>
  );
};
