/* eslint-disable react/no-unescaped-entities */

import Transition from '../../Components/Transition/Transition';
import about from '../../assets/about.jpg'

const About = () => {
    return (
        <Transition>
            <div className='mt-10 max-w-7xl mx-auto rounded-3xl p-4 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44]'>
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-2  flex flex-col lg:flex-row gap-10 items-center justify-center  ">
                <div className='lg:w-1/2'>
                <img className="md:max-w-md w-full rounded-xl" src={about} alt="" />
                </div>
                <div className="lg:w-1/2  ">
                    <h1 className='text-3xl font-semibold text-blue-700'>About Me</h1>
                    <p className='mt-3 text-slate-300'>Hello there! It's great to meet you. I'm Abu Rayhan, a passionate full-stack web developer with solid knowledge of Backend.I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, Firebase, Node JS, Express JS, MongoDB. My journey in the world of web development has been an exciting adventure, where I've honed my skills to craft dynamic and user-friendly digital experiences.</p>
                </div>
            </div>
        
        </div>
        </Transition>
    );
};

export default About;