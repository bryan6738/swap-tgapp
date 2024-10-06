import Footer from "../Components/Footer";
import Faqs3 from "../Components/Faqs3";
import Deposit from "../Components/Deposit";
import Exchange_id from "../Components/Exchange_id";
import { IoCopyOutline } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./LoadingSpinner.css";
import transitionFade from "../assets/transitionfade.svg";
import { sendMessage } from "../Components/SendMessage";

const api_key = import.meta.env.VITE_API_KEY;
let previousStatus = null;

const Status = () => {
  const [status, setStatus] = useState();
  let { id } = useParams();
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  window?.Telegram.WebApp?.ready();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(status.address_to)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 600);
      })
      .catch((error) => console.error("Error copying to clipboard:", error));
  };

  const getUSDTvalue = async (currency, amount = 0) => {
    try {
      if (currency.includes("usdt")) {
        return amount;
      } else {
        const usdValue = await axios.get(
          `https://api.simpleswap.io/get_estimated?api_key=${api_key}&fixed=false&currency_from=${currency}&currency_to=usdttrc20&amount=${parseFloat(amount)}`,
        );
        return usdValue.data;
      }
    } catch (error) {
      console.log(error);
      return amount;
    }
  };

  const ExchangeLogger = async (currentStatus) => {
    try {
      const res_burate = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      );
      const inputTokenUSDTValue = await getUSDTvalue(
        currentStatus.currency_from,
        currentStatus.amount_from,
      );
      const outputTokenUSDTValue = await getUSDTvalue(
        currentStatus.currency_to,
        currentStatus.amount_to,
      );
      const HashSent = currentStatus.tx_from
        ? currentStatus.currencies[
            currentStatus.currency_from
          ].tx_explorer.replace("{}", currentStatus.tx_from)
        : null;
      const HashReceived = currentStatus.tx_to
        ? currentStatus.currencies[
            currentStatus.currency_to
          ].tx_explorer.replace("{}", currentStatus.tx_to)
        : null;
      const bodyContext = {
        ExchangeID: currentStatus.id,
        UserID: window.Telegram.WebApp.initDataUnsafe?.user?.id,
        UserName: window.Telegram.WebApp.initDataUnsafe?.user?.username,
        AmountSent: currentStatus.amount_from,
        AmountReceived: currentStatus.amount_to,
        TokenSent: currentStatus.currency_from,
        TokenReceived: currentStatus.currency_to,
        InputTokenUSDTValue: inputTokenUSDTValue,
        OutputTokenUSDTValue: outputTokenUSDTValue,
        BTC_USDRate: res_burate.data.bitcoin.usd,
        ExchangeTimestamp: currentStatus.timestamp,
        ExchangeFinished: currentStatus.status != "waiting",
        AddressSent: currentStatus.address_from,
        AddressReceived: currentStatus.address_to,
        UserAgent: navigator.userAgent,
        SiteLanguage: navigator.language || navigator.userLanguage,
        AcceptLanguage: navigator.languages
          ? navigator.languages.join(", ")
          : siteLanguage,
        DeviceTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        DeviceOperatingSystem: getDeviceOperatingSystem(),
        HashSent: HashSent,
        HashReceived: HashReceived,
        Status: currentStatus.status,
      };
      const response = await axios.post(
        "https://teleswap-bot.replit.app/log-exchange",
        bodyContext,
      );

      if (response.ok) {
        console.log("Exchange data logged successfully");
      } else {
        console.error(
          `Failed to log exchange data. Status: ${response.status}`,
        );
      }
    } catch (error) {
      console.error(`Error: , ${error}`);
    }
  };

  const processingStatus = (currentStatus) => {
    try {
      axios.post("https://simpleswap-m4vc.onrender.com/processing", {
        username: window.Telegram.WebApp.initDataUnsafe?.user?.username,
        currency_from: currentStatus.currency_from,
        currency_to: currentStatus.currency_to,
        amount: currentStatus.amount_from,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getDeviceOperatingSystem = () => {
    const userAgent = window.navigator.userAgent;
    let os = "Unknown OS";

    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
    else if (userAgent.indexOf("X11") !== -1) os = "UNIX";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (/Android/.test(userAgent)) os = "Android";
    else if (/iPhone|iPad|iPod/.test(userAgent)) os = "iOS";

    return os;
  };

  const handleStatusUpdate = (currentStatus) => {
    if (previousStatus !== currentStatus.status) {
      if (currentStatus.status === "waiting") {
        sendMessage(
          `${t("Exchange Started, waiting on")} ${currentStatus.currency_from.toUpperCase()}${t(" to be deposited! Your exchange ID is")} ${currentStatus.id}`,
        );
        ExchangeLogger(currentStatus);
      } else if (currentStatus.status === "confirming") {
        sendMessage(
          `${t("space_received")}${currentStatus.currency_from.toUpperCase()}${t(" Received!")}`,
        );
        ExchangeLogger(currentStatus);
        processingStatus(currentStatus);
      } else if (currentStatus.status === "exchanging") {
        sendMessage(
          `${t("Swapping")} ${currentStatus.currency_from.toUpperCase()} ${t("for")} ${currentStatus.currency_to.toUpperCase()}${t(" now!")}`,
        );
        ExchangeLogger(currentStatus);
      } else if (currentStatus.status === "sending") {
        sendMessage(
          `${t("Sending Your")} ${currentStatus.currency_to.toUpperCase()}${t(" now!")}`,
        );
        ExchangeLogger(currentStatus);
      } else if (
        currentStatus.status === "finished" ||
        currentStatus.status === "confirmed"
      ) {
        const hash = currentStatus.tx_to
          ? currentStatus.currencies[
              currentStatus.currency_to
            ].tx_explorer.replace("{}", currentStatus.tx_to)
          : null;
        sendMessage(
          `${t("Your swap from")} ${currentStatus.currency_from.toUpperCase()} ${t("to")} ${currentStatus.currency_to.toUpperCase()}${t(" has been completed! Thank You for using TeleSwap.\n\nHere is your transaction hash: ")} ${hash}`,
        );
        ExchangeLogger(currentStatus);
      }
      previousStatus = currentStatus.status;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.simpleswap.io/get_exchange?api_key=${api_key}&id=${id}`,
        );
        setStatus(response.data);
        setIsLoading(false);
        handleStatusUpdate(response.data);
        if (
          response.data.status !== "finished" &&
          response.data.status !== "confirmed"
        ) {
          setTimeout(fetchData, 5000);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    const timer = setTimeout(fetchData, 5000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background: "linear-gradient(to bottom, #E8E8E8, #C4EBF4, #7ECEE8)",
      }}
    >
      <Navbar backgroundColor="rgba(232, 232, 232, 0.5)" />
      <div className="flex-grow container mx-auto px-4 py-4">
        {status && (
          <div>
            <Exchange_id props={status.id} />
            <Deposit status={status} />
            <div className="my-6 p-5 bg-white rounded-xl shadow-lg">
              <div className="flex flex-col bg-white">
                <div>
                  <h1 className="font-semibold bg-white p-2">
                    {t("Swap details")}
                  </h1>
                </div>
                <div className="p-3">
                  <p className="text-xs font-[500] text-black/60 pb-4">
                    {t("You Get")}:
                  </p>
                  <div className="flex">
                    <h2 className="font-semibold text-lg flex items-center">
                      <img
                        className="w-6 h-6"
                        src={status.currencies[status.currency_to].image}
                        alt=""
                      />
                      <p className="text-ls font-[500] text-black/60 pl-2">{` ≈ ${status.amount_to}`}</p>
                    </h2>
                  </div>
                  <div className="py-2">
                    <p className="text-xs font-[500] text-black/60">
                      {t("Recipient address:")}
                    </p>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-lg p-2 max-w-full">
                    <div className="flex-grow mr-2 min-w-0">
                      <p className="text-xs font-sans truncate">
                        {status.address_to}
                      </p>
                    </div>
                    <button
                      className="bg-blue-400 text-white p-2 rounded-lg flex-shrink-0"
                      onClick={copyToClipboard}
                    >
                      <IoCopyOutline />
                    </button>
                  </div>
                  {copied && (
                    <div className="mt-2 text-sm bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-md opacity-100 transition-opacity duration-500 ease-in-out">
                      {t("Copied address to clipboard")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <Faqs3 />
      </div>
      <Footer />
      <div
        className={`fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 ${isLoading ? "" : "hidden"}`}
      >
        <div className="custom-spinner"></div>
      </div>
      <img
        src={transitionFade}
        alt="Transition Fade"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
      />
    </div>
  );
};

export default Status;
