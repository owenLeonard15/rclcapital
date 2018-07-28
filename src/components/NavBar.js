import React from 'react';
import logo from '../images/rcl.png';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar top-navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#home">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#prospectus">Prospectus</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;