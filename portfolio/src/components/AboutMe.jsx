import React from "react";
import profileImage from "../assets/Profile-plain.png"; // Replace with your image path

const AboutMe = () => {
  return (
    <section className="w-full bg-[#0f0f0f] text-[#f1f1f1] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image Section */}
        <div className="flex justify-center relative">
          {/* Glowing Circle Behind */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-white opacity-10 rounded-full blur-[100px] z-0"></div>

          {/* Profile Image */}
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-lg border-4 border-[#ff5f5f] z-10">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="backdrop-blur-md bg-white/5 p-5 sm:p-6 md:p-8 rounded-lg shadow-md border border-white/10 z-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ff5f5f] mb-4">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed">
            Hey! I'm a{" "}
            <span className="text-[#00d2ff]">Full-Stack MERN Developer</span>{" "}
            who’s also into{" "}
            <span className="text-[#00d2ff]">Digital Marketing</span>, and
            lately, I’ve been diving into{" "}
            <span className="text-[#00d2ff]">Cyber Security</span>. I enjoy
            building cool web apps, putting together smart marketing ideas, and
            digging into security stuff — basically anything that’s hands-on and
            makes a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
