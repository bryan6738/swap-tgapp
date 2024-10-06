import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import transitionFadeTop from "../assets/transitionfadetop.svg";
import StandardLogo from "../assets/StandardLogo.svg";
import StandardLogoR from "../assets/StandardLogoR.svg";
import StandardLogoC from "../assets/StandardLogoC.svg";
import RotatingBox from "./RotatingBox";
import HomePageFooterSwap from "./HomePageFooterSwap";
import TelegramLogo from "../assets/telegram-logo.svg";
import XLogo from "../assets/x-logo.svg";
import DexTool from "../assets/dextools-logo.svg";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [slogo, setSlogo] = useState(StandardLogo);

  useEffect(() => {
    if (i18n.language === "en") {
      setSlogo(StandardLogo);
    } else if (i18n.language === "ru") {
      setSlogo(StandardLogoR);
    } else {
      setSlogo(StandardLogoC);
    }
  }, [i18n.language]);

  return (
    <footer className="bg-white relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <img
          src={transitionFadeTop}
          alt="Transition Fade Top"
          className="w-full"
        />
      </div>
      <div
        style={{
          position: "relative",
          height: "auto",
          minHeight: "600px",
          width: "100%",
          background: "linear-gradient(to bottom, #7ECEE8, #C4EBF4, #E8E8E8)",
          zIndex: 1,
          paddingBottom: "2rem",
        }}
      >
        <div className="container mx-auto px-7 py-14 text-white">
          <div className="flex items-center justify-center flex-col">
            <img src={slogo} alt="Standard Logo" className="w-64 h-64 mb-4" />
            <div className="text-center">
              <h2 className="text-4xl font-bold montserrat-font mb-3">
                {t("Customer Reviews")}
              </h2>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))",
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.388 4.277a1 1 0 00.95.69h4.462c.969 0 1.371 1.24.588 1.81l-3.614 2.623a1 1 0 00-.364 1.118l1.388 4.276c.3.921-.755 1.688-1.54 1.118l-3.614-2.623a1 1 0 00-1.176 0l-3.614 2.623c-.784.57-1.839-.197-1.54-1.118l1.388-4.276a1 1 0 00-.364-1.118L2.049 9.704c-.783-.57-.38-1.81.588-1.81h4.462a1 1 0 00.95-.69l1.388-4.277z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center w-full">
            <div className="w-full md:w-2/3">
              {" "}
              {/* Adjust the width here */}
              <RotatingBox />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <HomePageFooterSwap />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://t.me/+EuvXPhPVd0ZkZTkx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TelegramLogo} alt="Telegram" className="h-16 w-16" />
              </a>
              <a
                href="https://www.dextools.io/app/en/ton/pair-explorer/EQCSIiae_6OWjSwdBqi30AhFteOmXqqYam-ipDbYq6LR498r?t=1725825944429"
                className="dexlogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DexTool} alt="Dex" className="h-12 w-12" />
              </a>
              <a
                href="https://x.com/TeleSwapTON"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={XLogo} alt="X (Twitter)" className="h-16 w-16" />
              </a>
            </div>
            <p className="text-md">TeleSwap 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
