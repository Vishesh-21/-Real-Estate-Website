import { Button } from "@/components/ui/button";
import React from "react";

const newsData = [
  {
    title: "Top 10 best appreciating condos in Las Vegas",
    image: "/estate.jpg", // Just use the relative path
  },
  {
    title: "The top 5 most livable Las Vegas neighborhood",
    image: "/estate2.jpg",
  },
  {
    title: "In Las Vegas home prices have doubled in the...",
    image: "/estate3.jpg",
  },
  {
    title: "Las Vegas neighborhood where it's better...",
    image: "/estate4.jpg",
  },
];

const RecentEstate = () => {
  return (
    <section className="py-10 min-h-screen px-10 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          THE MOST RECENT <br /> LOCAL REAL ESTATE NEWS
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="shadow-lg md:h-[400px] h-[250px] rounded-lg overflow-hidden bg-cover relative bg-center"
              style={{ backgroundImage: `url(${news.image})` }}
            >
              <div className="absolute w-full h-full bg-black/40 flex p-4 flex-col items-start justify-end">
                <h3 className="text-white font-semibold">{news.title}</h3>
                <Button
                  variant="link"
                  className="mt-2 cursor-pointer px-0 text-white/70"
                >
                  Continue reading &gt;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEstate;

{
  /* <Card key={index} className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${news.image})` }}
            ></div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <Button variant="link" className="mt-2 text-blue-600">
                Continue reading &gt;
              </Button>
            </CardContent>
          </Card> */
}
