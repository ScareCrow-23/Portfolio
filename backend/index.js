import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import projectRouter from "./routes/projectRoute.js";
import adminRouter from "./routes/adminRoute.js";

// App Config

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints

app.use("/api/projects", projectRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
