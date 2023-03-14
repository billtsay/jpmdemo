import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

const SignIn = React.lazy(() => import('jpm/SignIn'));
const Header = React.lazy(() => import('jpm/Header'));
const Registration = React.lazy(() => import('jpm/Registration'));

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
