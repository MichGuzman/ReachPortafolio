function About() {
  return (
    <section className="about-me">
      <div className="about-header">
        <h2>About Me</h2>
        <img src="/profile.png" alt="Profile" />
      </div>
      <p>
        Accountancy professional with more than 10 years' experience in NetSuite ERP and CRM functional consultancy. Passionate about transforming business needs into NetSuite solutions by configuring and adapting the system to customers' requirements using SuiteCloud Platform tools such as SuiteBuilder, SuiteFlow, and SuiteAnalytics.
      </p>

      <div className="about-info">
        <div className="education">
          <h3>EDUCATION</h3>
          <p><strong>Master Degree - Business Administration of Financial</strong> Universidad Simón Bolívar, 2015</p>
          <p><strong>Bachelor Degree of Accountancy</strong> Universidad Simón Bolívar, 2013</p>
        </div>

        <div className="certifications">
          <h3>CERTIFICATIONS</h3>
          <p><strong>SuiteLife: Demo and Delivery</strong> NetSuite</p>
          <p><strong>NetSuite Certified ERP Consultant</strong> NetSuite</p>
          <p><strong>Oracle Fusion Cloud Applications ERP Foundations Certified Associate</strong> Oracle</p>
        </div>

        <div className="languages">
          <h3>LANGUAGES</h3>
          <p><strong>English</strong> - Professional working proficiency</p>
        </div>

        <div className="professional-experience">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <p><strong>Senior Professional Consultant</strong> Providence Consulting Group, June 2021 - Present</p>
          <ul>
            <li>Collaborated with customers and process owners in the requirements gathering phase for NetSuite implementation projects.</li>
            <li>Successfully implemented NetSuite integrations with other key business systems, enabling real-time data synchronization and eliminating data duplication.</li>
          </ul>
          <p><strong>Senior Professional Consultant</strong> Netsoft, August 2012 - June 2021</p>
          <ul>
            <li>Analyzed areas of improvement and proposed customized solutions based on clients' specific requirements.</li>
            <li>Successfully customized NetSuite solutions to improve operational efficiency, and collaborated with clients to execute system implementations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
