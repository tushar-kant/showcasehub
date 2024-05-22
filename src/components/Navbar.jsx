import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  // <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  //   <div className="container">
  //     <Link className="navbar-brand text-white" to="/">ProjeXplore</Link>
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item">
  //           <Link className="nav-link text-white" to="/">Home</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link text-white" to="/projecttype">Projects</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  <nav class="navbar navbar-expand-lg bg-cyan ">
    <div class="container-fluid">
      <a class="navbar-brand text-success" href="/">show<span className='text-danger'>case</span>hub</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/projecttype">Projects</Link>
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
