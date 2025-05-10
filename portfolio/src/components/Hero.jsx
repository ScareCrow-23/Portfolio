import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#0f0f0f] h-[calc(100vh-64px)] overflow-hidden text-center px-6">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#ff5f5f] opacity-20 blur-[150px] z-0 top-10 left-1/2 -translate-x-1/2" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#00d2ff] opacity-20 blur-[120px] z-0 bottom-10 right-10" />

      {/* Title */}
      <h1 className="relative z-10 text-5xl sm:text-7xl md:text-8xl font-bold">
        <Title
          text1={"Port"}
          text2={"folio."}
          color1="text-[#f1f1f1]"
          color2="text-[#ff5f5f]"
        />
      </h1>

      {/* Tagline */}
      <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-[#cccccc] max-w-xl z-10 animate-fade-in-up">
        Full-Stack MERN Developer • Digital Marketer • Cyber Security Learner
      </p>

      {/* CTA Button */}
      <a
        href="#contact"
        className="mt-8 z-10 inline-block bg-[#ff5f5f] hover:bg-[#ff3b3b] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
      >
        Let’s Work Together
      </a>
    </section>
  );
};

export default Hero;
