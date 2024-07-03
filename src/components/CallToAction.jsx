import React from "react";
import { FiArrowRight } from "react-icons/fi";
const CallToAction = () => {
  return (
    <div className="flex justify-center items-center bg-[#132238]">
      <div className="text-center text-white p-12">
        <h1 className="text-xl md:text-3xl font-bold ">
          Do you have Project Idia?
          <br />
          Let's discuss your project!
        </h1>
        <p className="text-[12px] text-slate-300 py-4">
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered alteration.
        </p>
        <div>
          <div>
            <button className="flex items-center mx-auto  bg-primary text-white px-4 py-2">
              <span className="me-3 text-sm">Let’s work Together</span>
              <FiArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
