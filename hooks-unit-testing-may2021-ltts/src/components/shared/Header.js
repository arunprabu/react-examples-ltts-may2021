import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          <img src={logo} width="32" alt='Logo'/> Hooks Demo
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="/">Home</a> */}
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/1" className="nav-link">Contact Details</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
