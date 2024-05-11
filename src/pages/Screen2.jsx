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
const Screen2 = () => {
  const [isActive, setIsActive] = useState(true);
  const [isFocused, setIsForcused] = useState(false);
  const [value, setValue] = useState(0.1);
  const [value2, setValue2] = useState("≈2.04459305");
  const [currency, setCurrency] = useState("BTC");
  const [currency2, setCurrency2] = useState("ETH");
  const [src1, setSrc1] = useState(logo);
  const [src2, setSrc2] = useState(etc);
  const roundedTrClass = " bg-[#E0E9F1] hover:bg-blue-100";
  const roundedBlClass = "rounded-bl-[45px]";
  const roundedBrClass = "rounded-br-[45px]";
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
              <h1 className="text-black font-semibold text-xl">
                Add Exchnage Details
              </h1>
            </div>
            <div className="p-4 flex flex-col ">
              <div className='flex flex-col h-[33.33%]'>
                <div className='flex'>
                  <div className={`border border-solid border-2 border-gray-200 w-[80%] mr-[1px] ${isFocused ? 'bg-white-200' : 'bg-gray-200'} flex flex-col rounded-l-xl p-2 font-sans`}>
                    <h2 className='text-[10px] -mb-1 font-bold text-black/40'>You Send</h2>
                    <div className='cursor-pointer'>
                      <input value={value}
                        onChange={handleChange}
                        onFocus={() => { setIsForcused(true) }}
                        onBlur={() => { setIsForcused(false) }}
                        className={`${isFocused ? 'bg-white-200' : 'bg-gray-200'} focus:outline-none text-black/60  w-full text-[18px] font-bold`}
                        type="text" />
                    </div>
                  </div>
                  <div className='w-[30%] hover:bg-gray-300 bg-gray-300 cursor-pointer flex rounded-r-xl justify-between  items-center p-2 gap-x-1'>
                    <div className='w-1/3'><img className='w-12' src={src1} alt="" /></div>
                    <div className='text-sm w-1/3 leading-tight'>{currency}</div>
                    <div className='w-1/3'><IoIosArrowDown size={15} /></div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col  my-1 '>
                <div className='flex'>
                  <div className='w-[30px] h-[30px] my-auto bg-gray-200 items-center flex flex-col justify-center font-sans rounded-full hover:bg-gray-200'>
                    <FaUnlockAlt color='gray' size={15} />
                  </div>
                  <div className='cursor-pointer flex justify-between gap-x-2 items-center p-4'>
                    <h1 className='text-[12px] font-semibold text-black/60'>Floating Rate</h1>
                  </div>
                  <div className='hover:bg-blue-600 w-[30px] my-auto h-[30px] bg-gray-200 rounded-full flex justify-center items-center ml-auto'>
                    <img className='w-[25px] h-[25px]' src={load} alt="" />
                  </div>
                </div>
              </div>

              <div className='flex flex-col  '>
                <div className='flex'>
                  <div className='w-[80%] flex flex-col p-2 font-sans  rounded-l-xl bg-gray-200 hover:bg-gray-200'>
                    <h2 className='text-[10px] ml-2 -mb-1  font-bold text-black/40'>You Get</h2>
                    <div className='cursor-pointer'>
                      <input value={value2} placeholder='0.1'
                        className='focus:outline-none bg-gray-200 hover:bg-gray-200 text-black/60  w-full text-[18px] font-bold'
                        type="text" />
                    </div>
                  </div>
                  <div className='w-[30%] hover:bg-gray-300  bg-gray-300 cursor-pointer rounded-r-xl flex justify-between gap-x-1 items-center p-2'>
                    <div className='w-1/3'><img className='' src={src2} alt="" /></div>
                    <div className='w-1/3 text-sm leading-tight'>{currency2}</div>
                    <div className='w-1/3'><IoIosArrowDown size={15} /></div>
                  </div>
                </div>
              </div>
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
