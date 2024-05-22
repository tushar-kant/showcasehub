// TechnologyCategories.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import technologyCategories from '../../data/technologyCategories.json';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet';

import './TechnologyCategories.css'; // Assuming you have a separate CSS file for custom styles

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
                <title>Technology Categories - showcasehub.tech</title>
                <meta name="description" content="Explore technology categories and find the one that interests you. Discover ebooks, resources, and more." />
            </Helmet>
            <Navbar />
            <div className="container">

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="category-list">
                    {filteredCategories.map(category => (
                        <Link key={category.slug} to={`/ebook/${category.slug}`} className="category-link">
                            <div className="category">
                                <i className={category.icon}></i>
                                <div className="category-info">
                                    <div className="category-name">{category.name}</div><br /><hr />
                                    <div className="category-description">{category.description}</div>
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
