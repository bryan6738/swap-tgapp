import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const summaryStyle = {
  outline: 'none',
  cursor: 'pointer',
  margin: 0,
};

const Faqs3 = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-black rounded-xl shadow-md overflow-hidden">
      <div className='text-[18px] font-[600] ml-7 my-2 pt-3'>
        <p>{t("Have A Question?")}</p>
      </div>
      <div className="container flex flex-col justify-center px-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y divide-gray-700">
          <details className='mx-4'>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[90%] text-black font-[400] text-[15px]'>{t("I sent a deposit, what's next?")}</h1>
              <span><IoIosArrowDown size={25} /></span>
            </summary>
            <div className="pb-4 pt-3">
              {t("Answer_1")}
            </div>
          </details>
          <details className='mx-4'>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[100%] text-black font-[400] text-[15px] leading-tight'>
                {t("How long does it take to exchange the coins?")}
              </h1>
              <span><IoIosArrowDown size={25} /></span>
            </summary>
            <div className="pb-4">
              <p className='mb-3'>
                {t("Answer_21")}
                <br /><br />
                {t("Answer_22")}
              </p>
            </div>
          </details>
          <details className='mx-4'>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[85%] text-black font-[400] text-[15px]'>{t("What happens if I close the exchange page?")}</h1>
              <span><IoIosArrowDown size={25} /></span>
            </summary>
            <div className="pb-4">
              <p>
                {t("Answer_3")}
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Faqs3;
