import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectsManager from "./pages/ProjectsManager";
import ContactsManager from "./pages/ContactsManager";
import { ToastContainer } from "react-toastify";
import AddProject from "./components/AddProject";

const AdminApp = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("adminToken", token);
    }
  }, [token]);

  // If not logged in, show login page at all routes
  if (!token) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <ToastContainer />
        <Routes>
          <Route path="*" element={<AdminLogin setToken={setToken} />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <ToastContainer />
      <AdminNavbar setToken={setToken} />
      <div className="flex">
        {/* <AdminSidebar /> */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/projects" element={<ProjectsManager />} />
            <Route path="/admin/contacts" element={<ContactsManager />} />
            <Route path="/admin/projects/add" element={<AddProject />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminApp;
