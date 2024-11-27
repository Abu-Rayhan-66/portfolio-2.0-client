/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import Transition from "../../Components/Transition/Transition";
import Banner from "../../Components/Banner/Banner";
// import faceBook from "../../assets/facebook.svg";
// import linkdin from "../../assets/linkedin.svg";
// import github from "../../assets/logo-github.svg";
import Skills from "../../Components/Skills/Skills";
import About from "../../Components/About/About";
import Project from "../../Components/Project/Project";
import Contact from "../../Components/Contact/Contact";
import Blogs from "../../Components/Blogs/Blogs";
import { useLocation } from "react-router-dom";

const scrollToHash = (hash) => {
    const element = document.querySelector(hash);
    const navHeight = document.querySelector("nav")?.offsetHeight || 0; 
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
      const offsetPosition = elementPosition - navHeight; 
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location]);

  return (
    <div>
      <Transition>
        <section id="banner">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Skills/>
        </section>
        <section id="blog">
          <Blogs></Blogs>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Transition>
    </div>
  );
};

export default Home;