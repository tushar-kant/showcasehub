import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import projectTypes from '../data/projectTypes.json';
import Footer from '../pages/Footer';
import './ProjectTypes.css'; // Assuming you have a separate CSS file for custom styles
import { Helmet } from 'react-helmet';


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
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
        'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProjectTypes = projectTypes.filter(type =>
        type.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="project-types-container">
             <Helmet>
                <title>free projects with source code - showcasehub.tech</title>
                <meta name="description" content="Explore a variety of projects across different domains and find your perfect project." />
            </Helmet>
            <Navbar />
            <div className="container mt-5">
                {/* Page Heading */}
                <div className="text-center mb-5">
                    <h2 className="display-4 font-weight-bold">Discover Projects</h2>
                    <p className="lead text-muted">Explore a variety of projects across different domains.</p>
                </div>
                
                {/* Search Bar */}
                <div className="mb-5">
                    <h3 className="text-center mb-4">Find Your Perfect Project</h3>
                    <div className="d-flex justify-content-center">
                        <input
                            type="text"
                            className="form-control form-control-lg shadow-sm"
                            placeholder="Search for projects..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            style={{ maxWidth: '600px' }}
                        />
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filteredProjectTypes.map((type, index) => (
                        <div className="col mb-4" key={index}>
                            <Link to={`/projects/${type.name.toLowerCase()}`} className="text-decoration-none">
                                <div className="card h-100 rounded-3 shadow border-0" style={{ background: gradients[index % gradients.length], color: '#fff' }}>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title fs-5 mb-3 text-dark">{type.name}</h5>
                                        <p className="card-text mb-4">{type.description}</p>
                                        <div className="text-center">
                                            <button className="btn btn-light btn-sm px-4 py-2 rounded-pill">
                                                View Projects
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectTypes;
