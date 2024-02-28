import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark ${props.mode === "dark" ? "bg-dark" : "bg-light"}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${props.mode === "dark" ? "text-white" : "text-dark"}`} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${props.mode === "dark" ? "text-white" : "text-dark"} ${props.active === "Home" ? "active" : ""}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.mode === "dark" ? "text-white" : "text-dark"} ${props.active === "About" ? "active" : ""}`} to="/about">{props.about}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
