import logo from "../assets/Navbar/TeleSwap.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
/* import BlurOverlay from './BlurOverlay'; */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <BlurOverlay isOpen={isOpen} /> */}
      <div
        className={`fixed z-50 left-0 top-0 w-1/2 h-full overflow-y-auto bg-gray-800 bg-opacity-75 transition duration-200 ease-in-out 
          transform translate-x-full md:translate-x-0 ${isOpen ? "opacity-100 -translate-x-0" : "invisible"}`}
      >
        <div className="flex items-center justify-end px-4 py-6 text-white">
          <button
            type="button"
            onClick={toggleSidebar}
            className="focus:outline-none"
          >
            <AiOutlineCloseCircle size={32} />
          </button>
        </div>
        <ul>
          <li className="px-5 py-4 w-full hover:bg-gray-800 hover:bg-opacity-75">
            <Link
              to={"/swap-tgapp/"}
              className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li className="px-5 py-4 w-full hover:bg-gray-800 hover:bg-opacity-75">
            <div className="flex justify-between">
              <div>
                <Link
                  to={"/swap-tgapp/exchange"}
                  className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200"
                >
                  Exchange
                </Link>
              </div>{" "}
            </div>
          </li>
        </ul>
      </div>
      <div className="px-4 py-6 border-b-[0.1px] border-white/60">
        <div className="flex w-full justify-between items-center h-full">
          <div className="flex">
            <Link to="/swap-tgapp/" className="w-12 flex items-center gap-2 text-xl font-bold text-white">
              <img src={logo} alt="" />
              TeleSwap
            </Link>
          </div>
          <div onClick={toggleSidebar} className="cursor-pointer">
            <FaBars color="white" size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
