/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Transition from "../../Components/Transition/Transition";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import faceBook from "../../assets/facebook.svg";
import linkdin from "../../assets/linkedin.svg";
import github from "../../assets/logo-github.svg";

const scrollToHash = (hash) => {
    const element = document.querySelector(hash);
    const navHeight = document.querySelector("nav")?.offsetHeight || 0; // Get the height of the navbar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Position of the element
      const offsetPosition = elementPosition - navHeight; // Adjust for navbar height
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
      <nav className="sticky top-0 bg-transparent z-[20] backdrop-blur-sm lg:flex items-center px-8 justify-between max-w-7xl mx-auto h-16 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-500/[0.300] bg-[#222d44]">
        <div className="font-medium text-white">
        <Link to="/#banner" className="mr-4 hover:underline hover:underline-offset-4 hover:decoration-blue-500">
          Banner
        </Link>
        <Link to="/#about" className="mr-4 hover:underline hover:underline-offset-4 hover:decoration-blue-500">
          About
        </Link>
        <Link to="/#project" className="mr-4 hover:underline hover:underline-offset-4 hover:decoration-blue-500">
          Projects
        </Link>
        <Link to="/#contact" className="mr-4 hover:underline hover:underline-offset-4 hover:decoration-blue-500">
          Contact
        </Link>
       
        </div>
        <div className="flex gap-4 items-center">
        <h1 className="mr-4 lg:mr-96 inline-block text-white text-4xl font-bold ">ABU RAYHAN</h1>
        <Link to='https://github.com/Abu-Rayhan-66' target="_blank" ><img className="transition hover:-translate-y-1 w-6 h-6 bg-white rounded-full" src={github} alt="" /></Link>
      <Link to='https://www.linkedin.com/in/abu-rayhan-dev' target="_blank" ><img className="transition hover:-translate-y-1 w-6 h-6" src={linkdin} alt="" /></Link>
      <Link to='https://www.facebook.com/mdrayhan6' target="_blank" ><img className="transition hover:-translate-y-1 w-6 h-6" src={faceBook} alt="" /></Link>
        </div>
      </nav>
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
          <Contact />
        </section>
      </Transition>
    </div>
  );
};

export default Home;