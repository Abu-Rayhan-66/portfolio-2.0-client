import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="font-poppins bg-[#070815] relative min-h-screen">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
