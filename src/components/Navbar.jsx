import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../assets/image1.png';
import './Navbar.css';
import Breadcrumbs from './Breadcrumbs'; // Check the import statement here

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoimg} alt="Logo" className="navbar-logo" width="120" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link text" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interview-questions">InterviewQuestions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ebook">Ebooks</Link>
            </li>
          </ul>
        </div>
      </div>
      <Breadcrumbs /> {/* Ensure that Breadcrumbs is correctly rendered here */}

    </nav>
    <div className="navbar-offset">
      {/* This div provides space for the fixed Navbar */}
    </div>
  </>
);

export default Navbar;
