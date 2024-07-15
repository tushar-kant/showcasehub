import React, { useState, useEffect } from 'react';
import ebooks from '../../data/ebooks.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Import framer-motion
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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

    // SEO Meta tags
    const pageTitle = `Free Ebook Downloads for ${categoryName} - showcasehub.tech`;
    const metaDescription = `Explore ebooks related to ${categoryName}. Find valuable resources and information on ${categoryName}.`;
    const metaKeywords = `${categoryName} ebooks, free ${categoryName} ebooks, ${categoryName} resources, free ebook download, showcasehub`;
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

            <div className="container py-5">
                <h1 className="text-center mb-4">Free Ebook Downloads for {categoryName}</h1>
                <div className="mb-4 text-center">
                    <input
                        type="text"
                        className="form-control w-50 mx-auto"
                        placeholder="Search ebooks..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filteredEbooks.map(ebook => (
                        <motion.div
                            key={ebook.id}
                            className="col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="card h-100 text-left p-3" style={{ background: '#f9f9f9', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333' }}>{ebook.title}</h3>
                                    <p className="card-text" style={{ fontStyle: 'italic', color: '#666' }}>Author: {ebook.author}</p>
                                    <p className="card-text" style={{ color: '#333' }}>{ebook.description}</p>
                                    <div className="text-center">
                                        <a href={ebook.downloadLink} className="btn btn-primary me-2">Read Now</a>
                                        <a href={ebook.downloadLink} className="btn btn-outline-primary" download>Download</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EbookList;
