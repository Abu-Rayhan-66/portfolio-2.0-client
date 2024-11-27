import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Transition from "../../Components/Transition/Transition";

const Contact = () => {
  return (
   <Transition>
     <div className="max-w-7xl rounded-3xl  mx-auto p-2 border border-gray-500/[0.300] bg-opacity-80 bg-[#222d44] ">
      <div className="flex flex-col md:flex-row gap-6 border border-gray-500/[0.300] bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-4">
        <div className="max-w-xs">
          <h1 className="text-slate-300 text-3xl font-semibold mb-2">Get in Touch</h1>
          <p className="text-slate-300">
            Fill up the form for contact with me
          </p>
          <div className="flex gap-2 items-center mt-5">
            <span className="text-slate-300 border-slate-300 border-2  p-2 rounded-full">
              <FaPhoneAlt />
            </span>
            <div>
              <h6 className="font-medium text-slate-300">Phone</h6>
              <p className="text-xs text-slate-300">+880 1998280558</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <span className="text-slate-300 border-slate-300 border-2  p-2 rounded-full">
              <MdOutlineEmail />
            </span>
            <div>
              <h6 className="font-medium text-slate-300">Email</h6>
              <p className="text-xs text-slate-300">mraburayhan66@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <span className="text-slate-300 border-slate-300 border-2  p-2 rounded-full">
              <FaLocationDot />
            </span>
            <div>
              <h6 className="font-medium text-slate-300">Location</h6>
              <p className="text-xs text-slate-300">Chandpur,Bangladesh</p>
            </div>
          </div>
        </div>
        <form method="POST" action="https://formspree.io/f/mpzgvkbq" className="w-full">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-full">
              <label htmlFor="name" className="text-slate-300 font-medium">
                Your Name
              </label>
              <br />
              <input
                type="text"
                required
                name="name"
                placeholder="Enter Your Name"
                className="px-3 w-full py-1.5 border border-gray-500/[0.300] focus-border-red placeholder:text-white  bg-[#222d44]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="subject" className="text-slate-300 font-medium">
                Subject
              </label>{" "}
              <br />
              <input
                type="text"
                required
                name="subject"
                placeholder="Subject"
                className="px-3 w-full py-1.5 border border-gray-500/[0.300] focus-border-red placeholder:text-white  bg-[#222d44]"
              />
            </div>
          </div>
          <div className="w-full my-2">
            <label htmlFor="email" className="text-slate-300 font-medium">
              {" "}
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="px-3 w-full py-1.5 border border-gray-500/[0.300] focus-border-red placeholder:text-white  bg-[#222d44]"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-slate-300 font-medium">
              Message
            </label>{" "}
            <br />
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Enter you message here"
              className="px-3 w-full py-1.5 border border-gray-500/[0.300] focus-border-red placeholder:text-white  bg-[#222d44]"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="px-3 py-2.5 rounded-md cursor-pointer mt-1 bg-slate-300 text-black"
          />
        </form>
      </div>
    </div>
   </Transition>
  );
};

export default Contact;
