import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import "../styles/Hero.css";

class Particle {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.speedY = (Math.random() - 0.5) * 1.2;
  }

  update(mouse) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;

    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        this.x -= dx / 25;
        this.y -= dy / 25;
      }
    }
  }

  draw() {
    this.ctx.fillStyle = "rgba(0,198,255,0.8)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = { x: null, y: null };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function init() {
      particles = [];
      for (let i = 0; i < 45; i++) {
        particles.push(new Particle(canvas, ctx));
      }
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 5000) {
            const opacity = 1 - distance / 4000;
            ctx.strokeStyle = `rgba(0,198,255,${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(mouse);
        particle.draw();
      });

      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return (
    <section className="hero" id="home">

      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="parallax-layer layer1"></div>
      <div className="parallax-layer layer2"></div>

      <div className="hero-title">
        <h1 className="hero-name">Maaz Fatima</h1>
        <h2 className="hero-role">Full Stack MERN Developer</h2>
        <p className="hero-description">
          Building scalable web applications with modern UI,
          clean architecture, and secure backend systems.
        </p>

        <div className="hero-wrapper">
          <a href="/about" className="home-Abt-btn">About Me</a>
          <span className="side-arrow">→</span>
        </div>

      </div>

      <div className="hero-bottom">
        <a href="/projects" className="view-btn">Latest Works</a>
        <div className="down-arrow">↓</div>
      </div>

      <div className="hero-socials">
        <a href="https://github.com/maazfatima21" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/maazfatima" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="/MaazFatima_Resume_2026.pdf" download>
          <FaDownload />
        </a>
      </div>

    </section>
  );
}

export default Hero;