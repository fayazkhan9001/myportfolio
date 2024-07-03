import React from "react";

const UserInfo = () => {
  const infoCardArray = [
    {
      title: "User Experience (UX)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. ",
    },
    {
      title: "User Interface (UI)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="block md:flex justify-between items-center lg:max-w-4xl lg:mx-auto md:max-full py-12">
        <div className="w-full md:w-[40%] text-center md:text-start p-4">
          <h1 className="text-2xl font-bold">What i do?</h1>
          <p className="text-sm text-lightGrey py-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laudantium provident minus, ullam ea velit labore, exercitationem,
            ut veniam facere sed blanditiis. Esse odio iusto doloribus, quam
            culpa inventore asperiores?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            officia?
          </p>
          <button className="bg-primary px-4 py-2 my-2 rounded-md font-semibold text-white">
            Say Hello!
          </button>
        </div>
        <div className="w-full md:w-[50%]">
          {infoCardArray.map((card, idx) => (
            <div
              key={idx}
              className="border-primary m-4 hover:border-l-2 bg-white rounded-md p-4 cursor-pointer"
            >
              <h1 className="text-lg font-semibold">{card.title}</h1>
              <p className="text-sm text-lightGrey pt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
