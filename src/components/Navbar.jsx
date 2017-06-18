import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => (

  <nav className="navbar">
    <ul>
      <li><Link className="link" to={"/"}>Home</Link></li>
      <li><Link className="link" to={"/cart"}>Cart</Link></li>
      <li><Link className="link" to={"/about"}>About</Link></li>
    </ul>
  </nav>



)

export default NavBar;