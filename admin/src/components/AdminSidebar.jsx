import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-md transition ${
    isActive ? "bg-[#00d2ff] text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-6 fixed top-0 left-0 z-10">
      <div className="text-2xl font-bold text-[#00d2ff] mb-8">Admin Panel</div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/admin" className={navLinkClasses}>
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink to="/admin/projects" className={navLinkClasses}>
          <FaProjectDiagram /> Projects
        </NavLink>
        <NavLink to="/admin/contacts" className={navLinkClasses}>
          <FaEnvelope /> Contacts
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
