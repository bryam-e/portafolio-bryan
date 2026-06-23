import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
      id="inicio"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="hero-left">

        <h1>
          Hola, soy <span>Bryan</span>
        </h1>

        <TypeAnimation
          sequence={[
            'Desarrollador Web',
            2000,
            'Frontend Developer',
            2000,
            'React Developer',
            2000,
          ]}
          wrapper="span"
          repeat={Infinity}
          className="typing"
        />

        <p>
          Desarrollo aplicaciones modernas utilizando React,
          PHP, MySQL y tecnologías web actuales.
        </p>

        <a href="#proyectos" className="hero-btn">
  Ver Proyectos
</a>

      </div>

      <div className="hero-right">

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          scale={1.05}
        >
          <div className="avatar">
            👨‍💻
          </div>
        </Tilt>

      </div>

    </motion.section>
  )
}

export default Hero