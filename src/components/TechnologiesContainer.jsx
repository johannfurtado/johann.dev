import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMysql,
    DiReact,
    DiGit,
  } from "react-icons/di"
  import { SiFlutter, SiLaravel, SiPhp, SiVuedotjs } from "react-icons/si"
  import "../styles/components/technologiescontainer.sass"
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "vue", name: "Vue.js", icon: < SiVuedotjs/>},
    { id: "flutter", name: "Flutter", icon: < SiFlutter/>},
    { id: "php", name: "PHP", icon: <SiPhp /> },
    { id: "laravel", name: "Laravel", icon: <SiLaravel /> },
    { id: "git", name: "Git", icon: <DiGit />}
  ]

  const technologyDescriptions = {
    html: "Marcação padrão para estruturar páginas web com elementos como títulos e listas.",
    css: "Estilo para controlar aparência e layout em páginas web.",
    js: "Linguagem versátil, dinâmica, amplamente usada em desenvolvimento web, front-end e back-end.",
    mysql: "Banco de dados relacional de código aberto para armazenamento e gerenciamento de dados.",
    react: "Biblioteca JavaScript para criar interfaces de usuário interativas e reutilizáveis.",
    vue: "Framework JavaScript progressivo para construir interfaces de usuário.",
    flutter: "Framework da Google para desenvolver apps nativos Android e iOS.",
    php: "Linguagem de servidor para criar aplicativos web dinâmicos e interativos.",
    laravel: "Framework PHP de código aberto para desenvolvimento web simplificado.",
    git: "Sistema de controle de versão para rastrear mudanças em código-fonte de software."
  }
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{technologyDescriptions[tech.id]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default TechnologiesContainer