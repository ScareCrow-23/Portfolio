import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-6 px-4 flex flex-col md:flex-row items-center justify-between text-[#f1f1f1]">
      <p className="text-sm text-center md:text-left">
        © {new Date().getFullYear()} Saumil Dhumal. All rights reserved.
      </p>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="www.linkedin.com/in/saumil-dhumal-929248263"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00d2ff] transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/ScareCrow-23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff5f5f] transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:dhumalsaumil@gmail.com"
          className="hover:text-[#ffae00] transition"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
