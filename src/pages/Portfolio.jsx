import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Portfolio.css'; 

const netsuiteProjects = [
  { title: "Experience Areas", image: "oracle.png", link: "#", repo: "#", showButtons: true },
];

const featuredProjects = [
  { title: "Toyota Panama - Ricardo Perez, S.A", image: "ricardoperez.png", link: "#", repo: "#", showButtons: false },
  { title: "Body Art Alliance", image: "baa.png", link: "#", repo: "#", showButtons: false },
  { title: "BayWa r.e. MX", image: "baywa.png", link: "#", repo: "#", showButtons: false },
  { title: "ProEdge Dental Water Labs", image: "proedge.png", link: "#", repo: "#", showButtons: false },
  { title: "Aspen Publishing", image: "aspen.png", link: "#", repo: "#", showButtons: false },
];

const codingProjects = [
  { title: "Bootcamp Coding", image: "bootcamp.png", link: "#", repo: "https://github.com/MichGuzman", showButtons: true, type: "coding" },
  { title: "Employee Manager", image: "employemang.png", link: "#", repo: "https://github.com/MichGuzman/EmployeeManagement/tree/main/Company%20Query", showButtons: true, type: "coding" },
  { title: "Vehicle Builder", image: "vehicle.png", link: "#", repo: "https://github.com/MichGuzman/VehicleBuilder", showButtons: true, type: "coding" },
  { title: "Readme Generator", image: "readme.png", link: "#", repo: "https://github.com/MichGuzman/readme-generator", showButtons: true, type: "coding" },
  { title: "Portfolio", image: "portfolio.png", link: "#", repo: "https://github.com/MichGuzman/ReachPortafolio", showButtons: true, type: "coding" },
];


function Portfolio() {
  const [showFeatured, setShowFeatured] = useState(false); // Estado para controlar la visibilidad de Proyectos Destacados

  const toggleFeatured = () => {
    setShowFeatured(!showFeatured); // Cambia la visibilidad al hacer clic
  };

  return (
    <section>
      <div className="section-container">
      <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="project-list">
          {netsuiteProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <button onClick={toggleFeatured} className="cta-button">
        {showFeatured ? 'Close Featured Projects' : 'See Featured Projects'}
      </button>

      {showFeatured && (
        <div className="section-container">
          <h3>Featured Projects</h3>
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      )}

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
