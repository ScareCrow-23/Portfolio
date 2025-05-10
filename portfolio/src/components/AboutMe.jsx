import React from "react";
import profileImage from "../assets/Profile-plain.png"; // Replace with your image path

const AboutMe = () => {
  return (
    <section className="w-full h-[75vh] bg-[#0f0f0f] text-[#f1f1f1] flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image Section */}
        <div className="flex justify-center relative">
          {/* Glowing Circle Behind */}
          <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full blur-[100px] z-0"></div>
          {/* Profile Image */}
          <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-[#ff5f5f] z-10">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="backdrop-blur-md bg-white/5 p-6 rounded-lg shadow-md border border-white/10 z-10">
          <h2 className="text-3xl font-bold text-[#ff5f5f] mb-3">About Me</h2>
          <p className="text-[#cccccc] leading-relaxed">
            Hey! I'm a{" "}
            <span className="text-[#00d2ff]">Full-Stack MERN Developer</span>{" "}
            who’s also into{" "}
            <span className="text-[#00d2ff]">Digital Marketing</span>, and
            lately, I’ve been diving into{" "}
            <span className="text-[#00d2ff]">Cyber Security</span>. I enjoy
            building cool web apps, putting together smart marketing ideas, and
            digging into security stuff. basically anything that’s hands-on and
            makes a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
