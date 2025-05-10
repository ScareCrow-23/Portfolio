import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-[#f1f1f1] flex flex-col">
      <Navbar />
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
