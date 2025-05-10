import React from "react";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaEnvelopeOpenText } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects Manager Card */}
        <Link
          to="/admin/projects"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-[#00d2ff] hover:border-[#009ad9]"
        >
          <div className="flex items-center space-x-4">
            <FaProjectDiagram className="text-3xl text-[#00d2ff]" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                Manage Projects
              </h2>
              <p className="text-gray-500 text-sm">
                View, add, edit or delete portfolio projects.
              </p>
            </div>
          </div>
        </Link>

        {/* Contacts Manager Card */}
        <Link
          to="/admin/contacts"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-[#ff5f5f] hover:border-[#e04e4e]"
        >
          <div className="flex items-center space-x-4">
            <FaEnvelopeOpenText className="text-3xl text-[#ff5f5f]" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                View Contacts
              </h2>
              <p className="text-gray-500 text-sm">
                Check messages submitted via contact form.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
