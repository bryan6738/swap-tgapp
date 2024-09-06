import logo from "../assets/TeleSwapLogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navbar = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed z-50 left-0 top-0 w-1/2 h-full overflow-y-auto bg-gray-800 bg-opacity-75 transition duration-200 ease-in-out 
          transform translate-x-full md:translate-x-0 ${isOpen ? "opacity-100 -translate-x-0" : "invisible"}`}
        style={{zIndex: 200}}
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
            <Link
              to={"/swap-tgapp/roadmap"}
              className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200"
            >
              RoadMap
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-4 py-6" style={{ backgroundColor: backgroundColor || 'transparent' }}>
        <div className="flex w-full justify-between items-center h-full">
          <div className="flex-grow flex items-center justify-center">
            <Link to="/swap-tgapp/" className="flex flex-col items-center text-xl font- text-white" style={{ marginLeft: '88px' }}>
              <img src={logo} alt="TeleSwap Logo" className="w-12 mb-1" />
              <span>TeleSwap</span>
            </Link>
          </div>
          <div onClick={toggleSidebar} className="cursor-pointer" style={{ marginRight: '35px' }}>
            <FaBars color="white" size={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
