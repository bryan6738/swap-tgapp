import React, { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./MainForm.css";

const popularCoins = [
  "ton",
  "sol",
  "eth",
  "trx",
  "bnb",
  "btc",
  "usdc",
  "xrp",
  "doge",
  "ada",
  "shib",
  "avax",
  "usdterc20",
  "usdtbep20",
  "usdttrc20",
  "usdtspl",
  "usdtton",
  "dot",
  "bch",
  "near",
  "link",
  "matic",
  "ltc",
  "icp",
];

const MainCard = ({ children }) => <div className="main-card">{children}</div>;

const SwapBar = ({ children, className }) => (
  <div className={`swap-bar ${className}`}>{children}</div>
);

const Text = ({ text }) => <div className="text">{text}</div>;

const SecondaryCard = ({ children }) => (
  <div className="secondary-card">
    <div className="secondary-card-content">{children}</div>
  </div>
);

const ChevronIcon = () => (
  <svg className="chevron-icon" viewBox="0 0 24 24">
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
  </svg>
);

const UnlockIcon = () => (
  <svg className="unlock-icon" viewBox="0 0 448 512">
    <path d="M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z"></path>
  </svg>
);

const FloatingRateText = () => {
  const { t } = useTranslation();
  return <div className="floating-rate-text"> {t("Floating Rate")}</div>;
};

const SwapIcon = () => (
  <svg className="swap-icon" viewBox="0 0 24 24">
    <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z"></path>
  </svg>
);

const SwapButton = ({ onClick }) => (
  <div className="swap-button" onClick={onClick}>
    <SwapIcon />
  </div>
);

const ExchangeButton = () => {
  const { t } = useTranslation();
  return (
    <Link to="/exchange" className="exchange-button">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
        {t("Exchange")}
      </button>
    </Link>
  );
};

const CoinDropdown = ({
  show,
  searchValue,
  handleSearch,
  tempCoinList,
  handleCoinSelect,
}) => {
  const { t } = useTranslation();

  return (
    show && (
      <div className="dropdown-menu">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          className="search-input"
          placeholder={t("Search")}
        />
        <div className="coin-list">
          {tempCoinList.map(
            (item, key) =>
              item.visible &&
              item.coin && (
                <div
                  key={key}
                  onClick={() => handleCoinSelect(item.coin)}
                  className="coin-item"
                >
                  <img
                    src={item.coin?.image}
                    alt={item.coin?.symbol}
                    className="coin-image"
                  />
                  <span className="coin-symbol">
                    {item.coin?.symbol?.toUpperCase()}
                  </span>
                  <span className="coin-name">{item.coin?.name}</span>
                </div>
              ),
          )}
        </div>
      </div>
    )
  );
};

const LoadingSpinner = () => <div className="custom-spinner"></div>;

const MainForm = (props) => {
  const { exchangeInfo, setExchangeInfo } = props;
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [fromCoin, setFromCoin] = useState(exchangeInfo.fromCoin);
  const [toCoin, setToCoin] = useState(exchangeInfo.toCoin);
  const [fromCoinAmount, setFromCoinAmount] = useState(
    exchangeInfo.fromCoinAmount,
  );
  const [toCoinAmount, setToCoinAmount] = useState(exchangeInfo.toCoinAmount);
  const [tempCoinList, setTempCoinList] = useState([]);
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [minAmount, setMinAmount] = useState(0);
  const { t } = useTranslation();

  const api_key = import.meta.env.VITE_API_KEY;
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = debounce(async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort(); // Cancel any previous requests
      }
      abortControllerRef.current = new AbortController(); // Create new controller

      try {
        const response = await axios.get(
          `https://api.simpleswap.io/get_all_currencies?api_key=${api_key}`,
          { signal: abortControllerRef.current.signal }, // Pass signal for cancellation
        );
        const dataFiltered = response.data.filter((item) => {
          return item && item.symbol !== "xrp" && item.symbol !== "xrpbsc";
        });
        const popularCoinList = popularCoins.map((item) =>
          dataFiltered.find((coin) => coin.symbol === item),
        );

        const allCoinList = dataFiltered.filter(
          (item) => !popularCoins.includes(item.symbol) && !item.isFiat,
        );
        console.log("allCoinList", allCoinList);
        const coinList = [...popularCoinList, ...allCoinList];
        const tempList = coinList.map((item) => ({
          coin: item,
          visible: true,
        }));
        setTempCoinList(tempList);

        if (minAmount === 0) {
          getMinAmount();
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Previous request canceled");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    }, 300); // Debounce input by 300ms

    fetchData();
  }, []);

  useEffect(() => {
    const info = {
      fromCoin: fromCoin,
      toCoin: toCoin,
      fromCoinAmount: fromCoinAmount,
      toCoinAmount: toCoinAmount,
    };
    setExchangeInfo(info);
  }, [fromCoin, toCoin, fromCoinAmount, toCoinAmount]);

  const getEstimateAmount = debounce(async (fromAmount) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const response = await axios.get(
        `https://api.simpleswap.io/get_estimated?api_key=${api_key}&fixed=false&currency_from=${fromCoin.symbol}&currency_to=${toCoin.symbol}&amount=${parseFloat(fromAmount)}`,
        { signal: abortControllerRef.current.signal },
      );
      setToCoinAmount(response.data);
      setIsLoading(false);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error getting Estimate Amount:", error);
      }
    }
  }, 1000);

  const getMinAmount = async (coin1 = fromCoin, coin2 = toCoin) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const response = await axios.get(
        `https://api.simpleswap.io/get_ranges?api_key=${api_key}&fixed=true&currency_from=${coin1.symbol}&currency_to=${coin2.symbol}`,
        { signal: abortControllerRef.current.signal },
      );
      setMinAmount(response.data.min);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error getting Min Amount:", error);
      }
      setMinAmount(0);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (
      inputValue === "" ||
      inputValue === "." ||
      /^-?\d*\.?\d*$/.test(inputValue)
    ) {
      setFromCoinAmount(inputValue);
      if (parseFloat(inputValue) < parseFloat(minAmount)) {
        setToCoinAmount("Swap size too small");
      } else if (
        inputValue !== "" &&
        inputValue !== "." &&
        !isNaN(parseFloat(inputValue))
      ) {
        setIsLoading(true);
        getEstimateAmount(inputValue);
      } else {
        setToCoinAmount("0");
      }
    }
  };

  const handleReversal = () => {
    let tempCoin = fromCoin;
    setFromCoin(toCoin);
    setToCoin(tempCoin);
    getMinAmount();
    getEstimateAmount(fromCoinAmount);
  };

  const handleSearch = (e, setSearchValue, setShowDropdown) => {
    let tempCoins = tempCoinList.map((item) => ({
      ...item,
      visible:
        item.coin?.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.coin?.symbol.toLowerCase().includes(e.target.value.toLowerCase()),
    }));
    setTempCoinList(tempCoins);
    setSearchValue(e.target.value);
    setShowDropdown(true);
  };

  const initCoinList = () => {
    const tempList = tempCoinList.map((item) => ({ ...item, visible: true }));
    setTempCoinList(tempList);
  };

  const handleCoinSelect = (coin, isFromCoin) => {
    if (isFromCoin) {
      setFromCoin(coin);
      setShowDropdown1(false);
    } else {
      setToCoin(coin);
      setShowDropdown2(false);
    }
    setFromCoinAmount(0);
    setToCoinAmount(0);
    setSearchValue1("");
    setSearchValue2("");
    initCoinList();
    getMinAmount(isFromCoin ? coin : fromCoin, isFromCoin ? toCoin : coin);
    getEstimateAmount(0);
  };

  return (
    <MainCard>
      <div className="swap-bar-container">
        <SwapBar className="top-bar">
          <div className="input-text-container">
            <Text text={t("You Send")} />
            <input
              value={fromCoinAmount}
              onChange={handleChange}
              className="amount-input"
              type="text"
            />
          </div>
          <SecondaryCard>
            <div
              className="coin-selector"
              onClick={() => setShowDropdown1(!showDropdown1)}
            >
              <img
                src={fromCoin.image}
                alt={fromCoin.symbol}
                className="coin-image"
              />
              <span>{fromCoin.symbol.toUpperCase().slice(0, 4)}</span>
              <ChevronIcon />
            </div>
          </SecondaryCard>
        </SwapBar>
        <CoinDropdown
          show={showDropdown1}
          searchValue={searchValue1}
          handleSearch={(e) =>
            handleSearch(e, setSearchValue1, setShowDropdown1)
          }
          tempCoinList={tempCoinList}
          handleCoinSelect={(coin) => handleCoinSelect(coin, true)}
        />
      </div>
      <div className="middle-section">
        <div className="floating-rate-container">
          <UnlockIcon />
          <FloatingRateText />
        </div>
        <SwapButton onClick={handleReversal} />
      </div>
      <div className="swap-bar-container">
        <SwapBar className="bottom-bar">
          <div className="input-text-container">
            <Text text={t("You Get")} />
            <div className="amount-input-container">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <input
                  value={toCoinAmount}
                  className="amount-input"
                  type="text"
                  readOnly
                />
              )}
            </div>
          </div>
          <SecondaryCard>
            <div
              className="coin-selector"
              onClick={() => setShowDropdown2(!showDropdown2)}
            >
              <img
                src={toCoin?.image}
                alt={toCoin?.symbol}
                className="coin-image"
              />
              <span>{toCoin?.symbol.toUpperCase().slice(0, 4)}</span>
              <ChevronIcon />
            </div>
          </SecondaryCard>
        </SwapBar>
        <CoinDropdown
          show={showDropdown2}
          searchValue={searchValue2}
          handleSearch={(e) =>
            handleSearch(e, setSearchValue2, setShowDropdown2)
          }
          tempCoinList={tempCoinList}
          handleCoinSelect={(coin) => handleCoinSelect(coin, false)}
        />
      </div>
      <ExchangeButton />
    </MainCard>
  );
};

export default MainForm;
