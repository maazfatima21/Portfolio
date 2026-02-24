import "../styles/About.css";
import { useEffect, useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Vite","JavaScript", "HTML5", "CSS3", "React Router"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      const position = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (position < screenPosition) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-skills" id="about">
      <div className={`about-skills-container ${show ? "fade-in" : ""}`}>
        
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p>
            Computer Science graduate (2024) with hands-on experience in building 
            full-stack web applications using the MERN stack (MongoDB, Express.js, 
            React.js, and Node.js). I have developed real-world projects involving 
            authentication systems, RESTful APIs, CRUD operations, and responsive 
            frontend interfaces.
          </p>

          <p>
            Currently seeking an entry-level Full Stack, React, or Software Developer 
            role where I can contribute to real-world projects and grow as a developer.
          </p>
        </div>

        <div className="skills-content">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-rows">
          {skillsData.map((section, index) => (
            <div className="skill-row" key={index}>
              <h3>{section.category}</h3>

              <div className="skill-list">
                {section.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>      
        
      </div>
    </section>
  );
}

export default About;