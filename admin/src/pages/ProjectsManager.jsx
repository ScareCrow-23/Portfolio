import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/projects/all-projects`);
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Projects</h1>
        <Link
          to="/admin/projects/add"
          className="flex items-center gap-2 bg-[#00d2ff] text-white px-4 py-2 rounded hover:bg-[#00b2d6] transition"
        >
          <FaPlus /> Add Project
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-600">No projects found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#00d2ff] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Stack</th>
                <th className="py-3 px-4 text-left">Live</th>
                <th className="py-3 px-4 text-left">GitHub</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{project.title}</td>
                  <td className="py-3 px-4">
                    {project.stack?.join(", ") || "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      Live
                    </a>
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 underline text-sm"
                    >
                      GitHub
                    </a>
                  </td>
                  <td className="py-3 px-4 flex gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectsManager;
