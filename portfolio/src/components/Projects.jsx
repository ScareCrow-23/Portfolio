import React from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../context/ProjectContext"; // Make sure this matches the actual filename
import SingleProjectCard from "../components/SingleProjectCard";

const Projects = () => {
  const { projects, loading, error } = useProjects(); // Also consume loading and error states

  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="w-full bg-[#0f0f0f] text-[#f1f1f1] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-transparent bg-clip-text">
          Featured Projects
        </h2>

        {/* Handle loading and error states */}
        {loading ? (
          <p className="text-center text-lg">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <SingleProjectCard key={project._id} {...project} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-white font-semibold hover:opacity-90 transition"
              >
                View More Projects
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
