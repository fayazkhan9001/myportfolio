// eslint-disable-next-line no-unused-vars
import React from "react";
import fayazimg from "../assets/images/fayazimg.jpg";
import HeroCard from "../components/HeroCard";

const HeroSection = () => {
  const arr = [
    {
      number: "6",
      detail: ".months",
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
    <div className=" bg-white bg-gradient-to-bl from-purple-100 via-slate-50 to-amber-50 lg:pt-20 md:pb-80">
      <div className="resContainer">
        <div className="block md:flex gap-x-5 relative md:items-center md:justify-between py-5 ">
          <div className="md:w-[60%] text-center md:text-start w-full ">
            <h1 className="text-4xl font-bold">
              Hello,{" I'm"} <br /> Muhammad Fayaz
            </h1>
            <p className="py-3">
              React Front-End Developer Welcome to my portfolio! I am a
              passionate and dedicated React Front-End Developer with a keen eye
              for detail and a commitment to creating exceptional user
              experiences.
            </p>
            <button className="bg-primary px-4 py-2 my-2 rounded-md font-semibold text-white">
              Say Hello!
            </button>
            <div className="hidden sm:flex justify-center md:justify-start">
              <div className="flex text-center gap-x-0.5 mt-6">
                <div className="flex">
                  {arr.map((c, idx) => {
                    console.log("idx", idx);
                    return (
                      <div
                        key={idx}
                        className={`
                        ${
                          idx === 0
                            ? "rounded-s-lg"
                            : idx === 2
                            ? "rounded-r-lg"
                            : ""
                        } items-center md:w-30 py-2 px-6 bg-secondry me-[2px]`}
                      >
                        <div className="flex items-end justify-center">
                          <h1 className="font-bold text-xl">{c.number}</h1>
                          <span className="text-[12px]">{c.detail}</span>
                        </div>
                        <p className="text-sm text-lightGrey">
                          {c.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="hidden md:block w-[100%] md:h-[300px] md:shrink-0 rounded-xl"
              src={fayazimg}
              alt=""
            />
          </div>
        </div>
        <div className="md:relative flex justify-center md:top-20 mt-6 sm:mt-10 md:mt-0">
          <HeroCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
