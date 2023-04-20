import './App.css';
import Home from './components/Home';
import LikedPage from './components/LikedPage';
import BlockPage from './components/BlockPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from "./components/Footer";
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/block" element={<BlockPage />} />
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
