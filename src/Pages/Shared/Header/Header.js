import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Header = () => {

  const menuItems = <>
    <li><Link to="/">Home</Link> </li>
  </>


  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" />
        </a>
        <button className="btn btn-outline-success" type="submit">Get Started</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;