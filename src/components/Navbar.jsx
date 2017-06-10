import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav class="nav navbar">
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/cart"}>Cart</Link>
  </nav>
)

export default NavBar;