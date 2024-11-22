import ProgressBar from "@ramonak/react-progress-bar";
import SkillChart from "../SkillChart/SkillChart";

const Skills = () => {
  return (
    <>
    <h1 className="md:text-4xl text-3xl text-[#1c1b1b] font-semibold mt-20 mb-12 text-center">My Full Stack Skill Showcase</h1>
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-7 mb-8">
        <div>
            <h1 className="text-2xl font-semibold mt-4 mb-5">Font-End</h1>
            <p className=" font-medium">HTML</p>
            <ProgressBar completed={92} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">CSS</p>
            <ProgressBar completed={85} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">JAVASCRIPT</p>
            <ProgressBar completed={70} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">REACT JS</p>
            <ProgressBar completed={78} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">TAILWIND</p>
            <ProgressBar completed={82} bgColor="#1c1b1b" />
        </div>
        <div>
            <SkillChart/>
        </div>
        <div>
            <h1 className="text-2xl font-semibold mt-4 mb-5">Back-End</h1>
            <p className=" font-medium">FIREBASE</p>
            <ProgressBar completed={78} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">NODE JS</p>
            <ProgressBar completed={55} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">EXPRESS JS</p>
            <ProgressBar completed={67} bgColor="#1c1b1b" />
            <p className=" mt-2 font-medium">MONGO DB</p>
            <ProgressBar completed={70} bgColor="#1c1b1b" />
        </div>
      </div>
    </>
  );
};

export default Skills;
