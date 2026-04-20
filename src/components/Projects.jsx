import "../styles/Projects.css";
import { useEffect } from "react";

const projectsData = [
  {
    title: "CreMaze",
    image: "/images/Cremaze.png",
    description: "Built a scalable e-commerce platform with authentication, admin dashboard, and order tracking. Implemented secure JWT-based login and optimized API performance for faster product and order management.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    live: "https://cremaze2026.vercel.app",
    github: "https://github.com/maazfatima21/MERN-Ecommerce-CreMaze",
  },
  {
    title: "EduSphere",
    image: "/images/EduSphere.png",
    description: "Developed a responsive educational website with dynamic course filtering and reusable components. Focused on smooth UI interactions and optimized frontend performance.",
    tech: ["React", "Vite", "React Router DOM", "React Icons", "CSS3"],
    live: "https://edusphere-peach.vercel.app/",
    github: "https://github.com/maazfatima21/EduSphere",
  },
  {
    title: "Eco-Essentials",
    image: "/images/Eco-Essentials.png",
    description: "Created a modern e-commerce app using Next.js with Stripe payments and CMS integration. Implemented server-side rendering and optimized user experience for faster load times.",
    tech: ["Next.js", "React", "Tailwind CSS", "Stripe", "Sanity CMS", "TypeScript",],
    live: "https://eco-essentials-site.vercel.app/",
    github: "https://github.com/maazfatima21/Eco-Essentials",
  },
  {
    title: "TastyTidBites",
    image: "/images/TastyTidbites.png",
    description: "Designed a responsive bakery website with modular components and smooth animations. Focused on clean UI and performance optimization.",
    tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    live: "https://tastytidbites.vercel.app/",
    github: "https://github.com/maazfatima21/website-",
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
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
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