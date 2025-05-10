import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (value) {
    //     const wordCount = value.trim().split(/\s+/).length;
    //     return wordCount >= 10;
    //   },
    //   message: "Description must be between 10 and 500 words.",
    // },
  },
  image: { type: String, required: true },
  live: {
    type: String,
    enum: ["True", "False"],
    required: true,
  },
  demo: { type: String },
  github: {
    type: String,
    required: true,
  },
  stack: { type: Array, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Project = mongoose.model("Project", projectSchema);

export default Project;
