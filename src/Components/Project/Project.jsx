import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Project.css";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/get-project")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProject(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      
        <h1 className="text-4xl text-slate-300 font-semibold mt-10 mb-6 text-center">
          My MERN Stack Projects
        </h1>
        <div className="max-w-7xl mx-auto">
          {projects?.data?.slice(0,3).map((project) => (
            <div
              key={project._id}
              className="rounded-3xl p-2 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44] flex flex-col lg:flex-row gap-3 mt-7 mb-10 shadow-lg"
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                className=" box box-1 lg:flex-1 w-full lg:max-w-lg rounded-2xl"
              ></div>

              <div className="lg:flex-1 border border-gray-500/[0.300] p-4 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl">
                <Link to={`/project-details/${project._id}`}>
                <h1 className="text-2xl font-semibold text-white hover:text-blue-500 hover:underline">
                  {project?.title.slice(0, 40)}
                  {project?.title.length > 40 && "..."}
                </h1>
                </Link>
                <p className="mt-2 text-slate-300">
                  {project?.description.slice(0, 180)}
                  {project?.description.length > 180 && "..."}
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.technologies
                    .split(",")
                    .map((item) => item.trim())
                    .map((item, index) => (
                      <span
                        key={index}
                        className="bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs"
                      >
                        {item}
                      </span>
                    ))}
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <Link target="_blank" to={project?.githubClient}>
                    <button className="text-black px-3 py-1 gap-1 md:px-5 md:gap-2 md:py-2  rounded-md bg-white flex items-center">
                      Client
                      <FaGithub className="text-lg" />
                    </button>
                  </Link>
                  <Link target="_blank" to={project?.githubServer}>
                    <button className="text-black px-3 py-1 gap-1 md:px-5 md:gap-2 md:py-2 rounded-md bg-white flex items-center">
                      Server
                      <FaGithub className="text-lg" />
                    </button>
                  </Link>
                  <Link to={project?.demo} target="_blank">
                    <button className="bg-white border-2 border-black px-3 py-1 gap-1 md:px-5 md:gap-2 md:py-2 rounded-md flex items-center">
                      Demo
                      <FaUpRightFromSquare />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <Link to="/all-project" className="flex justify-center mb-6">
            <button className="text-center text-black px-5 gap-3  py-2.5 rounded-md bg-slate-200 flex items-center">
              All Projects
            </button>
          </Link>
        </div>
      
    </div>
  );
};

export default Project;
