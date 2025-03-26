import React from 'react';

function SocialLinks() {
  return (
    <div className="social-links">
      <a 
        href="https://github.com/MichGuzman/ReachPortafolio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src="/github.png" alt="GitHub" className="social-icon-img"/>
      </a>
      <a 
        href="https://www.linkedin.com/in/michelle-a-p%C3%A9rez-guzm%C3%A1n-1704301a1/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src="/linkedin.png" alt="LinkedIn" className="social-icon-img"/>
      </a>
    </div>
  );
}

export default SocialLinks;
