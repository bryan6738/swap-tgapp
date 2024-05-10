import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';

function App() {
  return (
    <Routes>
      <Route path='/tg-mini-app/' element={<Layout />} />
      <Route path='/tg-mini-app/exchange' element={<Screen2 />} />
      <Route path='/tg-mini-app/screen3' element={<Screen3 />} />
    </Routes>
  );
}

export default App;
