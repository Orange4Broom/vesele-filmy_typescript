import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Watchlist from './pages/watchlist/Watchlist';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='watchlist' element={<Watchlist />} />
      </Routes>
    </>
  )
}

export default App
