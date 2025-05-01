import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
const AppLayout = () => {
  return (
    <>
      {/* <Outlet /> */}
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section className="mt-13" id="about">
        <About />
      </section>
      <section  id="skill">
        <Skill />
      </section>
      <section id="services">
        <Services />
      </section>
      <section className="mt-16" id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default AppLayout;
