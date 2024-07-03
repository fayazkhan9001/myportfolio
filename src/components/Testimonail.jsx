import React from "react";
import ContactForm from "./ContactForm";

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
    <div className="py-10 relative">
      <div className="lg:max-w-4xl mx-auto md:w-full h-[1800px] md:h-[1100px]">
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
        <Testimonail />
        <ContactForm />
      </div>
    </div>
  );
};

export default Clients;

const Testimonail = () => {
  return (
    <div>
      <div className="text-center py-8 ">
        <h1 className="text-2xl font-bold">Testimonial</h1>
        <p className="py-4 text-sm text-lightGrey">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
          fugiat enim similique <br /> necessitatibus dignissimos aspernatur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eaque, quam ipsa reiciendis quibusdam voluptates odio magni quod et a
          corrupti provident autem facere, fugiat dolorum. Ex minima placeat
          odit ipsa. Obcaecati voluptatem eos minima molestiae dolorum itaque
          quod modi!
        </p>
      </div>
    </div>
  );
};
