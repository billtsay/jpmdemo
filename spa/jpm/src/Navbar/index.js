import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="left-nav">
                <div className="links" >
                    <a href="/">Home</a>
                    <a href="/signin">Sign-In</a>
                    <a href="/registration">Registration</a>
                </div>
            </div>
            <div className="right-nav">
                <input type='text' placeholder="Search..." />
                <button>Search
                </button>
            </div>
        </div>
    );
}
export default Navbar;