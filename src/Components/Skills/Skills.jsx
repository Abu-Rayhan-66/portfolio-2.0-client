import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/get-skill")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        setSkills(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-slate-300 font-semibold mt-10 mb-6 text-center">
        Skills
      </h1>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        <div className="flex flex-wrap justify-center gap-6 text-white">
          {Array.isArray(skills?.data) &&
            skills?.data?.map((skill) => (
              <div
                className="w-36 min-w-fit h-fit flex items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={skill._id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-blue-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-full w-12 rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
