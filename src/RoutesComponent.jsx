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
import Aboutus from './pages/Aboutus';
import Disclaimer from './pages/Disclaimer';
import Contactus from './pages/Contactus';
import ProjectDetails from './components/ProjectDetails';
import InterviewCategories from './components/Interview/InterviewCategories';
import InterviewQuestions from './components/Interview/InterviewQuestions';



const RoutesComponent = () => (

    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects/technology/" element={<Projects />} /> */}
        <Route path="/projects/:type" element={<Projects />} />

        <Route path="/projects" element={<ProjectTypes />} />
        <Route path="/partner" element={<BecomePartner />} />
        <Route path="/ebook" element={<TechnologyCategories />} />
        <Route path="/ebook/:slug" element={<EbookList />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicy/>} /> */}
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/projects/:type/:name" element={<ProjectDetails />} />
        <Route path="/interview-questions" element={<InterviewCategories />} />
        <Route path="/interview-questions/:category" element={<InterviewQuestions />} />
        <Route path="*" element={<Navigate to="/" />} />





      </Routes>
      </BrowserRouter>
);

export default RoutesComponent;
