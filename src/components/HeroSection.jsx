import React from "react";
import fayazimg from "../assets/images/fayazimg.jpg";
import HeroCard from "../components/HeroCard";

const HeroSection = () => {
  const arr = [
    {
      number: "6 M.",
      description: "Experience",
    },
    {
      number: 4,
      description: "Project Completed",
    },
    {
      number: 3,
      description: "Happy Client",
    },
  ];
  return (
    <div className="w-full md:h-[700px] border-4">
      <div className="block md:flex  md:items-center md:justify-between lg:max-w-4xl lg:mx-auto h-auto md:max-full py-5 ">
        <div className="md:w-[60%] text-center md:text-start w-full ">
          <h1 className="text-4xl font-bold">
            Hello, I'm <br /> Muhammad Fayaz
          </h1>
          <p className="py-3">
            React Front-End Developer Welcome to my portfolio! I am a passionate
            and dedicated React Front-End Developer with a keen eye for detail
            and a commitment to creating exceptional user experiences.
          </p>
          <button className="bg-primary px-4 py-2 my-2 rounded-md font-semibold text-white">
            Say Hello!
          </button>
          <div className="flex justify-center md:justify-start">
            <div className="flex text-center gap-x-0.5 mt-6">
              <div className="flex">
                {arr.map((c, idx) => (
                  <div
                    key={idx}
                    className=" items-center md:w-30 py-2 px-6 bg-secondry me-[2px]"
                  >
                    <h1 className="font-bold text-xl">{c.number}</h1>
                    <p className="text-sm text-lightGrey">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-[300px] mx-auto md:mx-0 my-10">
          <img
            className="hidden md:block w-[100%] md:h-[300px] md:shrink-0 rounded-xl"
            src={fayazimg}
            alt=""
          />
        </div>
      </div>
      <HeroCard />
    </div>
  );
};

export default HeroSection;
