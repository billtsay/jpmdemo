import './App.css';
import Pricing from './pages/Pricing';
import Checkout from './pages/Checkout';
import Album from './pages/Album';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/album" element={<Album />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<p>Error</p>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
