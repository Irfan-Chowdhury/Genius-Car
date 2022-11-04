import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Header = () => {

  const menuItems = <>
    <li><Link to="/">Home</Link> </li>
  </>


  return (
    <div>
      {/* <nav className="navbar bg-light">
        <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          <button className="btn btn-outline-success" type="submit">Get Started</button>
        </div>
        
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg">
        <div className="container navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Bootstrap" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-danger" type="submit">Appointment</button>
              </form>
            </div>

        </div>
      </nav>
    </div>
  );
};

export default Header;