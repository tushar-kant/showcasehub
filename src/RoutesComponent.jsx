// src/Routes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter,Navigate } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectTypes from './components/ProjectTypes';
import BecomePartner from './components/BecomePartner';
import TechnologyCategories from './components/Books/TechnologyCategories';
import EbookList from './components/Books/EbookList';
import JobListings from './components/JobListings';


const RoutesComponent = () => (

    <HashRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects/technology/" element={<Projects />} /> */}
        <Route path="/projects/:type" element={<Projects />} />

        <Route path="/projecttype" element={<ProjectTypes />} />
        <Route path="/partner" element={<BecomePartner />} />
        <Route path="/ebook" element={<TechnologyCategories />} />
        <Route path="/ebook/:slug" element={<EbookList />} />
        <Route path="/jobs" element={<JobListings />} />
        




        <Route path="*" element={<Navigate to="/" />} />





      </Routes>
      </HashRouter>
);

export default RoutesComponent;
