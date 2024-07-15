import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import projectTypes from '../data/projectTypes.json';
import Footer from '../pages/Footer';
import './ProjectTypes.css'; // Assuming you have a separate CSS file for custom styles
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from './Breadcrumbs';  // Import the Breadcrumbs component
import { motion } from 'framer-motion'; // Import framer-motion

const ProjectTypes = () => {
    // Define an array of gradient colors
    const gradients = [
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
        'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
        'linear-gradient(135deg, #fbc2eb 0%, #a18cd1 100%)',
        'linear-gradient(135deg, #ffefba 0%, #ffffff 100%)',
        'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 100%)',
        'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
        'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProjectTypes = projectTypes.filter(type =>
        type.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Helmet>
                <title>free projects with source code download - showcasehub.tech</title>
                <meta name="description" content="Explore a variety of free projects with source code available for download. Find inspiration and start coding with our extensive collection of projects." />
                <meta name="keywords" content="projects, free projects, source code, showcasehub, download, projects for beginners, github" />
                <link rel="canonical" href="/projects" />
            </Helmet>
            <div className="project-types-container">
                <Navbar />
                <div className="container mt-5">
                    {/* Page Heading */}
                    <div className="text-center mb-5">
                        <h1 className="display-4 font-weight-bold">Explore free simple projects across different domains.</h1>
                    </div>
                    {/* Search Bar */}
                    <div className="mb-5" style={{ textAlign: 'center' }}>
                        <h3 className="mb-4" style={{ color: '#007bff' }}>Find Your Perfect Project</h3>
                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <input
                                type="text"
                                className="form-control form-control-lg shadow-sm"
                                placeholder="Search for projects..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                style={{ borderRadius: '30px', border: '2px solid #007bff', fontSize: '1.2rem', padding: '12px 20px' }}
                            />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {filteredProjectTypes.map((type, index) => (
                            <motion.div 
                                key={index}
                                className="col mb-4"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link to={`/projects/${type.name.toLowerCase()}`} className="text-decoration-none">
                                    <div className="card h-100 rounded-3 shadow border-0" style={{ background: gradients[index % gradients.length], color: '#fff' }}>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title fs-5 mb-3 text-dark">{type.name}</h5>
                                            <p className="card-text mb-4">{type.description}</p>
                                            <p className="card-text mb-4"><strong>Difficulty Level:</strong> {type.difficulty_level}</p>
                                            <div className="text-center">
                                                <button className="btn btn-light btn-sm px-4 py-2 rounded-pill">
                                                    View Projects
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ProjectTypes;
