import React from 'react'
import "../Header/header.css";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";

// Updated HTML
const Header = () => {
    return (
        <div>
            <div className="navigation-bar">
                {/* Navigation Bar Content */}
            </div>
            <div className="midLine">
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr className='navBarPage'>
                            <td align="left">
                                <a target="_blank"> 
                                <Link to="/"><img className= "logo" align="left" border="0" src={Logo} alt="Logo" title="Logo" width="197.2" /></Link>
                                </a>
                                <td align="right" className="navbar-links">
                                                <div className="dropdown">
                                                    <a>Menu</a>
                                                    <div className="dropdown-content">
                                                        <Link to= "/menu2"><a>Sweet/Sour Candy</a></Link>
                                                        <Link to= "/menu"><a>Spicy Candy</a></Link>
                                                    </div>
                                                </div>
                                                <div className="dropdown">
                                                    <a>Order</a>
                                                    <div className="dropdown-content">
                                                        <Link to="/order"><a>Order sweet Spicy</a></Link>
                                                        <Link to="/order2"><a>Order giftbasket</a></Link>
                                                    </div>
                                                </div>
                                                <div className="dropdown">
                                                    <a>Contact</a>
                                                    <div className="dropdown-content">
                                                        <Link  to="/contact"><a>All Platforms</a></Link>
                                                        <a href="https://www.instagram.com/spicycupz/">Instagram</a>
                                                        <a href="https://snapchat.com">Snapchat</a>
                                                    </div>
                                                </div>
                                                <span className="login-button">
                                                    <a href="#">Login</a>
                                                </span>
                                            </td>




                            </td>
                            <td align="right" className="navbar-links">
                                {/* Navigation Links */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Header;
