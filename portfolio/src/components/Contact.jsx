import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0f0f0f] text-[#f1f1f1] py-20 px-6 relative"
    >
      {/* Glow Background */}
      <div className="absolute w-[800px] h-[800px] bg-[#ff5f5f] opacity-10 rounded-full blur-[200px] z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-transparent bg-clip-text">
          Let's Work Together
        </h2>
        <p className="text-center text-lg text-[#ccc] mb-12">
          I’m currently{" "}
          <span className="text-[#00d2ff] font-semibold">available</span> for
          <span className="text-[#ff5f5f] font-semibold">
            {" "}
            freelance work.
          </span>{" "}
          Whether it's building websites, running digital campaigns, or
          collaborating on something awesome.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <form className="bg-white/5 p-8 rounded-lg backdrop-blur-md border border-white/10 shadow-md space-y-6">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-md bg-[#1f1f1f] text-[#f1f1f1] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff5f5f]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-md bg-[#1f1f1f] text-[#f1f1f1] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff5f5f]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full p-3 rounded-md bg-[#1f1f1f] text-[#f1f1f1] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff5f5f]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social & Info */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-[#ddd] text-lg leading-relaxed">
              If you’d prefer, you can also reach out via any of my socials
              below. I usually respond within a day!
            </p>

            <div className="flex gap-6 text-2xl text-[#f1f1f1]">
              <a
                href="https://github.com/ScareCrow-23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5f5f] transition"
              >
                <FaGithub />
              </a>
              <a
                href="www.linkedin.com/in/saumil-dhumal-929248263"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00d2ff] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1da1f2] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:dhumalsaumil@gmail.com"
                className="hover:text-[#ff5f5f] transition"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="mt-4 text-sm text-[#999]">
              <p>
                Email:{" "}
                <span className="text-[#f1f1f1]">dhumalsaumil@gmail.com</span>
              </p>
              <p>
                Location:{" "}
                <span className="text-[#f1f1f1]">Open to Remote Work</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
