import "../styles/Projects.css";
import { useEffect } from "react";

const projectsData = [
  {
    title: "CreMaze",
    image: "/images/Cremaze.png",
    description:
      "A full-stack MERN e-commerce platform built for a premium ice cream brand featuring secure authentication, role-based admin dashboard, order tracking, and real-time product management.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    live: "https://cremaze2026.vercel.app",
    github: "https://github.com/maazfatima21/MERN-Ecommerce-CreMaze",
  },
  {
    title: "EduSphere",
    image: "/images/EduSphere.png",
    description:
      "A fully responsive multi-page educational institution website built using React and Vite, featuring dynamic course filtering, reusable architecture, and smooth scroll-based UI interactions.",
    tech: [
      "React",
      "Vite",
      "React Router DOM",
      "React Icons",
      "CSS3",
      "Vercel",
    ],
    live: "https://edusphere-peach.vercel.app/",
    github: "https://github.com/maazfatima21/EduSphere",
  },
  {
    title: "TastyTidBites",
    image: "/images/TastyTidbites.png",
    description:
      "A fully responsive bakery website built using React (Vite) with modular component architecture, smooth animations, and modern frontend practices.",
    tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    live: "https://tastytidbites.vercel.app/",
    github: "https://github.com/maazfatima21/website-",
  },
  {
    title: "Next.js E-Commerce Website",
    image: "/images/nextjs.png",
    description:
      "SEO-optimized e-commerce website built using modern frontend technologies.",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Featured Projects</h2>

      {projectsData.map((project, index) => (
        <div
          className={`project-row reveal ${
            index % 2 !== 0 ? "project-row-reverse" : ""
          }`}
          key={index}
        >
          <div className="project-image-box">
            <img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={{ aspectRatio: '16/9', objectFit: 'cover' }}
            />
            {project.live !== "#" && (
              <div className="project-overlay">
                <a href={project.live} target="_blank" rel="noreferrer">
                  View Live →
                </a>
              </div>
            )}
          </div>

          <div className="project-content-box">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {project.github !== "#" && (
              <div className="project-action">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;