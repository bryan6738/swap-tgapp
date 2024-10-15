import logo from "../assets/TeleSwapLogo.svg";
import BackArrow from "../assets/back-arrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = ({ backgroundColor, lang = true }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed z-50 left-0 top-0 w-1/2 h-full overflow-y-auto bg-gray-800 bg-opacity-75 transition duration-200 ease-in-out 
          transform translate-x-full md:translate-x-0 ${isOpen ? "opacity-100 -translate-x-0" : "invisible"}`}
        style={{ zIndex: 200 }}
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
              {t("home")}
            </Link>
          </li>
          <li className="px-5 py-4 w-full hover:bg-gray-800 hover:bg-opacity-75">
            <Link
              to={"/swap-tgapp/roadmap"}
              className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200"
            >
              {t("roadmap")}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="relative px-4 py-6"
        style={{ backgroundColor: backgroundColor || "transparent" }}
      >
        <div className="flex w-full justify-between items-center h-full">
          <div className="absolute left-8" style={{ top: "24px" }}>
            {lang ? (
              <LanguageSwitcher />
            ) : (
              <Link to="/swap-tgapp/">
                <img
                  src={BackArrow}
                  alt="Back Arrow"
                  style={{ width: "52px" }}
                />
              </Link>
            )}
          </div>
          <div className="flex-grow flex items-center justify-center">
            <Link
              to="/swap-tgapp/"
              className="flex flex-col items-center text-xl font- text-white"
            >
              <img src={logo} alt="TeleSwap Logo" className="w-14 mb-1" />
              <span style={{ fontSize: "lager", fontWeight: "600" }}>
                TeleSwap
              </span>
            </Link>
          </div>
          <div
            className="absolute cursor-pointer right-8"
            onClick={toggleSidebar}
            style={{ top: "24px" }}
          >
            <FaBars color="white" size={48} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
