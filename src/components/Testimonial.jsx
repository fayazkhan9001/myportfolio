import React from "react";
import ContactForm from "./ContactForm";
import CarouselTestimonial from "./Carousel/CarouselTestimonial";

const Clients = () => {
  const testArr = [
    {
      image: "Google",
    },
    {
      image: "dribble",
    },
    {
      image: "Amozon",
    },
    {
      image: "Linkedin",
    },
    {
      image: "Medium",
    },
    {
      image: "Spotify",
    },
  ];
  return (
    <div className="resContainer pt-3 sm:py-10 pb-34 relative">
      <div className="lg:max-w-4xl mx-auto">
        <div className="text-center relative ">
          <h1 className="text-2xl font-bold">Happy Clients</h1>
          <p className="py-4 text-sm text-lightGrey">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            fugiat enim similique <br /> necessitatibus dignissimos aspernatur.
          </p>
        </div>

        <div className="cardWrapper block md:flex md:flex-wrap md:justify-center md:items-center ">
          <ul className="text-center md:flex md:py-6">
            {testArr.map((card, idx) => (
              <li key={idx} className="p-2">
                {card.image}
              </li>
            ))}
          </ul>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Clients;

const Testimonial = () => {
  return (
    <div>
      <div className="text-center pt-8 pb-10 ">
        <h1 className="text-2xl font-bold">Testimonial</h1>
        <p className="py-6 text-sm text-lightGrey">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
          fugiat enim similique <br /> necessitatibus dignissimos aspernatur.
        </p>

        <div>
          <CarouselTestimonial />
        </div>
      </div>
    </div>
  );
};
