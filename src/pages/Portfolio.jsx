import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: "Proyecto 1", image: "/assets/proyecto1.png", link: "#", repo: "#" },
  { title: "Proyecto 2", image: "/assets/proyecto2.png", link: "#", repo: "#" },
  // Agrega más proyectos aquí...
];

function Portfolio() {
  return (
    <section>
      <h2>My Work</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
