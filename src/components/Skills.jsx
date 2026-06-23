import {
  FaReact,
  FaPhp,
  FaGitAlt
} from "react-icons/fa";

import {
  SiMysql,
  SiJavascript,
  SiArduino,
  SiVite,
  SiElectron
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiArduino />, name: "Arduino" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiElectron />, name: "Electron" }
];

function Skills() {
  return (
    <section className="skills">

      <h2>Tecnologías</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            {skill.icon}

            <h3>{skill.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;