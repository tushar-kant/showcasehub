import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../assets/image1.png';
import './Navbar.css'; // Import your CSS file


const Navbar = () => (
 
  <nav class="navbar navbar-expand-lg bg-cyan ">
    <div class="container-fluid">
      {/* <a class="navbar-brand text-success" href="/">showcase<span className='text-danger'>HUB</span></a> */}
      <Link className="navbar-brand" to="/">
        <img src={logoimg} alt="Logo" className="navbar-logo" width="120" /> {/* Adjust width as needed */}
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         
          <li class="nav-item">
            <Link class="nav-link text " to="/projecttype">Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/ebook">Ebooks</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
