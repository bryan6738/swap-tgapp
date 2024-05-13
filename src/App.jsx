import { Route, Routes } from 'react-router-dom';
import Exchange from './pages/Exchange';
import Status from './pages/Status';
import Home from './pages/Home';
import { useState } from 'react';

const initInfo = {
  fromCoin: {
    symbol: 'btc',
    image: 'https://static.simpleswap.io/images/currencies-logo/btc.svg',
  },
  toCoin: {
    symbol: 'eth',
    image: 'https://static.simpleswap.io/images/currencies-logo/eth.svg',
  },
  fromCoinAmount: 0,
  toCoinAmount: 0
}

function App() {
  const [exchangeInfo, setExchangeInfo] = useState(initInfo)

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
      <Route path='/swap-tgapp/status' element={<Status />} />
    </Routes>
  );
}

export default App;
