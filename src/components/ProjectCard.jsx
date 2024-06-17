import React from 'react';
import './ProjectCard.css'; // Assuming you have a separate CSS file for custom styles
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card shadow-sm mb-4 project-card border-0">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5><hr />
        <p className="card-text">{project.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Prerequisites:</strong> {project.prerequisites}</li>
          <li className="list-group-item"><strong>Tech Stack:</strong> {project.tech_stack}</li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <span><strong>Total Downloads:</strong> {project.total_downloads}</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${(project.total_downloads / 500) * 100}%` }} // Assuming max downloads is 1000
                aria-valuenow={project.total_downloads}
                aria-valuemin="0"
                aria-valuemax="500"
              ></div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <span><strong>Total Views:</strong> {project.total_views}</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${(project.total_views / 500) * 100}%` }} // Assuming max views is 5000
                aria-valuenow={project.total_views}
                aria-valuemin="0"
                aria-valuemax="500"
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-footer bg-transparent border-0">
  <div className="d-flex justify-content-center">
    <Link
      to={`/project/${project.name}`}
      className="btn btn-primary rounded-pill px-4 py-2"
      style={{ fontSize: '1rem', fontWeight: 'bold' }}
    >
      Show Details
    </Link>
  </div>
</div>

    </div>
  );
};

export default ProjectCard;
