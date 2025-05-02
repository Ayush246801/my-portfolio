import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lpax32i", "template_1aon56h", form.current, {
        publicKey: "IC_od0RU4aFLCo1sW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success("Sent successfully!")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col lg:px-1 lg:max-w-[1024px] mx-auto px-5">
      <h1 className="text-4xl text-center text-[#58A6FF] font-bold mb-5">
        CONTACT ME
      </h1>

      {/* Container with fixed height on large screens */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:h-[500px]">
        {/* Left: Get in Touch Box */}
        <div className="flex-1 bg-[#161B22] rounded-md flex flex-col justify-center items-center p-10 h-full">
          <h2 className="text-gray-300 font-medium text-2xl mb-10">
            Get in touch
          </h2>
          <div className="text-gray-300 flex gap-3 items-center mb-3">
            <FaPhoneAlt />
            <p>+977 9807337368</p>
          </div>
          <div className="text-gray-300 flex gap-3 items-center">
            <MdEmail />
            <p>shresthaaayush863@gmail.com</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 h-full">
          <form onSubmit={sendEmail}
            ref={form}
            className="bg-[#161B22] rounded-md p-6 flex flex-col gap-4 h-full justify-center"
          >
            <div className="text-gray-300 flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#58A6FF] bg-transparent text-white"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your name"
                required
              />
            </div>
            <div className="text-gray-300 flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#58A6FF] bg-transparent text-white"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Your email"
                required
              />
            </div>
            <div className="text-gray-300 flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                className="border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#58A6FF] bg-transparent text-white"
                name="message"
                id="message"
                rows="5"
                autoComplete="off"
                placeholder="Your message"
                required
              />
            </div>
            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="bg-[#58A6FF] text-white px-6 py-2 cursor-pointer rounded-md hover:bg-[#6490ca] transition duration-200"
              >
                Submit
              </button>
            </div>
            <ToastContainer position="top-center" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
