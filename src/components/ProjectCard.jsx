import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, image, link, repo, showButtons }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        {title === "Experience Areas" && (  // Mostrar solo el botón "Modules" para Experience Areas
          <Link to="/modules" className="project-link">  {/* Usando Link de react-router */}
            Modules
          </Link>
        )}
        {title === "Bootcamp Coding" && (  // Mostrar solo el botón "GitHub Repo" para Bootcamp Coding
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repo
          </a>
        )}
        {/* Si hay un botón adicional, puedes manejarlo aquí */}
        {showButtons && title !== "Experience Areas" && title !== "Bootcamp Coding" && (
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
