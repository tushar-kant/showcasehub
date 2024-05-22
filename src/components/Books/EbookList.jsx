import React, { useState, useEffect } from 'react';
import ebooks from '../../data/ebooks.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet';
import './EbookList.css'; // Assuming you have a separate CSS file for custom styles

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
    const pageTitle = `Free ebooks for ${categoryName} - showcasehub.tech`;
    const metaDescription = `Explore ebooks related to ${categoryName}. Find valuable resources and information on ${categoryName}.`;
    const metaKeywords = `${categoryName} ebooks, free ${categoryName} ebooks, ${categoryName} resources`;
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
            </Helmet>
            <Navbar />
            <div className="container">
                {/* <h2 className="ebook-list-heading text-center">Ebooks for {slug}</h2> */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search ebooks..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="row">
                    {filteredEbooks.map(ebook => (
                        <div key={ebook.id} className="col-12 col-md-6 col-lg-4">
                            <div className="ebook-item">
                                <div className="ebook-info">
                                    <h3 className="ebook-title">{ebook.title}</h3>
                                    <p className="ebook-author">Author: {ebook.author}</p>
                                    <p className="ebook-description">{ebook.description}</p>
                                </div>
                                <div className="ebook-buttons">
                                    <button className="btn btn-primary">Read Now</button>
                                    <a href={ebook.downloadLink} className="btn btn-outline-primary" download>Download</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EbookList;
