import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="w-full min-h-screen px-10 flex justify-center items-center">
      <div className="w-full h-[450px] grid md:grid-cols-2 items-center gap-10 px-20 py-10 bg-blue-200 rounded-lg">
        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Send a message today</h3>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <Input type="text" placeholder="John Doe" required />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <Input type="tel" placeholder="+1 (234) 567-890" required />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="johndoe@placeholder.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea placeholder="Message in 100-150 words" rows="4" />
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              SEND EMAIL
            </Button>
          </form>
        </div>

        {/* contact info */}
        <div className="hidden md:block space-y-4 float-right">
          <h2 className="text-xl uppercase font-semibold text-blue-500">
            Let's grab coffee
          </h2>
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
