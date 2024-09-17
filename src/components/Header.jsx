import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="resContainer border-b border-gray-300 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white font-bold">
            F
          </span>
          <p className="text-xl font-extrabold">Fayaz</p>
        </div>
        <FiMenu
          className="h-6 w-6 md:hidden block cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto  w-full`}
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
                className="md:px-5 block py-2 bg-primary text-white rounded-xl"
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
