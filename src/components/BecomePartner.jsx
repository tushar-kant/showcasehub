import React from 'react';
import Navbar from '../components/Navbar';

const BecomePartner = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5" style={{ maxWidth: '800px' }}>
        <div className="text-center">
          <h1 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Become a Partner</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Interested in showcasing your project on our platform? 
            Contact us to submit your project details and join our growing community of developers and innovators.
          </p>
          <a href="mailto:showcasehub.tech@gmail.com" className="btn btn-primary mt-4 mb-3" style={{ fontSize: '1.1rem' }}>
            Email Us
          </a>
        </div>
        <hr />
        <div className="text-center mt-4">
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Why Partner With Us?</h3>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            By becoming a partner, you'll have the opportunity to:
          </p>
          <ul className="list-unstyled" style={{ fontSize: '1.1rem', color: '#333' }}>
            <li>Gain visibility for your projects</li>
            <li>Connect with other developers</li>
            <li>Receive feedback and support</li>
            <li>Be part of a collaborative community</li>
          </ul>
        </div>
        <hr />
        <div className="text-center mt-4">
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact Information</h3>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>If you have any questions, feel free to reach out:</p>
          <p style={{ fontSize: '1.1rem' }}>
            Email: <a href="mailto:showcasehub.tech@gmail.com" style={{ color: '#007bff' }}>showcasehub.tech@gmail.com</a>
          </p>
          {/* <p>Phone: +123456789</p> */}
        </div>
        <hr />
        <div className="text-center mt-4">
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Follow Us</h3>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>Stay updated by following us on social media:</p>
          <p style={{ fontSize: '1.1rem' }}>
            <a href="https://twitter.com" style={{ color: '#007bff' }}>Twitter</a> | 
            <a href="https://linkedin.com" className="ml-2" style={{ color: '#007bff' }}>LinkedIn</a> | 
            <a href="https://github.com" className="ml-2" style={{ color: '#007bff' }}>GitHub</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BecomePartner;
