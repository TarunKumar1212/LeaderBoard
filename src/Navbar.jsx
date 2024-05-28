import React from 'react';
import { FaBell, FaCoins, FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img 
                style={{width:'50px'}}
                src="img/logo.png" alt="Logo" />
                {/* <span>unfluke</span> */}
            </div>
            <ul className="menu">
                <li><a href="#">LeaderBoard</a></li>
                <li><a href="#">Historical Trading</a></li>
                <li><a href="#">Historical Chart</a></li>
                <li><a href="#">Scanners</a></li>
                <li><a href="#">Alerts</a></li>
                <li><a href="#">Basic Backtest</a></li>
                <li><a href="#">Advanced Backtest</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">My Earnings</a></li>
            </ul>
            <div className="icons">
                <FaBell />
                &nbsp;&nbsp;
                <FaCoins />
                <div className="profile">
                    <img 
                    style={{width:'40px'}}
                    src="img/profile.png" alt="Profile" />
                    <FaCaretDown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
