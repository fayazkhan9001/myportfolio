import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Portfolio = () => {
  const cardArray = [
    {
      image: "unsplash1.png",
      tool: "UI-UX DESIGN",
      component: "Product Admin Dashboard",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "unsplash3.png",
      tool: "UI-UX DESIGN",
      component: "Product Admin Dashboard",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "unsplash12.png",
      tool: "UI-UX DESIGN",
      component: "Product Admin Dashboard",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "unsplash5.png",
      tool: "UI-UX DESIGN",
      component: "Product Admin Dashboard",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "unsplash55.png",
      tool: "UI-UX DESIGN",
      component: "Product Admin Dashboard",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "unsplash.png",
      tool: "UI-UX DESIGN",
      component: "Product Admin Dashboard",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="lg:max-w-4xl mx-auto  py-14">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p className="py-4 text-sm text-lightGrey">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            fugiat enim similique <br /> necessitatibus dignissimos aspernatur.
          </p>
        </div>
        <div className="cardWrapper w-[100%] block md:flex md:flex-wrap md:justify-center md:items-center">
          {cardArray.map((card, idx) => (
            <Card card={card} key={idx} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="border-[1px] border-primary rounded-sm bg-primary text-white px-6 py-2">
            More Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const Card = ({ card }) => {
  return (
    <div>
      <div className="w-[250px] mx-auto md:m-1 border-[1px] rounded-md mt-4 ">
        <div className="cardImg">
          <img src={card.image} alt="" />
        </div>
        <div className="cardDescription p-4">
          <p className="text-[12px] text-lightGrey">{card.tool}</p>
          <h1 className="text-[12px] text-lightGrey font-bold">
            {card.component}
          </h1>
          <p className="text-[12px] text-lightGrey py-2">{card.description}</p>
          <button className="flex items-center border-[1px] px-4 py-2 border-primary text-primary rounded-sm font-semibold gap-x-2">
            <span>Case Study</span> <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
