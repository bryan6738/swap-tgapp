import Footer from "../Components/Footer";
// import logo from '../assets/home/Exchanger/btc.svg'
// import etc from '../assets/home/Exchanger/eth.svg'
// import load from '../assets/home/Exchanger/loadarrow.svg'
// import {Link} from 'react-router-dom'
// import usd from '../assets/home/Exchanger/usd.svg'
// import { IoIosArrowDown } from "react-icons/io";
// import { FaUnlockAlt } from "react-icons/fa";
import Faqs3 from "../Components/Faqs3";
import Cards2 from "../Components/Cards2";
import Deposit from "../Components/Deposit";
import Exchange_id from "../Components/Exchange_id";
import { FaEthereum } from "react-icons/fa";
/* import { MdOutlineKeyboardArrowRight } from "react-icons/md"; */
import { CiShare1 } from "react-icons/ci";
import Navbar from "../Components/Navbar";
const Screen3 = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Exchange_id />
        <Deposit />
        <div className="mx-3">
          <Cards2 />
        </div>
        <div className="p-5   bg-white">
          <div className="flex drop-shadow-lg  rounded-xl flex-col  bg-white ">
            <div>
              <h1 className="font-semibold bg-white drop-shadow-2xl  rounded-t-xl  p-2">
                Operation details
              </h1>
            </div>
            <div className="p-3">
              <p className="text-xs font-[500] text-black/60">You get:</p>
              <div className="flex items-center">
                <h2 className="font-semibold text-lg flex ">
                  <FaEthereum size={25} /> ≈2.03454361 ETH
                </h2>
              </div>
              <div className="py-2">
                <p className="text-xs font-[500] text-black/60">
                  Recipient address:
                </p>
              </div>
              <div className="flex justify-between bg-gray-100 rounded-lg px-3 ">
                <div>
                  <p className="text-xs  rounded-xl py-4 font-sans  ">
                    p0xcA0B09c358B046E0bE015fdscc43xf{" "}
                  </p>
                </div>

                <div className="mt-4">
                  <CiShare1 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faqs3 />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};
export default Screen3;
