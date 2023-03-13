import React from "react";
import { Link } from "react-router-dom";
import './header.scss';

function Header() {
    return (
        <div className="nav-bar">
            <div className="nav-left">
                <p>JPMChase Inc.</p>
            </div>
            <div className="nav-right">
                <nav>
                    <Link to="/" className="links">SignIn</Link>
                    <Link to="/album" className="links">Album</Link>
                    <Link to="/pricing" className="links">Pricing</Link>
                    <Link to='/checkout' className="links">Checkout</Link>
                </nav>
            </div>
        </div>
    )
}
export default Header;