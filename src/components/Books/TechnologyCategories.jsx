import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import technologyCategories from '../../data/technologyCategories.json';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../Breadcrumbs';  // Import the Breadcrumbs component
import { motion } from 'framer-motion'; // Import framer-motion
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const TechnologyCategories = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredCategories = technologyCategories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Helmet>
                <title>Technology Categories for ebooks - showcasehub.tech</title>
                <meta name="description" content="Explore technology categories and find the one that interests you. Discover ebooks, resources, and more." />
                <meta name="keywords" content="technology categories, programming, web development, mobile development, showcasehub" />
                <link rel="canonical" href="/ebook" />
            </Helmet>
            <Navbar />

            <div className="container py-5">
                <h1 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>Free Ebook Downloads</h1>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search categories..."
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{ borderRadius: '30px', padding: '12px 20px' }}
                        />
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filteredCategories.map((category, index) => (
                        <motion.div
                            key={category.slug}
                            className="col"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link to={`/ebook/${category.slug}`} className="text-decoration-none">
                                <div
                                    className="card h-100 text-center"
                                    style={{
                                        background: '#f9f9f9',
                                        borderRadius: '10px',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.2s, box-shadow 0.3s',
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <i className={`${category.icon} mb-3`} style={{ fontSize: '64px', color: '#007bff' }}></i>
                                        <h5 className="card-title mb-2" style={{ color: '#007bff', fontWeight: 'bold' }}>{category.name}</h5>
                                        <p className="card-text text-muted">{category.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TechnologyCategories;
