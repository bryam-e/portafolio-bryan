import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0f172a",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#38bdf8",
          },

          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 80,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  )
}

export default ParticlesBackground