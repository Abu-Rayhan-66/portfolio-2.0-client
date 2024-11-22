/* eslint-disable react/no-unescaped-entities */

import './Home.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import resumi from '../../assets/Abu-Rayhan-Resume (2).pdf'
import Transition from '../../Components/Transition/Transition';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';


const Home = () => {
    const [text] = useTypewriter({
        words:['Full Stack Web Developer'],
        loop:{}
    })
    return (
        <Transition>
            <div className="max-w-7xl mx-auto px-4 bg-red-600">
            <div className="flex justify-between  flex-col-reverse py-6 lg:flex-row items-center  min-h-[calc(100vh-170px)]">
                <div className='max-w-[420px] flex-1'>
                    <h1 className="text-4xl font-semibold">Hi, I am <br /> Abu Rayhan</h1>
                    <h2 className='text-xl md:text-2xl mt-6 font-semibold'>I am a <span className='text-blue-600'>
                        {text}</span>
                        <Cursor/>
                        </h2>
                        <p className='mt-4 text-[#555]'>Hi, I'm Abu Rayhan. A passionate Full stack Web Developer from Chandpur, Bangladesh.</p>
                       <Link to={resumi} download={'resumi'} target='_blank'>
                       <button className='text-white px-5 gap-2 mt-4 py-2.5 rounded-md bg-black flex items-center'>Resume<FaUpRightFromSquare/></button>
                       </Link>
                </div>
                <div className=' '>
                    <img className='h-[550px] bg-contain' src={'https://i.ibb.co.com/ggRsQ6X/20231209-111032-removebg-preview.png'} alt="" />
                </div>
            </div>
            
        </div>
        <About></About>
        <Project></Project>
        <Contact></Contact>
       
        </Transition>
    );
};

export default Home;