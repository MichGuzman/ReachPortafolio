function ProjectCard({ title, image, link, repo }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  