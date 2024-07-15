import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>&copy; 2024 showcasehub.tech. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/aboutus" className="text-light mx-2">About Us</Link>
          {/* <Link to="/privacypolicy" className="text-light mx-2">Privacy Policy</Link> */}
          <Link to="/disclaimer" className="text-light mx-2">Disclaimer</Link>
          <Link to="/contactus" className="text-light mx-2">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
