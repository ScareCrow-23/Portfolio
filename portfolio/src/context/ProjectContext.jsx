// src/context/ProjectsContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProjectsContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [singleProject, setSingleProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all projects on load
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/projects/all-projects`);
        setProjects(res.data.projects);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Fetch a single project by ID
  const fetchSingleProject = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${backendUrl}/api/projects/single-project/${id}`
      );
      setSingleProject(res.data.project); // assuming { project: {...} }
      setLoading(false);
    } catch (err) {
      setError("Failed to load single project.");
      setLoading(false);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, loading, error, singleProject, fetchSingleProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useProjects = () => useContext(ProjectsContext);
