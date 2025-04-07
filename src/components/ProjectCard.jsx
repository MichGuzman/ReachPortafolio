import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, image, link, repo, showButtons, type }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        {title === "Experience Areas" && (
          <Link to="/modules" className="project-link">Modules</Link>
        )}

        {/* Mostrar solo el botón de GitHub si es un proyecto de tipo 'coding' */}
        {type === "coding" && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repo
          </a>
        )}

        {/* Otros casos normales */}
        {showButtons && !type && title !== "Experience Areas" && (
          <>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              Modules
            </a>
            <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub Repo
            </a>
          </>
        )}
      </div>
    </div>
  );
}


export default ProjectCard;
