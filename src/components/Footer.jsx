import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] mt-4 text-gray-400 text-sm py-6 border-t border-[#21262D]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-[#58A6FF] font-semibold">Aayush Shrestha</span>. All rights reserved.
        </p>

        <div className="mt-3 md:mt-0 flex gap-4">
          <a href="https://www.facebook.com/aayush.stha.422231" target="_blank" className="hover:text-[#58A6FF] transition">
          <FaFacebook className="text-[23px]" />
          </a>
          <a href="https://www.instagram.com/ayush_sresta" target="_blank" className="hover:text-[#58A6FF] transition">
          <FaSquareInstagram className="text-[23px] rounded-4xl" />

          </a>
          <a href="https://github.com/Ayush246801" target="_blank" className="hover:text-[#58A6FF] transition">
          <FaGithub className="text-[23px]" />

          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
