import React, { useState } from "react";
import './navbar/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';

type NavbarProps = {
  size: 'small' | 'large';
};
const Navbar: React.FC<NavbarProps> = ({ size }) => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="nav-bar">
            <div className="left-nav">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/signin">Sign-In</a>
                    <a href="/album">Album</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/checkout">Checkout</a>
                    <a href="/aboutus">About-Us</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <ReorderIcon /></button>
            </div>
            <div className="right-nav">
                <input type='text' placeholder="Search..." />
                <button>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
