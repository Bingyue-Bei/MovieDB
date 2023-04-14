import './App.css';
import Home from './components/Home';
import LikedPage from './components/LikedPage';
import BlockPage from './components/BlockPage';
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./assets/logo.png"
//Navigation Bar, Router
function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <Link className="nav-text" to="/">
          Home
        </Link>
        <Link className="nav-text" to="/liked">
          Liked Page
        </Link>
        <Link className="nav-text" to="/block">
          Block Page
        </Link>
        <Search />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/block" element={<BlockPage />} />
      </Routes>
      <footer>
        <p>Footer Place Holder</p>
      </footer>
    </Router>
  );
}

export default App;
