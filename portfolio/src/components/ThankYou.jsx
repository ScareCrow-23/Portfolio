import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#0f0f0f] px-6">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff5f5f] mb-4">
          Thank You!
        </h1>
        <p className="text-[#ccc] text-lg mb-8">
          I’ve received your message and will get back to you as soon as
          possible.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-white font-medium hover:opacity-90 transition"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
