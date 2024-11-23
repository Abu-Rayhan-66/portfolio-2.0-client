/* eslint-disable react/no-unescaped-entities */
import './Banner.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import resumi from '../../assets/Abu-Rayhan-Resume (2).pdf'

const Banner = () => {

    const [text] = useTypewriter({
        words:['Full Stack Web Developer'],
        loop:{}
    })

    return (
        <div className="max-w-7xl mx-auto rounded-b-3xl p-4 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44]">
        <div className="flex justify-around  flex-col-reverse bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-2 lg:flex-row items-center  min-h-[calc(100vh-300px)]">
            <div className='max-w-[420px] flex-1'>
                <h1 className="text-slate-300 text-4xl font-semibold">Hi, I am <br /> Abu Rayhan</h1>
                <h2 className='text-slate-300 text-xl md:text-2xl mt-6 font-semibold'>I am a <span className='text-blue-600'>
                    {text}</span>
                    <Cursor/>
                    </h2>
                    <p className='text-slate-400 mt-4 '>Hi, I'm Abu Rayhan. A passionate Full stack Web Developer from Chandpur, Bangladesh.</p>
                   <Link to={resumi} download={'resumi'} target='_blank'>
                   <button className='text-black px-5 gap-2 mt-4 py-2.5 rounded-md bg-slate-200 flex items-center'>Resume<FaUpRightFromSquare/></button>
                   </Link>
            </div>
            <div className=' '>
                <img className='h-[500px] rounded-xl mb-20   opacity-70 z-[-10]' src={'https://i.ibb.co.com/9y7jMZn/20231209-111032-removebg-preview-1.png'} alt="" />
            </div>
        </div>
        
    </div>
    );
};

export default Banner;