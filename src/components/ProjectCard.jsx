import React from 'react';
import './ProjectCard.css'; // Assuming you have a separate CSS file for custom styles

const ProjectCard = ({ project }) => {
  return (
    <div className="card shadow-sm mb-4 project-card border-0">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Prerequisites:</strong> {project.prerequisites}</li>
          <li className="list-group-item"><strong>Tech Stack:</strong> {project.tech_stack}</li>
          <li className="list-group-item"><strong>Time Required:</strong> {project.time_required}</li>
          <li className="list-group-item"><strong>Level:</strong> {project.level}</li>
        </ul>
      </div>
      <div className="card-footer bg-transparent border-0">
        <div className="d-flex justify-content-between">
          <a href={project.live_link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.source_code_link} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
