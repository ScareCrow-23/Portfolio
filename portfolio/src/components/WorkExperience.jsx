import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Supremus Angel",
    role: "Web Developer",
    duration: "Oct 2024 – Feb 2025",
    description:
      "Built and maintained a scalable E-commerce application, collaborated on API integration, and improved performance by 30%.",
  },
  {
    company: "Bc Web Wise",
    role: "Front-end Developer Intern",
    duration: "Jul 2024 – Oct 2024",
    description:
      "Assisted in building and fixing responsive website interfaces using HTML, CSS, and JavaScript as part of a collaborative team.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2022 – Ongoing",
    description:
      "Developed responsive websites for clients across industries. Specialized in React and WordPress solutions.",
  },
];

const WorkExperience = () => {
  return (
    <section className="w-full min-h-screen bg-[#0f0f0f] text-[#f1f1f1] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-transparent bg-clip-text">
          Work Experience
        </h2>

        <div className="relative border-l border-white/20 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 pl-6 relative"
            >
              {/* Dot on timeline */}
              <span className="absolute left-[-8px] top-2 w-4 h-4 bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] rounded-full shadow-md"></span>

              <h3 className="text-xl font-semibold text-[#ff5f5f]">
                {exp.role}
              </h3>
              <p className="text-sm text-[#ccc] italic">{exp.company}</p>
              <p className="text-xs text-[#999] mb-2">{exp.duration}</p>
              <p className="text-[#ddd] text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
