import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="inicio"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">

        <span className="hero-badge">
          🚀 Portafolio Profesional
        </span>

        <h1>
          BRYAN
        </h1>

        <h2>
          DESARROLLADOR WEB FULL STACK
        </h2>

        <p>
          Desarrollo aplicaciones web, sistemas de gestión,
          bases de datos y soluciones tecnológicas utilizando
          React, PHP, MySQL, Electron y Arduino.
        </p>

        <a href="#proyectos" className="hero-btn">
          Ver Proyectos
        </a>

        <div className="hero-tech">

          <span>React</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>Arduino</span>
          <span>Electron</span>
          <span>Vite</span>

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;