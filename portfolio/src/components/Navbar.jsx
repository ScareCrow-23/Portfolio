import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/60 backdrop-blur-md border-b border-white/10 shadow-md px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center text-2xl font-extrabold">
        <Title
          text1="Port"
          text2="folio."
          color1="text-[#f1f1f1]"
          color2="text-[#ff5f5f]"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li>
          <Link
            to="/"
            className="text-[#f1f1f1] hover:text-[#ff5f5f] transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-[#f1f1f1] hover:text-[#00d2ff] transition-colors duration-300"
          >
            Projects
          </Link>
        </li>
      </ul>

      {/* Call to Action */}
      <Link
        to="/contact"
        className="hidden md:inline-block text-sm px-4 py-2 bg-[#ff5f5f] text-white rounded-md hover:bg-[#ff3b3b] transition duration-300 font-semibold"
      >
        Hire Me
      </Link>

      {/* For Mobile: You can add a hamburger menu here later */}
    </nav>
  );
};

export default Navbar;
