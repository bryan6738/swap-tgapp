import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';

function App() {
  return (
    <Routes>
      <Route path='/swap-tgapp/' element={<Layout />} />
      <Route path='/swap-tgapp/exchange' element={<Screen2 />} />
      <Route path='/swap-tgapp/screen3' element={<Screen3 />} />
    </Routes>
  );
}

export default App;
