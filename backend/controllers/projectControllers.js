import { v2 as cloudinary } from "cloudinary";
import Project from "../modules/ProductsModule.js";

// Add a Project
const addProject = async (req, res) => {
  try {
    const { title, description, demo, live, github, stack } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Project image is required." });
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
      folder: "projects",
    });

    const newProject = new Project({
      title,
      description,
      image: imageUpload.secure_url,
      demo,
      live,
      github,
      stack: stack.split(",").map((item) => item.trim()),
    });

    const savedProject = await newProject.save();

    return res.status(201).json({
      message: "Project added successfully",
      project: savedProject,
    });
  } catch (error) {
    console.error("Add project error:", error);
    return res.status(500).json({
      message: "Failed to add project",
      error: error.message,
    });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json({ projects });
  } catch (error) {
    console.error("Get all projects error:", error);
    return res.status(500).json({
      message: "Failed to get projects",
      error: error.message,
    });
  }
};

// Get a single project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.status(200).json({ project });
  } catch (error) {
    console.error("Get project by ID error:", error);
    return res.status(500).json({
      message: "Failed to get project",
      error: error.message,
    });
  }
};

export default {
  addProject,
  getAllProjects,
  getProjectById,
};
