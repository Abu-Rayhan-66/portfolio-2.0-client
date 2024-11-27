import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const [singleProject, setSingleProject] = useState({});
  const project = singleProject?.data;
  console.log("single Project", project);

  useEffect(() => {
    fetch(`http://localhost:5000/api/dashboard/get-single-project/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        setSingleProject(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="min-h-[75vh] max-w-7xl mx-auto mt-10 md:flex gap-32">
   
      <div className="lg:w-1/2 order-1 md:order-2">
        <div
          style={{
            backgroundImage: `url(${project?.image})`,
          }}
          className="box box-1 w-full lg:max-w-full rounded-2xl bg-cover bg-center sticky top-20"
        ></div>
      </div>

   
      <div className="lg:w-1/2 order-2 md:order-1">
        <h2 className="w-full text-white text-2xl font-semibold mb-6 mt-6 md:mt-0">
          {project?.title}
        </h2>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project?.technologies
            ?.split(",")
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

        <div className="text-white mt-10 mb-10">
          <div className="mt-5 flex items-center gap-4">
            <Link target="_blank" to={project?.githubClient}>
              <button className="text-black px-3 py-1 gap-1 md:px-5 md:gap-2 md:py-2 rounded-md bg-white flex items-center">
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
              <button className="text-black px-3 py-1 gap-1 md:px-5 md:gap-2 md:py-2 rounded-md bg-white flex items-center">
                Demo
                <FaUpRightFromSquare />
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-10 text-white">{project?.description}</p>
        
      </div>
    </div>
  );
};

export default ProjectDetails;
