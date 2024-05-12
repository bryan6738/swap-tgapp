import { useState } from "react";
import Footer from "../Components/Footer";
import logo from "../assets/home/Exchanger/btc.svg";
import etc from "../assets/home/Exchanger/eth.svg";
import load from "../assets/home/Exchanger/loadarrow.svg";
import usd from "../assets/home/Exchanger/usd.svg";
import { IoIosArrowDown } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import Faqs2 from "../Components/Faqs2";
import Options from "../Components/Options";
import Navbar from "../Components/Navbar";
import MainForm from "../Components/MainForm";

const Screen2 = () => {
  const [isActive, setIsActive] = useState(true);
  const [isFocused, setIsForcused] = useState(false);
  const [value, setValue] = useState(0.1);
  const [value2, setValue2] = useState("≈2.04459305");
  const [currency, setCurrency] = useState("BTC");
  const [currency2, setCurrency2] = useState("ETH");
  const [src1, setSrc1] = useState(logo);
  const [src2, setSrc2] = useState(etc);
  const handleClick = () => {
    setIsActive(!isActive);
    if (value === 0.1) {
      setValue(200);
      setValue2("≈0.003");
      setCurrency("USD");
      setCurrency2("BTC");
      setSrc1(usd);
      setSrc2(logo);
    } else {
      setValue(0.1);
      setValue2("≈2.04459305");
      setCurrency("BTC");
      setCurrency2("ETH");
      setSrc1(logo);
      setSrc2(etc);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <>
        <div>
          <Navbar />
        </div>
        <div className="">
          <Options />
          <div className="bg-white mx-3 rounded-xl">
            <div className="flex justify-center items-center">
              <h1 className="text-black pt-4 font-semibold text-xl">
                Add Exchnage Details
              </h1>
            </div>
            <div className="p-4 flex flex-col ">
              <MainForm />
            </div>
          </div>
          <Faqs2 />
        </div>
        <Footer />
      </>
    </>
  );
};
export default Screen2;
