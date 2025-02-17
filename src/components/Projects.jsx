import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    id: 1,
    name: "Inventory CRUD",
    technologies: "MERN Stack",
    image: project1,
    github: "https://client-omega-sandy.vercel.app/",
  },
  {
    id: 2,
    name: "KnowledgeHub",
    technologies: "Frontend React JS",
    image: project2,
    github: "https://quiz-nr9v7edo0-karans-projects-3df8eba2.vercel.app/",
  },
  {
    id: 2,
    name: "react-ecommerce",
    technologies: "Frontend React JS",
    image: project3,
    github: "https://social-media-2s7front-end-only.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#1a1a2e] text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#222831] p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105 border border-purple-500"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover border-2 border-purple-400"
              />
              <h3 className="text-2xl font-bold mb-2 text-purple-300">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="bg-gradient-to-r from-purple-400 to-pink-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
