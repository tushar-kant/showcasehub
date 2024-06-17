// EbookList.js

import React, { useState, useEffect } from 'react';
import ebooks from '../../data/ebooks.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet-async';

const EbookList = () => {
    const { slug } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const filteredEbooks = ebooks.filter(ebook =>
        ebook.category === slug &&
        (ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ebook.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        // Set category name when slug changes
        setCategoryName(slug);
    }, [slug]);
    const pageTitle = `Free ebooks download for ${categoryName} 2024- showcasehub.tech`;
    const metaDescription = `Explore ebooks related to ${categoryName}. Find valuable resources and information on ${categoryName}.`;
    const metaKeywords = `${categoryName} ebooks, free ${categoryName} ebooks, ${categoryName} resources, free ebook download , showcasehub,`;
    const canonicalUrl = `/ebook/${categoryName}`;

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <Navbar />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Free Ebook Downloads for {categoryName}</h1>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        style={{ padding: '10px', width: '100%', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
                        placeholder="Search ebooks..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {filteredEbooks.map(ebook => (
                        <div key={ebook.id} style={{ 
                            backgroundColor: '#fff', 
                            padding: '20px', 
                            borderRadius: '10px', 
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                            transition: 'transform 0.3s', 
                            ':hover': { transform: 'scale(1.05)' }
                        }}>
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{ebook.title}</h3>
                                <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '10px' }}>Author: {ebook.author}</p>
                                <p style={{ marginBottom: '20px' }}>{ebook.description}</p>
                            </div>
                            <div>
                                <a href={ebook.downloadLink} style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>Read Now</a>
                                <a href={ebook.downloadLink} style={{ textDecoration: 'none', color: '#007bff', border: '1px solid #007bff', padding: '10px 20px', borderRadius: '5px' }} download>Download</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EbookList;
