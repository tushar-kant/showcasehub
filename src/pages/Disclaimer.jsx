import React from 'react';
import Navbar from '../components/Navbar';

const Disclaimer = () => {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h1>Disclaimer</h1>
      <p className="lead">
        The information provided by ProjeXplore ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
      </p>

      <section className="my-4">
        <h2>1. Professional Disclaimer</h2>
        <p>
          The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
        </p>
      </section>

      <section className="my-4">
        <h2>2. External Links Disclaimer</h2>
        <p>
          The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
        <p>
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
        </p>
      </section>

      <section className="my-4">
        <h2>3. Limitation of Liability</h2>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>
      </section>

      <section className="my-4">
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, you can contact us at <a href="/contactus">Contact Us</a>.
        </p>
      </section>
    </div>
    </>
  );
};

export default Disclaimer;
