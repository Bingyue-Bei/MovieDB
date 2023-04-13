import './App.css';
import Home from './components/Home';
import LikedPage from './components/LikedPage';
import BlockPage from './components/BlockPage';
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider } from 'react-router-dom';
//Navigation Bar, Router
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/liked">Liked Page</Link>
        <Link to="/block">Block Page</Link>
        <Search />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/liked" element={<LikedPage />}/>
        <Route path="/block" element={<BlockPage />}/>
      </Routes>
      <footer> 
        <p>Footer Place Holder</p>
      </footer>
    </Router>
  );
}

export default App;
