import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import interviewQuestions from '../../data/interviewQuestions.json';
import Navbar from '../Navbar';
import Footer from '../../pages/Footer';
import './InterviewCategories.css'; // Import external CSS file
import Breadcrumbs from '../Breadcrumbs';
import { Helmet } from 'react-helmet-async'; // Import Helmet from react-helmet-async
import { motion } from 'framer-motion'; // Import framer-motion

const InterviewCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const pageTitle = 'Interview Questions - ShowcaseHub.tech';
  const metaDescription = 'Explore various categories of interview questions to help you prepare for your next job interview.';

  const filteredCategories = interviewQuestions.filter(category =>
    category.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="/interview-categories" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <Navbar />
      <div className="container mt-4" id="interview-categories-container">
        <h1 className="text-center mb-4 display-4">Interview Question Categories</h1>
        <Breadcrumbs />
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search domain categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="interview-categories-row">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <motion.div
                key={index}
                className="col mb-4"
                id={`category-card-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <Link to={`/interview-questions/${category.category.toLowerCase()}`} className="text-decoration-none">
                  <div className="card h-100 shadow-lg border-0 rounded-4 category-card" id="category-card">
                    <div className="card-body d-flex flex-column justify-content-between p-4">
                      <h5 className="card-title text-primary font-weight-bold" id="category-card-title">{category.category}</h5>
                      <hr />
                      <p className="card-description text-secondary mt-3" id="category-card-description">{category.description}</p>
                      <p className="card-text mt-3 text-secondary" id="category-card-text">
                        <small className="text-muted" id="category-card-text-small">View Questions</small>
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col">
              <p className="text-center">No categories found</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterviewCategories;
