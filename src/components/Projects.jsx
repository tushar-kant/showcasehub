import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { Helmet } from 'react-helmet-async';
import Footer from '../pages/Footer';
import Breadcrumbs from '../components/Breadcrumbs';  // Import the Breadcrumbs component
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { type } = useParams();
  const location = useLocation();

  useEffect(() => {
    const filtered = projectsData.filter(project => {
      const matchesType = type ? project.category.toLowerCase() === type.toLowerCase() : true;
      const matchesSearch = searchQuery ? project.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesType && matchesSearch;
    });

    setFilteredProjects(filtered);
  }, [type, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const pageTitle = type ? `simple ${type} projects for beginners with sourcecode 2024 - showcasehub.tech` : 'simple projects for beginners with sourcecode 2024- showcasehub.tech';
  const metaDescription = type
    ? `Top simple ${type} projects for beginners with source code on our platform. Find inspiration and learn from a variety of ${type} projects designed to help you start coding.`
    : 'Top simple Python projects for beginners with source code on our platform. Find inspiration and learn from a variety of projects designed to help you start coding.';
  const metaKeywords = type
    ? `simple ${type} projects, beginner ${type} projects, free ${type} projects, ${type} source code, ${type} projects for beginners, ${type} projects with source code`
    : 'simple projects, beginner projects, free projects, source code, projects for beginners, projects with source code, simple projects, coding projects for beginners, beginner coding projects';
  const canonicalUrl = type ? `/projects/${type}` : '/projects';

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />

      <div className="container mt-4">
        <div className="text-center mb-5">
          <motion.h1 
            className="display-4 font-weight-bold" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            simple {type} projects with source code
          </motion.h1>
        </div>

        <div className="mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="input-group" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', borderRadius: '20px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ borderRadius: '20px 0 0 20px', border: 'none', boxShadow: 'none' }}
            />
          </div>
        </div>

        <motion.div 
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
            visible: { opacity: 1 }
          }}
        >
          {filteredProjects.map(project => (
            <motion.div className="col-md-4 mb-3" key={project.id} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
