/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'

const Transition = ({children}) => {
    return (
        <>
        {children}
            <motion.div className='top-0 bottom-0 w-screen z-30 h-screen fixed right-full bg-blue-800'
                initial={{x:'100%',width:'100%'}}
                animate={{x:'0%',width:'0%'}}
                transition={{duration:0.8,ease:'easeInOut'}}
            />
            <motion.div className='top-0 bottom-0 w-screen z-20 h-screen fixed right-full bg-white'
                initial={{x:'100%',width:'100%'}}
                animate={{x:'0%',width:'0%'}}
                transition={{delay:0.2, duration:0.8,ease:'easeInOut'}}
            />
            <motion.div className='top-0 bottom-0 w-screen z-10 h-screen fixed right-full bg-black'
                initial={{x:'100%',width:'100%'}}
                animate={{x:'0%',width:'0%'}}
                transition={{delay:0.4,duration:0.8,ease:'easeInOut'}}
            />
        </>
    );
};

export default Transition;