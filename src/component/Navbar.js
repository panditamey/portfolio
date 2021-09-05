import React from 'react';
import "./Navbar.css";

import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <>
      <footer>

        <nav>
          <h2>Portfolio</h2>
          <ul class="navbar">
            <li> <Link to="/"> Home</Link></li>
            <li> <Link to="/about"> About</Link></li>
            <li> <Link to="/skills"> Skills</Link></li>
            <li> <Link to="/services"> Services</Link></li>
            <li> <Link to="/contact"> Contact</Link></li>
          </ul>
        </nav>
        
       
      
      </footer>

    </>
  )

}