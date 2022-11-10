import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../images/logo.png';
import './Navbar.css'
const Navbar = () => {
     return(
          <Fragment>
               <div className="menu_section">
                    <div className="container">
                         <div className="menu_area">
                              <div className="menu_logo">
                                   <NavLink to="/">
                                        <img src={Logo} alt="image" />
                                   </NavLink>
                              </div>
                              <div className="main_menu">
                                   <ul className="menu">
                                        <li>
                                             <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/about">About</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/collection">Collections</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/product">Product</NavLink>
                                        </li>
                                        <li>
                                             <Link to="#">Pages</Link>
                                        </li>
                                        <li>
                                             <NavLink to="/contact">Contact</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/login">Login</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/join">Join Now</NavLink>
                                        </li>
                                   </ul>
                              </div> 
                         </div> 
                    </div> 
               </div>
          </Fragment>
     )
}

export default Navbar