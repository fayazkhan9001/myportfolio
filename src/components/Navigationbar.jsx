import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    {
      menu: "Home",
    },
    {
      menu: "About",
    },
    {
      menu: "Service",
    },
    {
      menu: "Blog",
    },
    {
      menu: "Contact",
    },
    {
      menu: "Login",
    },
  ];
  return (
    <div>
      <header className="border-b border-gray-500 py-2">
        <div className="flex items-center justify-between lg:max-w-5xl lg:mx-auto md:max-full md:px-[8%] flex-wrap w-full">
          <div>
            <span>F</span>
            <span>Fayaz</span>
          </div>
          <FiMenu
            className="w-8 h-8 md:hidden block cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "md:block" : "hidden"
            }  lg:flex md:block w-full`}
          >
            <ul className="md:flex md:justify-between block">
              {menus.map((menu, idx) => (
                <li key={idx} className="px-5 py-2">
                  {menu.menu}
                </li>
              ))}
            </ul>

            {/* <ul className="md:flex md:justify-between block">
              <li>
                <a className="mx-5 block py-2" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="mx-5 block py-2" href="">
                  About
                </a>
              </li>
              <li>
                <a className="mx-5 block py-2" href="">
                  Contact
                </a>
              </li>
              <li>
                <a className="mx-5 block py-2" href="">
                  Service
                </a>
              </li>
              <li>
                <a className="mx-5 block py-2" href="">
                  Login
                </a>
              </li>
            </ul> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigationbar;
