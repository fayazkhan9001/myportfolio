import React from "react";

const Footer = () => {
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
      menu: "Process",
    },
    {
      menu: "Portfolio",
    },
    {
      menu: "Blog",
    },
    {
      menu: "Contact",
    },
  ];
  return (
    <div className="bg-[#132238] text-white py-8">
      <div className=" md:flex justify-between items-end lg:max-w-4xl mx-auto md:w-full pt-[80px]">
        <div className="flex justify-center">
          <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white font-bold">
            F
          </span>
          <p className="text-xl font-extrabold">Fayaz</p>
        </div>
        <div>
          <ul className="block md:flex md:items-center text-center  md:my-0">
            {menus.map((menu, idx) => (
              <li key={idx} className="mx-2 my-4 md:my-0">
                {menu.menu}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <p>Copyright 2024 Abc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
