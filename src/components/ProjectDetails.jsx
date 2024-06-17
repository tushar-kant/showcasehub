import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { Helmet } from 'react-helmet-async';
import Footer from '../pages/Footer';
import Navbar from './Navbar';
import logoimg from '../assets/image1.png';

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

  const pageTitle = `${project.name} - Simple ${project.category} Project for Beginners with Source Code 2024`;
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

  return (
    <div className="project-details-container">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`/project/${project.name}`} />
      </Helmet>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="project-title">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            <ul className="project-info-list">
              <li><strong>Prerequisites:</strong> {project.prerequisites}</li>
              <li><strong>Tech Stack:</strong> {project.tech_stack}</li>
              <li><strong>Time Required:</strong> {project.time_required}</li>
              <li><strong>Level:</strong> {project.level}</li>
            </ul>
            <div className="project-actions">
              <a href={project.live_link} className="btn" style={primaryBtnStyle} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.source_code_link} className="btn" style={outlineBtnStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={project.image || logoimg} alt={project.name} className="img-fluid project-image" onError={(e) => { e.target.onerror = null; e.target.src = logoimg }} />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="section-title">How to Use</h2>
          <ul className="how-to-use-list">
            {project.how_to_use.split('\n').map((step, index) => (
              <li key={index} className="how-to-use-step">{step}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="section-title">Long Description</h2>
          <p className="section-content">{project.detailed_description}</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
