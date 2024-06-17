import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h1>About showcasehub</h1>
      <p className="lead">
        Welcome to showcasehub, your ultimate destination for innovative project management solutions.
      </p>
      <section className="my-4">
        <h2>Our Mission</h2>
        <p>
          At showcasehub, our mission is to empower individuals and organizations to achieve their goals through effective project management. We believe in delivering tools and resources that simplify project planning, execution, and completion.
        </p>
      </section>
      <section className="my-4">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, showcasehub started as a small team of passionate project managers and developers who saw a need for better project management tools. Over the years, we have grown into a comprehensive platform that serves thousands of users worldwide.
        </p>
      </section>
      <section className="my-4">
        <h2>What We Offer</h2>
        <ul>
          <li>Intuitive project management tools</li>
          <li>Comprehensive project tracking</li>
          <li>Resource allocation and scheduling</li>
          <li>Collaboration and communication features</li>
          <li>Robust reporting and analytics</li>
        </ul>
      </section>
      <section className="my-4">
        <h2>Our Team</h2>
        <p>
          Our team is composed of experienced professionals from diverse backgrounds, including project management, software development, and customer support. We are committed to providing top-notch service and continuously improving our platform to meet the evolving needs of our users.
        </p>
      </section>
      <section className="my-4">
        <h2>Get In Touch</h2>
        <p>
          We love to hear from our users! Whether you have a question, feedback, or need support, feel free to <a href="/contactus">contact us</a>. Our team is here to help you succeed.
        </p>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
