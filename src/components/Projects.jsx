import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { Helmet } from 'react-helmet';
import Footer from '../pages/Footer';

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

  const pageTitle = type ? `Free ${type} Projects with Source Code - showcasehub.tech` : 'Projects - showcasehub.tech';
  const metaDescription = type ? `Explore a variety of projects related to ${type} and find inspiration for your next project on our platform.` : 'Explore a variety of projects and find inspiration for your next project on our platform.';
  const metaKeywords = type ? `${type} projects, free ${type} projects, ${type} source code` : 'projects, free projects, source code, showcasehub';

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Helmet>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Free Projects with source code</h1>

        <div className="mb-4">
          <div className="input-group shadow-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredProjects.map(project => (
            <div className="col-md-4 mb-3" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
