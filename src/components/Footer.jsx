import React from 'react';
import SocialLinks from './SocialLinks'; // Se mantiene aquí solo para el footer

function Footer() {
  return (
    <footer>
      <p>© 2025 Michelle Guzmán. All rights reserved.</p>
      <SocialLinks /> {/* Aquí es donde se renderiza SocialLinks */}
    </footer>
  );
}

export default Footer;
