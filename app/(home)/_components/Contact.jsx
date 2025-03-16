import React from "react";

export const Contact = () => {
  return (
    <section className="w-full min-h-screen px-10 flex justify-center items-center">
      <div className="w-full p-18 bg-blue-200 rounded-lg">
        <div className="max-w-1/2 space-y-4 float-right">
          <h2 className="text-xl uppercase font-semibold text-blue-500">Let's grab coffee</h2>
          <h1 className="text-3xl font-semibold uppercase">
            get in touch with me to plan
            <br />
            your next real state
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            esse, aperiam veritatis ex facilis laboriosam rerum ipsa rem in
            sequi iusto dignissimos eum nam earum maiores repudiandae asperiores
            voluptas pariatur nesciunt. Molestias quaerat voluptate magni? Iure
            a tempore, obcaecati est .
          </p>
        </div>
      </div>
    </section>
  );
};
