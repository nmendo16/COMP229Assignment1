import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <nav>
          <ul>
          <img src="/logo.png" alt="Naomi's Logo" width="130" height="130" />
            <br />
            <br />
            <li><Link to="/"> Home</Link></li> 
            <hr />
            <li><Link to="/about">About</Link></li>
            <hr />
            <li><Link to="/project">Project</Link></li>
            <hr />
            <li><Link to="/services">Services</Link></li>
            <hr />
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      );
    }
