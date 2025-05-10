import express from "express";
import { adminLogin } from "../controllers/adminControllers.js";
import { adminAuth } from "../middlewares/adminAuth.js";
// const { adminLogin } = require("../controllers/adminControllers");

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

export default adminRouter;
