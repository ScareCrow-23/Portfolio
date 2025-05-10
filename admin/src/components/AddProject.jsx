import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null, // file object
    live: "",
    demo: "",
    github: "",
    stack: "",
  });

  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error("Please upload a project image.");
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("image", formData.image);
    form.append("demo", formData.demo);
    form.append("live", formData.live);
    form.append("github", formData.github);
    form.append("stack", formData.stack); // handle backend parsing

    try {
      const res = await axios.post(`${backendUrl}/api/projects/add`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Project added successfully!");
      navigate("/admin/projects");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to add project.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="live"
          placeholder="Live"
          value={formData.live}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="demo"
          placeholder="Demo link"
          value={formData.demo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="stack"
          placeholder="Stack (comma separated e.g. React, Node.js)"
          value={formData.stack}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-[#00d2ff] text-white px-6 py-2 rounded hover:bg-[#00b2d6] transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
