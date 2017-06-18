import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (

<nav className="navbar navbar-light bg-faded">
      <Link className="nav-item nav-link active" to={"/"}>Home<span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to={"/cart"}>Cart</Link>
      <Link className="nav-item nav-link" to={"/about"}>About</Link>
</nav>

   
   
)

export default NavBar;