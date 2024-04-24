import React from "react";
import Work from "./Sections/Work/Work";
import Projects from "./Sections/Projects/Projects";
import Features from "./Sections/Features/Features";
import Contact from "./Sections/Contact/Contact";
import Form from "./Sections/Form/Form";
import Blog from "./Sections/Blog/Blog";
import About from "./Sections/About/About";
import Banner from "./Sections/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Work />
      <Projects />
      <Features />
      <About />
      <Contact />
      <Form />
      <Blog />
    </>
  );
};

export default HomePage;
