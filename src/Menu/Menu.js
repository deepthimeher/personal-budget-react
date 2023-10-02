import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    
    <div class="menu">
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="https://fabionolasco.com/">Visit our Main Website</Link></li>
        </ul>
    </div>
  );
}

export default Menu;
