import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/projects/single-project/${id}`
        );
        setProject(res.data.project); // assuming response has { project: { ... } }
        setLoading(false);
      } catch (err) {
        setError("Project not found or failed to load.");
        setLoading(false);
        console.log(err);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-xl">Loading...</h2>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-400 underline">
          Go back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg border border-white/10 max-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right - Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#ff5f5f] mb-4">
            {project.title}
          </h1>
          <p className="text-[#cccccc] mb-6 leading-relaxed text-lg">
            {project.description}
          </p>

          <div className="flex gap-4 mb-8 flex-wrap">
            {project.demo && project.demo !== "False" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00d2ff] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#00b2d6] transition duration-300"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#ff5f5f] text-[#ff5f5f] px-5 py-2 rounded-full font-medium shadow hover:bg-[#ff5f5f] hover:text-white transition duration-300"
              >
                <FaGithub className="text-lg" />
                View GitHub
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {Array.isArray(project.stack) &&
                project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/10 border border-white/20 text-sm px-3 py-1 rounded-full text-white hover:bg-[#ff5f5f] hover:border-[#ff5f5f] transition"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
