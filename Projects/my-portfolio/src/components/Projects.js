// Projects.js

import projects from '../data/projects.json';
import Project from './Project';

export default function Projects() {

  return (
    <section id="projects">
      {projects.map(project => (
        <Project 
          key={project.title}
          {...project} 
        />
      ))}
    </section>
  );
}