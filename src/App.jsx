import { Route, Routes, useNavigate } from 'react-router-dom';
import Exchange from './pages/Exchange';
import Status from './pages/Status';
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';
import { useState, useEffect } from 'react';

const initInfo = {
  fromCoin: {
    symbol: 'sol',
    name: 'Solana',
    image: 'https://static.simpleswap.io/images/currencies-logo/sol.svg',
  },
  toCoin: {
    symbol: 'ton',
    name: 'Toncoin',
    image: 'https://static.simpleswap.io/images/currencies-logo/ton.svg',
  },
  fromCoinAmount: 0,
  toCoinAmount: 0
}

function App() {
  const [exchangeInfo, setExchangeInfo] = useState(initInfo);
  const navigate = useNavigate();

  useEffect(() => {
    const handleSwapNowClick = () => {
      setExchangeInfo(initInfo);
      navigate('/swap-tgapp/', { replace: true });
    };

    window.addEventListener('swapNowClicked', handleSwapNowClick);

    return () => {
      window.removeEventListener('swapNowClicked', handleSwapNowClick);
    };
  }, [navigate]);

  return (
    <Routes>
      <Route
        path='/swap-tgapp/'
        element={<Home props={{ exchangeInfo, setExchangeInfo }} />}
      />
      <Route
        path='/swap-tgapp/exchange'
        element={<Exchange props={{ exchangeInfo, setExchangeInfo }} />}
      />
      <Route path='/swap-tgapp/status/:id' element={<Status />} />
      <Route path='/swap-tgapp/roadmap' element={<RoadMap />} />
    </Routes>
  );
}

export default App;
