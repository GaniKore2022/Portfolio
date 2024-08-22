import React from 'react';
import './Skills.css';
import pythonLogo from './python-logo.png';
import javaLogo from './java-logo.png';
import mlLogo from './ml-logo.png';
import htmlLogo from './html-logo.png';
import cssLogo from './css-logo.png';
import jsLogo from './js-logo.png';
import reactLogo from './reactjs-logo.png';
import sqlLogo from './sql-logo.png';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      
      {/* Programming Languages */}
      <div className="skills-category">
        <h3>Programming Languages:</h3>
        <ul className="skills-list">
          <li>
            <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
          </li>
          <li>
            <img src={javaLogo} alt="Java Logo" className="skill-logo" />
          </li>
          <li>
            <img src={htmlLogo} alt="HTML Logo" className="skill-logo" />
          </li>
          <li>
            <img src={cssLogo} alt="CSS Logo" className="skill-logo" />
          </li>
          <li>
            <img src={jsLogo} alt="JavaScript Logo" className="skill-logo" />
          </li>
        </ul>
      </div>

      {/* Frameworks */}
      <div className="skills-category">
        <h3>Frameworks:</h3>
        <ul className="skills-list">
          <li>
            <img src={reactLogo} alt="React Logo" className="skill-logo" />
          </li>
        </ul>
      </div>

      {/* Databases */}
      <div className="skills-category">
        <h3>Databases:</h3>
        <ul className="skills-list">
          <li>
            <img src={sqlLogo} alt="SQL Logo" className="skill-logo" />
          </li>
        </ul>
      </div>

      {/* Domain Knowledge */}
      <div className="skills-category">
        <h3>Domain Knowledge:</h3>
        <ul className="skills-list">
          <li>
            <img src={mlLogo} alt="Machine Learning Logo" className="skill-logo" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
