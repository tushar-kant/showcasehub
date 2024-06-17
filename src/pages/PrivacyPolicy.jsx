import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5">
      <h1>Privacy Policy</h1>
      <p className="lead">
        Your privacy is important to us. This privacy policy explains what personal data ProjeXplore collects, how we use it, and how we protect it.
      </p>

      <section className="my-4">
        <h2>Information We Collect</h2>
        <p>We collect personal information like your name, email address, and usage data to improve our services.</p>
      </section>

      <section className="my-4">
        <h2>How We Use Your Information</h2>
        <p>We use your data to provide and enhance our services, communicate with you, and ensure security.</p>
      </section>

      <section className="my-4">
        <h2>Sharing Your Information</h2>
        <p>We do not share your personal information with third parties except to comply with legal obligations.</p>
      </section>

      <section className="my-4">
        <h2>Protecting Your Information</h2>
        <p>We implement various security measures to safeguard your data against unauthorized access and disclosure.</p>
      </section>

      <section className="my-4">
        <h2>Contact Us</h2>
        <p>If you have any questions about this privacy policy, please <a href="/contactus">contact us</a>.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
