import React from 'react';

function Skills() {
  const skills = ['React', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'Git', 'Responsive Design','Java','Spring Boot'];

  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
