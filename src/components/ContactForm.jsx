import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import {
  FiDownload,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const contactArr = [
  {
    icon: <IoLocationOutline />,
    label: "Address:",
    text: "Peshawar 25000",
  },
  {
    icon: <IoLocationOutline />,
    label: "My Email:",
    text: "myemail@gmail.com",
  },
  {
    icon: <IoLocationOutline />,
    label: "Call Me Now:",
    text: "00-1234 0000",
  },
];

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        location: "",
        budget: "",
        subject: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, "must be 15 character or less")
          .min(4, "name must be 4 character")
          .required("required"),
        email: Yup.string()
          .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please provide a valid email"
          )
          .required("email is required"),

        message: Yup.string().required(),
      }),
      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div className="border-2 p-10 md:p-14 lg:w-[900px] rounded-xl shadow-lg absolute bottom-[-60px] md:bottom-[-40px] left-50 bg-white box-border">
      <div className="block md:flex justify-between ">
        <div className="formWrapper w-full md:w-[40%]">
          <div>
            <h1 className="text-2xl font-bold">Let's discuss your Project</h1>
            <p className="text-sm text-lightGrey py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              iure amet at soluta voluptatem asperiores tempora quia facere{" "}
            </p>
          </div>
          <div className="flex flex-col">
            {contactArr.map((data, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-x-2 p-4 hover:shadow-lg"
              >
                <div className="text-2xl bg-secondry text-pretty group-hover:bg-primary group-hover:text-whiten p-[4px] rounded-sm group-hover:text-white">
                  {data.icon}
                </div>
                <div>
                  <label className="text-sm text-lightGrey">{data.label}</label>
                  <p className="text-sm">{data.text}</p>
                </div>
              </div>
            ))}

            <div className="flex mt-8">
              <SocialLink />
            </div>
          </div>
        </div>
        <div className="formWrapper block md:w-[50%]">
          <p className="text-sm text-lightGrey py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            quis nobis ?
          </p>

          <form action="" className="py-2" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="w-full testimonialField p-2 outline-none border-b-[2px] border-slate-400 hover:border-primary hover:placeholder:text-primary bg-transparent my-2"
            />
            <label htmlFor="name" style={{ color: "red" }}>
              {touched.name && errors.name ? errors.name : null}
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email*"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full p-2 outline-none border-b-[2px] border-slate-400 hover:border-primary hover:placeholder:text-primary bg-transparent my-2"
            />
            <label htmlFor="email" style={{ color: "red" }}>
              {touched.email && errors.email ? errors.email : null}
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location*"
              value={values.location}
              onChange={handleChange}
              className="w-full p-2 outline-none border-b-[2px] border-slate-400 hover:border-primary hover:placeholder:text-primary bg-transparent my-2"
            />

            <div>
              <input
                type="text"
                name="budget"
                placeholder="Budget*"
                value={values.budget}
                onChange={handleChange}
                className="w-[30%] p-2 outline-none border-b-[2px] border-slate-400 hover:border-primary hover:placeholder:text-primary bg-transparent my-2"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={values.subject}
                onChange={handleChange}
                className="w-[60%] ml-7 p-2 outline-none border-b-[2px] border-slate-400 hover:border-primary hover:placeholder:text-primary bg-transparent my-2"
              />
            </div>
            <input
              type="text"
              name="message"
              placeholder="Message*"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-2 outline-none border-b-[2px] border-slate-400 hover:border-primary hover:placeholder:text-primary bg-transparent my-2  "
            />
            <label htmlFor="message" style={{ color: "red" }}>
              {touched.message && errors.message ? errors.message : null}
            </label>
            <button
              type="submit"
              className="flex items-center gap-3 bg-primary text-white text-md px-4 py-2 rounded-md mt-8"
            >
              <span>Submit </span> <VscSend className="text-lg font-bold" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const SocialLink = () => {
  const links = [
    {
      link: <FiFacebook />,
    },
    {
      link: <FiMail />,
    },
    {
      link: <FiLinkedin />,
    },
    {
      link: <FiGithub />,
    },
  ];
  return (
    <div className=" ">
      <div className="flex gap-5 p-2 text-primary">
        {links.map((link, idx) => (
          <div
            key={idx}
            className="text-xl cursor-pointer hover:bg-primary hover:text-white p-2 rounded-sm"
          >
            {link.link}
          </div>
        ))}
      </div>
    </div>
  );
};
