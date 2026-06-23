import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Bryan.dev
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
        </li>

        <li>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
        </li>

        <li>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;