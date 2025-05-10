import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Contact from "../components/Contact";
import ThankYou from "../components/ThankYou";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
      <ThankYou />
    </>
  );
};

export default Home;
