// TechnologyCategories.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import technologyCategories from '../../data/technologyCategories.json';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet-async';

const TechnologyCategories = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredCategories = technologyCategories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>Technology Categories for ebooks - showcasehub.tech</title>
                <meta name="description" content="Explore technology categories and find the one that interests you. Discover ebooks, resources, and more." />
                <meta name="keywords" content="technology categories, programming, web development, mobile development, showcasehub" />
                <link rel="canonical" href="/ebook" />
            </Helmet>
            <Navbar />
            <div style={{ 
                padding: '20px', 
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}>
                <h1 style={{ 
                    fontFamily: 'Arial, sans-serif', 
                    color: '#333', 
                    fontSize: '32px', 
                    marginBottom: '20px' 
                }}>Free Ebook Downloads</h1>
                <input
                    type="text"
                    placeholder="Search categories..."
                    style={{ 
                        width: '100%', 
                        maxWidth: '400px', 
                        padding: '10px', 
                        border: '1px solid #ccc', 
                        borderRadius: '5px', 
                        marginBottom: '20px', 
                        fontSize: '16px' 
                    }}
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '20px' 
                }}>
                    {filteredCategories.map(category => (
                        <Link 
                            key={category.slug} 
                            to={`/ebook/${category.slug}`} 
                            style={{ 
                                textDecoration: 'none', 
                                color: '#333' 
                            }}
                        >
                            <div style={{ 
                                background: '#f9f9f9', 
                                padding: '30px', 
                                borderRadius: '10px', 
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                                transition: 'transform 0.2s', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <i 
                                    className={category.icon} 
                                    style={{ 
                                        fontSize: '64px', 
                                        marginBottom: '20px', 
                                        color: '#007bff' 
                                    }}
                                ></i>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ 
                                        fontSize: '24px', 
                                        fontWeight: 'bold', 
                                        marginBottom: '15px', 
                                        color: '#007bff' 
                                    }}>{category.name}</div>
                                    <div style={{ 
                                        fontSize: '18px', 
                                        color: '#666', 
                                        textAlign: 'center' 
                                    }}>{category.description}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TechnologyCategories;
