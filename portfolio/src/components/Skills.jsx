import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCyberdefenders,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, progress: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, progress: 90 },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    progress: 90,
  },
  { name: "React", icon: <FaReact className="text-cyan-400" />, progress: 85 },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    progress: 80,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-300" />,
    progress: 80,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    progress: 75,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    progress: 90,
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-white" />,
    progress: 85,
  },
  { name: "SEO", icon: <TbSeo className="text-purple-400" />, progress: 70 },
  {
    name: "Digital Marketing",
    icon: <BsGraphUp className="text-pink-400" />,
    progress: 75,
  },
  {
    name: "Cyber Security Basics",
    icon: <SiCyberdefenders className="text-red-500" />,
    progress: 65,
  },
];

const Skills = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex items-center justify-center px-6 py-12">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#ff5f5f] opacity-10 rounded-full blur-[200px] z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-transparent bg-clip-text">
          My Skill Arsenal
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-md shadow-lg hover:shadow-[#ff5f5f]/30 transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <span className="text-lg font-semibold group-hover:text-[#ff5f5f] transition-colors duration-200">
                  {skill.name}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full mt-4">
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#aaa] mt-1 block">
                  {skill.progress}%
                </span>
              </div>

              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#ff5f5f] opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
