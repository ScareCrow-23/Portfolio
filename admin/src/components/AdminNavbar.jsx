import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    navigate("/admin/login");
  };

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

      <div className="flex gap-4 items-center">
        <NavLink to="/admin/projects" className={navLinkClasses}>
          Projects
        </NavLink>
        <NavLink to="/admin/contacts" className={navLinkClasses}>
          Contacts
        </NavLink>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
