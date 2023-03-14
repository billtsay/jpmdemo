import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Copyright from './pages/Copyright';
import Album from './pages/Album';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/album" element={<Album />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
