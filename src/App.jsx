import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ChefsTablePage from './pages/ChefsTablePage';
import BarPage from './pages/BarPage';
import ReservationsPage from './pages/ReservationsPage';
import SpecialPage from './pages/SpecialPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kitchen" element={<ChefsTablePage />} />
        <Route path="/bar" element={<BarPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/special" element={<SpecialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
