import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import {motion} from 'framer-motion'


const MainLayout = () => {
    return (
        <div className="font-poppins bg-[#070815]">
             <motion.img
             className="h-16 w-26 fixed top-20 left-32 blur-[1px] "
        src="https://i.ibb.co.com/Fg6NSKL/typescript.png"
        alt="Moving"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
             <motion.img
             className="h-16 w-26 absolute top-20 right-32 blur-[1px] "
        src="https://i.ibb.co.com/Fg6NSKL/typescript.png"
        alt="Moving"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
            
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;