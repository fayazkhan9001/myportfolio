import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b border-gray-300 py-2">
      <div className="flex items-center justify-between lg:max-w-5xl lg:mx-auto md:max-full md:px-[8%] flex-wrap w-full">
        <div className="flex">
          <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold">
            F
          </span>
          <p>Fayaz</p>
        </div>
        <FiMenu
          className="h-6 w-6 md:hidden block cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto md:px-[5%] w-full`}
        >
          <ul className="md:flex md:justify-between text-base text-gray-600">
            <li>
              <a
                className="md:px-5 block py-2 hover:text-blue-700 font-semibold"
                href=""
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="md:px-5 block py-2 hover:text-blue-700 font-semibold"
                href=""
              >
                About
              </a>
            </li>
            <li>
              <a
                className="md:px-5 block py-2 hover:text-blue-700 font-semibold"
                href=""
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="md:px-5 block py-2 hover:text-blue-700 font-semibold"
                href=""
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="md:px-5 block py-2 bg-blue-700 text-white rounded-xl"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
