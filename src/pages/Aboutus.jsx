import React from 'react';
import Navbar from '../components/Navbar';
import './AboutUs.css'; // Create a CSS file for additional styles

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center display-4 font-weight-bold mb-4">About ShowcaseHub</h1>
        <p className="lead text-center mb-5">
          Welcome to ShowcaseHub, your ultimate destination for innovative project management solutions.
        </p>
        <section className="my-4">
          <h2 className="font-weight-bold">Our Mission</h2>
          <p>
            At ShowcaseHub, our mission is to empower individuals and organizations to achieve their goals through effective project management. We believe in delivering tools and resources that simplify project planning, execution, and completion.
          </p>
        </section>
        <section className="my-4">
          <h2 className="font-weight-bold">Our Story</h2>
          <p>
            Founded in 2024, ShowcaseHub started as a small team of passionate project managers and developers who saw a need for better project management tools. Over the years, we have grown into a comprehensive platform that serves thousands of users worldwide.
          </p>
        </section>
        <section className="my-4">
          <h2 className="font-weight-bold">What We Offer</h2>
          <ul className="list-unstyled">
            <li>🌟 Intuitive project management tools</li>
            <li>📊 Comprehensive project tracking</li>
            <li>🗓️ Resource allocation and scheduling</li>
            <li>💬 Collaboration and communication features</li>
            <li>📈 Robust reporting and analytics</li>
          </ul>
        </section>
        <section className="my-4">
          <h2 className="font-weight-bold">Our Team</h2>
          <p>
            Our team is composed of experienced professionals from diverse backgrounds, including project management, software development, and customer support. We are committed to providing top-notch service and continuously improving our platform to meet the evolving needs of our users.
          </p>
        </section>
        <section className="my-4">
          <h2 className="font-weight-bold">Get In Touch</h2>
          <p>
            We love to hear from our users! Whether you have a question, feedback, or need support, feel free to <a href="/contactus" className="text-success">contact us</a>. Our team is here to help you succeed.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
