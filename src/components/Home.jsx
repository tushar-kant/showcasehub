import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroImage from '../assets/College-Student.png';
import Footer from '../pages/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from '../components/hooks/useInView';
import './Home.css';
import Statistics from './Statistics';
import { saveAs } from 'file-saver';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { delay: 0.3, type: 'spring', stiffness: 100 }
  }
};

function Home() {
  const [setRef, inView] = useInView({ threshold: 0.2 });
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/email/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Subscribed successfully!');
        setEmail(''); // Clear the email input after submission
      } else {
        setMessage(result.message || 'Subscription failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Helmet>
        <title>ShowcaseHub - Explore Projects, Ebooks, and Interview Questions</title>
        <meta name="description" content="Discover and explore a variety of projects, ebooks, and interview questions categorized by various domains on ShowcaseHub. Learn, contribute, and showcase your own projects to the world." />
        <meta name="keywords" content="ebook, free ebook, download, project, source code, free project, showcasehub, interview questions" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <motion.div
        className="container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        ref={setRef}
      >
        <div className="row align-items-center vh-90">
          <div className="col-md-7 text-center text-md-left">
            <motion.h1 className="display-3 font-weight-bold mb-4" variants={itemVariants}>
              Welcome to <span className='text-success'><strong>ShowcaseHub</strong></span>
            </motion.h1>
            <motion.p className="lead mb-4" variants={itemVariants}>Discover and explore projects, ebooks, and interview questions categorized by various domains.</motion.p>
            <motion.p className="mb-4" variants={itemVariants}>ShowcaseHub is a platform where you can find a variety of projects, ebooks, and interview questions ranging from frontend to backend, mobile apps to web applications, and much more.</motion.p>
            <div className="container">
              <Link className="btn btn-success btn-lg m-2" to="/projects" role="button">Explore Projects</Link>
              <Link className="btn btn-success btn-lg m-2" to="/ebook" role="button">Explore Ebooks</Link>
              <Link className="btn btn-success btn-lg m-2" to="/interview-questions" role="button">Interview Questions</Link>
              <Link className="btn btn-outline-secondary btn-lg m-2" to="/partner" role="button">Become a Partner</Link>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <motion.img src={heroImage} className="img-fluid" alt="Hero Illustration" variants={itemVariants} />
          </div>
        </div>
        <Statistics />
        <div className="row text-center mt-5">
          {['Learn', 'Contribute', 'Showcase', 'Interview Questions'].map((title, index) => (
            <motion.div className="col-md-3 mb-4" key={index} variants={itemVariants}>
              <div className="icon-box">
                <h2 className="font-weight-bold">{title}</h2>
                <p>{title === 'Learn' ? 'Explore projects and ebooks to learn new technologies, frameworks, and best practices.' :
                  title === 'Contribute' ? 'Find projects and ebooks where you can contribute and collaborate with other developers and authors.' :
                    title === 'Showcase' ? 'Showcase your own projects and ebooks to the world and get feedback from the community.' :
                      'Prepare for your next job interview with our comprehensive collection of interview questions.'}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription Section */}
        <div className="row justify-content-center my-5">
          <div className="col-md-8 text-center">
            <h2 className="font-weight-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="lead mb-4">Stay updated with the latest projects, ebooks, and interview questions delivered straight to your inbox.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-success" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
            {message && <p className="mt-3">{message}</p>}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Home;
