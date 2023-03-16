import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from "react";
import styles from "./Components/sidenav.module.scss"
import { NavLink } from "react-router-dom";
import { navData } from "./lib/navData";

function App() {
  const [open, setopen] = useState(true)
  const toggleOpen = () => {
      setopen(!open)
  }

  return (
    <div>
      <header>
      <div className='Topbar'>
            <button className='menuBtn' onClick={toggleOpen}>
                {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
            </button>
        </div>
      </header>
      <div className="App">
      <div className={open?styles.sidenav:styles.sidenavClosed}>
        {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
