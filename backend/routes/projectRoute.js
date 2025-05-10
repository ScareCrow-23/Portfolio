import express from "express";
import upload from "../middlewares/multer.js";
import projectControllers from "../controllers/projectControllers.js";

const projectRouter = express.Router();

projectRouter.post(
  "/add",
  upload.single("image"),
  projectControllers.addProject
);

projectRouter.get("/all-projects", projectControllers.getAllProjects);
projectRouter.get("/single-project/:id", projectControllers.getProjectById);

export default projectRouter;
