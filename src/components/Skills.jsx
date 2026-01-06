import React, { useState } from 'react'
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiPhp,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiVuedotjs,
    SiNodedotjs,
    SiNestjs,
    SiLaravel,
    SiPostgresql,
    SiFlutter,
    SiGit,
    SiDocker,
    SiPostman,
    SiFigma,
    SiVisualstudiocode,
    SiVite,
    SiMysql,
    SiOpenai,
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaWindows, FaLinux, FaCode, FaJava } from 'react-icons/fa'

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState('Tudo')

    const technologies = [
        // Linguagens
        { name: 'TypeScript', category: 'Linguagens', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', category: 'Linguagens', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Python', category: 'Linguagens', icon: SiPython, color: '#3776AB' },
        { name: 'PHP', category: 'Linguagens', icon: SiPhp, color: '#777BB4' },
        { name: 'Java', category: 'Linguagens', icon: FaJava, color: '#ED8B00' },

        // Front End
        { name: 'React', category: 'Front End', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', category: 'Front End', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', category: 'Front End', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vue.js', category: 'Front End', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'HTML', category: 'Front End', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', category: 'Front End', icon: FaCss3Alt, color: '#1572B6' },

        // Back End
        { name: 'Node.js', category: 'Back End', icon: SiNodedotjs, color: '#339933' },
        { name: 'NestJS', category: 'Back End', icon: SiNestjs, color: '#E0234E' },
        { name: 'Laravel', category: 'Back End', icon: SiLaravel, color: '#FF2D20' },
        { name: 'PostgreSQL', category: 'Back End', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', category: 'Back End', icon: SiMysql, color: '#4479A1' },

        // Mobile
        { name: 'React Native', category: 'Mobile', icon: SiReact, color: '#61DAFB' },
        { name: 'Flutter', category: 'Mobile', icon: SiFlutter, color: '#02569B' },

        // Ferramentas e Outros
        { name: 'Git', category: 'Ferramentas e Outros', icon: SiGit, color: '#F05032' },
        { name: 'Docker', category: 'Ferramentas e Outros', icon: SiDocker, color: '#2496ED' },
        { name: 'Postman', category: 'Ferramentas e Outros', icon: SiPostman, color: '#FF6C37' },
        { name: 'Figma', category: 'Ferramentas e Outros', icon: SiFigma, color: '#F24E1E' },
        { name: 'VS Code', category: 'Ferramentas e Outros', icon: SiVisualstudiocode, color: '#007ACC' },
        { name: 'Vite', category: 'Ferramentas e Outros', icon: SiVite, color: '#646CFF' },

        // IA
        { name: 'ChatGPT', category: 'IA', icon: SiOpenai, color: '#10A37F' },
        { name: 'Cursor', category: 'IA', icon: FaCode, color: '#000000' },

        // Sistemas Operacionais
        { name: 'Windows', category: 'Sistemas Operacionais', icon: FaWindows, color: '#0078D6' },
        { name: 'Linux', category: 'Sistemas Operacionais', icon: FaLinux, color: '#000000' },
    ]

    const filters = ['Tudo', 'Linguagens', 'Front End', 'Back End', 'Mobile', 'Ferramentas e Outros', 'IA', 'Sistemas Operacionais']

    const filteredTechnologies = activeFilter === 'Tudo'
        ? technologies
        : technologies.filter(tech => tech.category === activeFilter)

    return (
        <div className="section skills">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">05.</span>
                    Tecnologias
                </h2>

                <div className="skills-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="technologies-grid">
                    {filteredTechnologies.map((tech, index) => {
                        const IconComponent = tech.icon
                        return (
                            <div key={index} className="technology-card">
                                <div className="technology-icon" style={{ color: tech.color }}>
                                    <IconComponent />
                                </div>
                                <span className="technology-name">{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
