import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const netsuiteProjects = [
  { title: "Experience Areas", image: "", link: "#", repo: "#", showButtons: true },
];

const featuredProjects = [
  { title: "Toyota Panama - Ricardo Perez, S.A", image: "ricardoperez.png", link: "#", repo: "#", showButtons: false },
  { title: "Farmalisto", image: "farmalisto.png", link: "#", repo: "#", showButtons: false },
  { title: "Body Art Alliance", image: "baa.png", link: "#", repo: "#", showButtons: false },
];

const codingProjects = [
  { title: "Bootcamp Coding", image: "bootcamp.png", link: "#", repo: "#", showButtons: true },
];

function Portfolio() {
  const [showFeatured, setShowFeatured] = useState(false);

  // Función para manejar el clic en GitHub Repo
  const handleGitHubClick = () => {
    setShowFeatured(true); // Muestra los proyectos destacados
  };

  return (
    <section>
      <h2>My Work</h2>

      {/* NetSuite Projects */}
      <div className="section-container">
        <h3>NetSuite Projects</h3>
        <div className="project-list">
          {netsuiteProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Proyectos Destacados */}
      {showFeatured && (
        <div className="section-container">
          <h3>Proyectos Destacados</h3>
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} showButtons={false} />
            ))}
          </div>
        </div>
      )}

      {/* Cuando el usuario hace clic en GitHub, mostramos la sección de proyectos destacados */}
      {!showFeatured && (
        <button onClick={handleGitHubClick} className="cta-button">
          Ver Proyectos Destacados
        </button>
      )}

      {/* Coding Projects */}
      <div className="section-container">
        <h3>Coding Projects</h3>
        <div className="project-list">
          {codingProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
