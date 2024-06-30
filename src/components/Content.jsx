import React from "react";
import { FiActivity } from "react-icons/fi";
import { SlNotebook } from "react-icons/sl";
import { TiDeviceLaptop } from "react-icons/ti";
import { FaPencilAlt } from "react-icons/fa";
const Content = () => {
  return (
    <div className="content">
      <div className="block text-center md:text-start md:flex justify-between items-center contentParent my-10 py-20 lg:max-w-4xl lg:mx-auto md:max-full">
        <div className="w-full md:w-[40%]">
          <h1 className="text-2xl font-bold py-4">Work Process</h1>
          <p className="text-sm text-lightGrey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis,
            placeat velit distinctio quasi id deleniti odit, optio repellendus
            delectus eveniet sapiente dolores
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            accusamus molestiae illo. At maxime quis perferendis facere magnam.
            Deleniti?
          </p>
        </div>

        <div className="contentCardParent w-full md:w-[50%] block md:flex ">
          <div className="cardWrapper mt-8">
            <div className="card mb-4">
              <div className="cardIcon">
                <SlNotebook />
              </div>
              <h5>1. Research</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, molestiae.
              </p>
            </div>
            <div className="card">
              <div className="cardIcon">
                <FiActivity />
              </div>
              <h5>2. Analyze</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
                accusamus!
              </p>
            </div>
          </div>
          <div className="cardWrapper pt-1 md:pt-4">
            <div className="card">
              <div className="cardIcon">
                <FaPencilAlt />
              </div>
              <h5>3. Design</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quos.
              </p>
            </div>
            <div className="card mt-4">
              <div className="cardIcon">
                <TiDeviceLaptop />
              </div>
              <h5>4. Launch</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
