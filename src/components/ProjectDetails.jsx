import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { Helmet } from 'react-helmet-async';
import Footer from '../pages/Footer';
import Navbar from './Navbar';
import logoimg from '../assets/image1.png';
import './ProjectDetails.css';
import Breadcrumbs from './Breadcrumbs';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { name } = useParams();
  const project = projectsData.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <h2 className="text-center">Project not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const pageTitle = `${project.name} - Simple ${project.name} Project for Beginners with Source Code 2024`;
  const metaDescription = `Learn how to build a ${project.name} using ${project.tech_stack}. This simple ${project.category} project is perfect for beginners and includes complete source code and detailed instructions.`;
  const metaKeywords = `${project.category} project, ${project.tech_stack} project, ${project.name} source code, beginner ${project.category} projects, simple ${project.category} projects, ${project.category} projects for beginners`;

  const projectBtnStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    display: 'inline-block',
    border: 'none',
  };

  const primaryBtnStyle = {
    ...projectBtnStyle,
    color: '#fff',
    backgroundColor: '#007bff',
  };

  const outlineBtnStyle = {
    ...projectBtnStyle,
    color: '#007bff',
    backgroundColor: 'transparent',
    border: '2px solid #007bff',
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="project-details-container">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`/projects/${project.category}/${project.name}`} />
      </Helmet>
      <Navbar />
      <Breadcrumbs />
      <div className="container mt-4">

        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="col-lg-6">
            <h1 id="project-title">{project.name}</h1>
            <p id="project-description">{project.description}</p>
            <ul id="project-info-list">
              <li><strong>Prerequisites:</strong> {project.prerequisites}</li>
              <li><strong>Tech Stack:</strong> {project.tech_stack}</li>
              <li><strong>Time Required:</strong> {project.time_required}</li>
              <li><strong>Level:</strong> {project.level}</li>
            </ul>
            <div id="project-actions">
              <a href={project.live_link} id="primary-btn" target="_blank" rel="noopener noreferrer" style={primaryBtnStyle}>Live Demo</a>
              <a href={project.source_code_link} id="outline-btn" target="_blank" rel="noopener noreferrer" style={outlineBtnStyle}>Source Code</a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={project.image || logoimg} alt={project.name} id="project-image" onError={(e) => { e.target.onerror = null; e.target.src = logoimg }} />
          </div>
        </motion.div>

        <motion.div
          className="row mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="col-lg-6">
            <h2 className="section-title">How to Use :</h2>
            <ul>
              {project.how_to_use.split('\n').map((step, index) => (
                <li key={index} className="how-to-use-step">{step}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <img src={project.image1 || logoimg} alt={project.name} id="project-image" onError={(e) => { e.target.onerror = null; e.target.src = logoimg }} />
          </div>
        </motion.div>

        <motion.div
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h3 className="section-title">Description :</h3>
          <p className="section-content">{project.detailed_description}</p>
        </motion.div>

        {project.faqs && project.faqs.length > 0 && (
          <motion.div
            className="mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h4 className="section-title">FAQs</h4>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {project.faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`flush-heading${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
