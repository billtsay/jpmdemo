import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import Header from './pages/Header';
import Navbar from './Navbar';

function Register() {
  return(
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Registration />
      </main>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/registration" element={<Register />} />
            <Route path='/' element={<SignIn/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}
export default App;
