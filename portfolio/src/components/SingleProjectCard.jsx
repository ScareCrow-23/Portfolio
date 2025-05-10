import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SingleProjectCard = ({
  _id,
  id,
  title,
  description,
  image,
  live,
  github,
  stack,
}) => {
  const projectId = _id;
  const isLiveAvailable = live && live !== "False" && live.startsWith("http");

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl shadow-xl backdrop-blur-lg overflow-hidden transform transition duration-300 hover:scale-[1.03]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-5 flex flex-col justify-between min-h-[260px]">
        <h3 className="text-2xl font-bold text-[#ff5f5f] mb-2">{title}</h3>
        <p className="text-sm text-[#dddddd] mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 text-xs text-[#00d2ff] mb-4">
          {Array.isArray(stack) &&
            stack.map((tech, index) => (
              <span
                key={index}
                className="bg-[#00d2ff]/10 border border-[#00d2ff]/40 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <Link
            to={`/projects/${projectId}`}
            className="text-sm bg-[#00d2ff] text-white px-4 py-2 rounded hover:bg-[#00aaff] transition-all"
          >
            View Details →
          </Link>

          {/* Icons */}
          <div className="flex gap-3 text-lg text-[#dddddd]">
            {isLiveAvailable && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {github && github.startsWith("http") && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repo"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
