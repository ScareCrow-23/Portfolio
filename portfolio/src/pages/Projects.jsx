import React from "react";
import SingleProjectCard from "../components/SingleProjectCard";
import { motion } from "framer-motion";
import { useProjects } from "../context/ProjectContext"; // ✅ Import hook

const Projects = () => {
  const { projects, loading, error } = useProjects(); // ✅ Access loading and error

  return (
    <section className="min-h-screen w-full bg-[#0f0f0f] text-[#f1f1f1] px-6 py-16 relative">
      {/* Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00d2ff] opacity-10 blur-[250px] z-0" />

      <div className="relative mt-10 z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#ff5f5f] to-[#00d2ff] text-transparent bg-clip-text"
        >
          All Projects
        </motion.h2>

        {/* Loading/Error UI */}
        {loading ? (
          <p className="text-center text-lg">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project._id || project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <SingleProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
