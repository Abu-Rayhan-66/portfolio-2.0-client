import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Transition from "../../Components/Transition/Transition";

const Contact = () => {
  return (
   <Transition>
     <div className="max-w-7xl  mx-auto px-4 my-7">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="max-w-xs">
          <h1 className="text-3xl font-semibold mb-2">Get in Touch</h1>
          <p>
            Fill up the form for contact with me
          </p>
          <div className="flex gap-2 items-center mt-5">
            <span className="border-2 border-black p-2 rounded-full">
              <FaPhoneAlt />
            </span>
            <div>
              <h6 className="font-medium">Phone</h6>
              <p className="text-xs">+880 1998280558</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <span className="border-2 border-black p-2 rounded-full">
              <MdOutlineEmail />
            </span>
            <div>
              <h6 className="font-medium">Email</h6>
              <p className="text-xs">mraburayhan66@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <span className="border-2 border-black p-2 rounded-full">
              <FaLocationDot />
            </span>
            <div>
              <h6 className="font-medium">Location</h6>
              <p className="text-xs">Chandpur,Bangladesh</p>
            </div>
          </div>
        </div>
        <form method="POST" action="https://formspree.io/f/mpzgvkbq" className="w-full">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-full">
              <label htmlFor="name" className="font-medium">
                Your Name
              </label>
              <br />
              <input
                type="text"
                required
                name="name"
                placeholder="Enter Your Name"
                className="px-3 w-full py-1.5 border-2 border-black"
              />
            </div>
            <div className="w-full">
              <label htmlFor="subject" className="font-medium">
                Subject
              </label>{" "}
              <br />
              <input
                type="text"
                required
                name="subject"
                placeholder="Subject"
                className="px-3 w-full py-1.5 border-2 border-black"
              />
            </div>
          </div>
          <div className="w-full my-2">
            <label htmlFor="email" className="font-medium">
              {" "}
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="px-3 w-full py-1.5 border-2 border-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-medium">
              Message
            </label>{" "}
            <br />
            <textarea
              name="message"
              rows="6"
              required
              className="px-3 w-full py-1.5 border-2 border-black"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="px-3 py-2.5 rounded-md cursor-pointer mt-1 bg-black text-white"
          />
        </form>
      </div>
    </div>
   </Transition>
  );
};

export default Contact;
