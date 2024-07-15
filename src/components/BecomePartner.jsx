import React from 'react';
import Navbar from '../components/Navbar';

const BecomePartner = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h1 className="mb-4">Become a Partner</h1>
              <p>
                Interested in showcasing your project on our platform?
                Contact us to submit your project details and join our growing community of developers and innovators.
              </p>
              <a href="mailto:test@gmail.com" className="btn btn-primary mt-4 mb-3">
                Email Us
              </a>
            </div>
            <hr />
            <div className="text-center mt-4">
              <h3>Why Partner With Us?</h3>
              <p>
                By becoming a partner, you'll have the opportunity to:
              </p>
              <ul className="list-unstyled">
                <li>Gain visibility for your projects</li>
                <li>Connect with other developers</li>
                <li>Receive feedback and support</li>
                <li>Be part of a collaborative community</li>
              </ul>
            </div>
            <hr />
            <div className="text-center mt-4">
              <h3>Contact Information</h3>
              <p>If you have any questions, feel free to reach out:</p>
              <p>Email: <a href="mailto:showcasehub.tech@gmail.com">showcasehub.tech@gmail.com</a></p>
              {/* <p>Phone: +123456789</p> */}
            </div>
            <hr />
            <div className="text-center mt-4">
              <h3>Follow Us</h3>
              <p>Stay updated by following us on social media:</p>
              <p>
                <a href="https://twitter.com">Twitter</a> | 
                <a href="https://linkedin.com" className="ml-2">LinkedIn</a> | 
                <a href="https://github.com" className="ml-2">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomePartner;
