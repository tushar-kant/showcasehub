import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroImage from '../assets/College-Student.png'; // Assuming you have an SVG file in the assets folder
import Footer from '../pages/Footer';
import { Helmet } from 'react-helmet-async';
import './Home.css'; // Assuming you have a separate CSS file for custom styles



function Home() {
    return (
        <>
            <Helmet>
            <title>ShowcaseHub - Explore Projects and Ebooks</title>
                <meta name="description" content="Discover and explore a variety of projects and ebooks categorized by various domains on ShowcaseHub. Learn, contribute, and showcase your own projects to the world." />
                <meta name="keywords" content="ebook, free ebook, download, project, source code, free project, showcasehub" />

                <link rel="canonical" href="/" />
            </Helmet>
            <Navbar />
            <div className="container">
                <div className="row align-items-center vh-90">
                    <div className="col-md-7 text-center text-md-left">
                        <h1 className="display-3 font-weight-bold mb-4">
                            Welcome to <span className='text-success'><strong>ShowcaseHub</strong></span>
                        </h1>
                        <p className="lead mb-4">Discover and explore projects and ebooks categorized by various domains.</p>
                        <p className="mb-4">ShowcaseHub is a platform where you can find a variety of projects and ebooks ranging from frontend to backend, mobile apps to web applications, and much more.</p>
                        <div className="container">
                            <Link className="btn  btn-success btn-lg m-2" to="/projecttype" role="button">Explore Project</Link>
                            <Link className="btn btn-success btn-lg m-2" to="/ebook" role="button">Explore Ebooks</Link>
                            <Link className="btn btn-outline-secondary btn-lg m-2" to="/partner" role="button">Become a Partner</Link>
                        </div>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={heroImage} className="img-fluid" alt="Hero Illustration" />
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-md-4 mb-4">
                        <div className="icon-box">
                            <h2 className="font-weight-bold">Learn</h2>
                            <p>Explore projects and ebooks to learn new technologies, frameworks, and best practices.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="icon-box">
                            <h2 className="font-weight-bold">Contribute</h2>
                            <p>Find projects and ebooks where you can contribute and collaborate with other developers and authors.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="icon-box">
                            <h2 className="font-weight-bold">Showcase</h2>
                            <p>Showcase your own projects and ebooks to the world and get feedback from the community.</p>
                        </div>
                    </div>
                </div>
          
            </div>
            <Footer />
        </>
    )
}

export default Home;
