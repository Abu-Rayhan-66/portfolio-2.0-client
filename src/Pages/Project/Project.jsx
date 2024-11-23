import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Project.css";
import Transition from "../../Components/Transition/Transition";

const Project = () => {
  return (
    <>
      <Transition>
        <h1 className="text-4xl text-slate-300 font-semibold mt-10 mb-6 text-center">
          My MERN Stack Projects
        </h1>
        <div className="max-w-7xl mx-auto">

          <div className="rounded-3xl p-4 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44] flex flex-col lg:flex-row gap-5 px-3 py-4  md:p-5 mt-7 mb-10 shadow-lg">
            <div className=" box box-1 lg:flex-1 w-full lg:max-w-lg rounded-md"></div>
            <div className="lg:flex-1 p-2 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl">
              <h1 className="text-2xl font-semibold text-white">Recipe sharing social media platform</h1>
              <p className="mt-2 text-slate-300">
                This is a Recipe sharing social media where people can share their favorites Recipes.
                people can follow each other and they can like comment in Recipe post
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  next.js
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  redux
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Typescript
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  MongoDB
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Node.js
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Express.js
                </span>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <Link
                  target="_blank"
                  to="https://github.com/saiyedimtiaj/Shoues-Store"
                >
                  <button className="text-black px-5 gap-2 py-2 rounded-md bg-white flex items-center">
                    Client
                    <FaGithub className="text-lg" />
                  </button>
                </Link>
                <Link
                  target="_blank"
                  to="https://github.com/saiyedimtiaj/Shoues-Store"
                >
                  <button className="text-black px-5 gap-2 py-2 rounded-md bg-white flex items-center">
                    Server
                    <FaGithub className="text-lg" />
                  </button>
                </Link>
                <Link
                  to="https://charming-hamster-667e0d.netlify.app/"
                  target="_blank"
                >
                  <button className="bg-white border-2 border-black px-5 gap-2 py-2 rounded-md flex items-center">
                    Demo
                    <FaUpRightFromSquare />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl p-4 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44] flex flex-col lg:flex-row gap-5 px-3 py-4  md:p-5 mt-7 mb-10 shadow-lg">
            <div className="box box-2 lg:flex-1 w-full lg:max-w-lg rounded-md"></div>
            <div className="lg:flex-1 p-2 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl">
              <h1 className="text-2xl font-semibold">Resturent Website</h1>
              <p className="mt-2 text-[#555]">
                It is a resturent website user can bay a foof or he /she can
                sell a food.This website have a cool animation with Framer
                Motion.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  React
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Express JS
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Mongo DB
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Framer Motion
                </span>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <Link
                  target="_blank"
                  to="https://github.com/saiyedimtiaj/Fast-Food-Resturent"
                >
                  <button className="text-white px-5 gap-2 py-3 rounded-md bg-black flex items-center">
                    Code
                    <FaGithub className="text-lg" />
                  </button>
                </Link>
                <Link
                  to="https://cute-gaufre-0d1653.netlify.app/"
                  target="_blank"
                >
                  <button className="border-2 border-black px-5 gap-2 py-2.5 rounded-md flex items-center">
                    Demo
                    <FaUpRightFromSquare />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          
          <div className="rounded-3xl p-4 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44] flex flex-col lg:flex-row gap-5 px-3 py-4  md:p-5 mt-7 mb-10 shadow-lg">
            <div className="box box-3 lg:flex-1 w-full lg:max-w-lg rounded-md"></div>
            <div className="lg:flex-1 p-2 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl">
              <h1 className="text-2xl font-semibold">Coading Contest</h1>
              <p className="mt-2 text-[#555]">
                In this website user can participate a contest and win the price
                money and also use Admin dashboard for user Management
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  React
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Express JS
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Meterial ui
                </span>
                <span className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs">
                  Firebase
                </span>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <Link
                  target="_blank"
                  to="https://github.com/saiyedimtiaj/Coading-Contest"
                >
                  <button className="text-white px-5 gap-2 py-3 rounded-md bg-black flex items-center">
                    Code
                    <FaGithub className="text-lg" />
                  </button>
                </Link>
                <Link
                  to="https://bespoke-brioche-882f5f.netlify.app/"
                  target="_blank"
                >
                  <button className="border-2 border-black px-5 gap-2 py-2.5 rounded-md flex items-center">
                    Demo
                    <FaUpRightFromSquare />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Project;
