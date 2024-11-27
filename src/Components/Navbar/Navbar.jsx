import { Link, NavLink } from "react-router-dom";
import faceBook from "../../assets/facebook.svg";
import linkdin from "../../assets/linkedin.svg";
import github from "../../assets/logo-github.svg";


const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-transparent z-[20] backdrop-blur-sm lg:flex items-center px-8 justify-between max-w-7xl mx-auto h-16 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-500/[0.300] bg-[#222d44]">
        <div className="font-medium text-white">
      
        <NavLink

        to="/#banner" 
        className="hover:underline hover:decoration-blue-500 hover:text-blue-500 mr-4 ">
          Banner
        </NavLink>

        <NavLink

        to="/#about" 
        className="hover:underline hover:decoration-blue-500 hover:text-blue-500 mr-4">
          About
        </NavLink>

        <NavLink

        to="/#project" 
        className="hover:underline hover:decoration-blue-500 hover:text-blue-500 mr-4">
          Project
        </NavLink>

        <NavLink

        to="/#contact" 
        className="hover:underline hover:decoration-blue-500 hover:text-blue-500 mr-4">
          Contact
        </NavLink>
        <NavLink

        to="/#blog" 
        className="hover:underline hover:decoration-blue-500 hover:text-blue-500 mr-4">
          Blog
        </NavLink>
       
        </div>
        <div className="flex gap-4 items-center">
        <h1 className="mr-4 lg:mr-96 inline-block text-white text-3xl font-medium lg:text-4xl :font-bold ">ABU RAYHAN</h1>
        <Link to='https://github.com/Abu-Rayhan-66' target="_blank" ><img className="transition hover:-translate-y-1 w-6 h-6 bg-white rounded-full" src={github} alt="" /></Link>
      <Link to='https://www.linkedin.com/in/abu-rayhan-dev' target="_blank" ><img className="transition hover:-translate-y-1 w-6 h-6" src={linkdin} alt="" /></Link>
      <Link to='https://www.facebook.com/mdrayhan6' target="_blank" ><img className="transition hover:-translate-y-1 w-6 h-6" src={faceBook} alt="" /></Link>
        </div>
      </nav>
    );
};

export default Navbar;