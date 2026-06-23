const projects = [
  {
    title: "Sistema Punto de Venta",
    image: "/public/projects/pdev.jpg",
    description: "Control de ventas, inventario y clientes.",
    tech: "React • Electron • SQLite",
    demo: "#",
    github: "#"
  },
  {
    title: "Recetario",
    image: "/public/projects/recetario.jpg",
    description: "pagina web para compartir recetas de cocina.",
    tech: "PHP • MySQL",
    demo: "#",
    github: "#"
  }
]

function Projects() {
  return (
   <section id="proyectos" className="projects">

      <h2>Mis Proyectos</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-buttons">

              <a href={project.demo} target="_blank">
  <button>Demo</button>
</a>

<a href={project.github} target="_blank">
  <button>GitHub</button>
</a>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects