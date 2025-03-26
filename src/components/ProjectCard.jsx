import React from 'react';

function ProjectCard({ title, image, link, repo, showButtons }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      {showButtons && (
        <div className="project-links">
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Modules
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repo
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
