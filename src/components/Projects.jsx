import React from "react";
import "../style/Projects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    id: 1,
    name: "Inventory CRUD",
    technologies: "MERN Stack",
    image: project1,
    link: "https://client-omega-sandy.vercel.app/",
  },
  {
    id: 2,
    name: "KnowledgeHub",
    technologies: "Frontend React JS",
    image: project2,
    link: "https://quiz-nr9v7edo0-karans-projects-3df8eba2.vercel.app/",
  },
  {
    id: 3,
    name: "React E-Commerce",
    technologies: "Frontend React JS",
    image: project3,
    link: "https://social-media-2s7front-end-only.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="project">
      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">Hi, I'M</h1>
        <h1 className="projects-name">KARAN KASHYAP</h1>
        <h2 className="projects-subtitle">FULL-STACK DEVELOPER</h2>
        <p className="projects-description">
          I specialize in building modern and scalable web applications that enhance user experience.
        </p>

       
      </div>

      <div className="projects-content">
        <h2 className="projects-heading">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3 className="project-title">{project.name}</h3>
              <p className="project-tech">{project.technologies}</p>
              <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
