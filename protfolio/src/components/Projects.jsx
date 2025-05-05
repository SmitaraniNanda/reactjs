import React from 'react';

function Projects() {
  const projects = [
    { title: 'My Portfolio', description: 'Personal website built with React and CSS.' },
    { title: 'Todo App', description: 'Manage tasks efficiently using local storage.' },
    { title: 'Weather App', description: 'Live weather info using external API.' }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;