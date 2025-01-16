import './Projects.css';
import schoolmanagment from '../assets/schoolmanagment.png';
import geolocationattendence from '../assets/geolocationattendence.png';
import roadlane from '../assets/roadlane.png';
import aichatboot from '../assets/aichatboot.png';

export default function Projects() {
  const projects = [
    {
      image: schoolmanagment,
      url: "https://github.com/Parthh191/full-stack-school",
      description: "A full-stack web application for school management.",
      topics: ["React", "Node.js", "MongoDB"],
    },
    {
      image: geolocationattendence,
      url: "https://github.com/Parthh191/GeolocationAttantenceApp",
      description: "An app to track attendance using geolocation.",
      topics: ["React Native", "Firebase"],
    },
    {
      image: roadlane,
      url: "https://github.com/Parthh191/RoadLaneDetectionUsingYoloV8",
      description: "A project to detect road lanes using YoloV8.",
      topics: ["Python", "OpenCV", "YoloV8"],
    },
    {
      image: aichatboot,
      url: "https://github.com/Parthh191/nextjs-ai-chatbot",
      description: "An AI chatbot built with Next.js.",
      topics: ["Next.js", "AI", "Chatbot"],
    }
  ];

  return (
    <div className="projects">
      <div className="moving-stars"></div>
      <div className="bottom-moving-stars"></div>
      <h1>Projects</h1>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Topics:</strong> {project.topics.join(", ")}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
