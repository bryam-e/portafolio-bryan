import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          Disponible para proyectos
        </span>

        <h1>
          Bryan
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
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          Desarrollo aplicaciones web modernas utilizando
          React, PHP, MySQL, Electron y tecnologías actuales.
        </p>

        <div className="hero-buttons">

          <a href="#proyectos">
            Ver Proyectos
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero