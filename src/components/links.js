/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <nav className="nav-bar">
    <h1>Bookstore</h1>
    <ul>
      <li>
        <Link to="/" className="link"> Books </Link>
        <Link to="/categories" className="link"> Categories </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
