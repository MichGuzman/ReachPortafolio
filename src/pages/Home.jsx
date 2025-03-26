import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
<div className="home-content">
  <h1>Welcome to My Portfolio</h1>
  <p>I’m Michelle Guzmán, a passionate consultant with over 10 years of experience helping businesses grow with tailored NetSuite ERP solutions.</p>
  <p>Explore my work and learn more about how I can help optimize your business processes.</p>
  <Link to="/about">
    <button className="cta-button">Learn More</button>
  </Link>
</div>
    </section>
  );
}

export default Home;
