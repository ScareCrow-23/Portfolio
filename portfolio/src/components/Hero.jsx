import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#0f0f0f] min-h-[calc(100vh-64px)] overflow-hidden text-center px-4 sm:px-6 py-12">
      {/* Background Glow Effects */}
      <div className="absolute w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] rounded-full bg-[#ff5f5f] opacity-20 blur-[150px] z-0 top-10 left-1/2 -translate-x-1/2" />
      <div className="absolute w-[40vw] max-w-[300px] h-[40vw] max-h-[300px] rounded-full bg-[#00d2ff] opacity-20 blur-[120px] z-0 bottom-10 right-10" />

      {/* Title */}
      <h1 className="relative z-10 text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
        <Title
          text1="Port"
          text2="folio."
          color1="text-[#f1f1f1]"
          color2="text-[#ff5f5f]"
        />
      </h1>

      {/* Tagline */}
      <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-[#cccccc] max-w-xl z-10 animate-fade-in-up">
        Full-Stack MERN Developer • Digital Marketer • Cyber Security Learner
      </p>

      {/* CTA Button */}
      <a
        href="#contact"
        className="mt-8 z-10 inline-block bg-[#ff5f5f] hover:bg-[#ff3b3b] focus:outline-none focus:ring-2 focus:ring-[#ff5f5f] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
      >
        Let’s Work Together
      </a>
    </section>
  );
};

export default Hero;
