import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            title: 'SGP - Sistema de Gestão Prisional',
            company: 'Infocensus Tecnologia',
            description: 'Trabalho como desenvolvedor em uma equipe de 4 desenvolvedores, construindo um sistema de gestão prisional usando Laravel, React e PostgreSQL.',
            skills: ['Laravel', 'React', 'PostgreSQL', 'Scrum', 'Kanban', 'GitFlow'],
            // github: '#',
            // demo: '#'
        },
        {
            title: 'DiLlamas',
            company: 'johann.dev',
            description: 'Estou desenvolvendo solo uma rede social de dilemas utilizando Next.js, Tailwind CSS, Prisma e PostgreSQL.',
            skills: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Trello'],
            demo: 'https://www.dillamas.com/'
        },
        {
            title: 'Site - Casa de Acolhimento de Amor de Felipe',
            company: 'johann.dev',
            description: 'Trabalhei como desenvolvedor solo, construindo um site para a Casa de Acolhimento de Amor de Felipe de maneira totalmente gratuita.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
            demo: 'https://www.casaamordefelipe.org.br/'
        },
        {
            title: 'Painel FiveZap',
            company: 'Five Gestor',
            description: 'Trabalhei como engenheiro de software, focando em corrigir erros de design, otimizar consultas e fazer deploy da aplicação em produção. Desenvolvi novas funcionalidades, corrigi bugs, implementei websocket para recebimento de mensagens em tempo real e atualmente desenvolvo novas funcionalidades e mantenho o software.',
            skills: ['Vue.js', 'API REST', 'Figma', 'Gestão de projetos', 'Gestão da qualidade'],
            // github: '#',
            // demo: '#'
        },
        {
            title: 'FiveZap Api',
            company: 'Five Gestor',
            description: 'Trabalhei como engenheiro de software, arquitetando e construindo uma API para integrar aplicações internas com serviços externos. Atualmente mantenho e desenvolvo novas funcionalidades nesta API.',
            skills: ['PHP', 'Laravel', 'API REST', 'Scrum', 'Kanban', 'Arquitetura de software', 'Gestão de projetos'],
            // github: '#',
            // demo: '#'
        },
        {
            title: 'Sistema PDV e Orçamento',
            company: 'Zetti Tech',
            description: 'Fui parte de uma equipe de 4 desenvolvedores, construindo um software completo de PDV e orçamento do zero. Este projeto envolveu funcionalidades farmacêuticas complexas e integrações com outras aplicações da empresa. Também fui responsável por correção de bugs em ambientes de teste e revisão de código.',
            skills: ['Flutter', 'Dart', 'Clean Architecture', 'Kanban', 'Git', 'Resolução de problemas'],
            // github: '#',
            // demo: '#'
        },
        {
            title: 'TradioBank App',
            company: 'Tradio Pagamentos LTDA - Tradio Bank',
            description: 'Trabalhei como desenvolvedor em uma equipe de 5, responsável por implementar novas funcionalidades em uma aplicação mobile e fornecer manutenção, incluindo correção de bugs em ambientes de aprovação e produção. A descrição destaca meu envolvimento em tarefas de integração complexas e implementações de métodos de pagamento.',
            skills: ['React.js', 'PHP', 'Laravel', 'Scrum', 'Kanban', 'API REST'],
            // github: '#',
            // demo: '#'
        },
        {
            title: 'GPP - Gerenciamento de peças e pedidos',
            company: 'Novo Mundo S.A.',
            description: 'Trabalhei como desenvolvedor em uma equipe de 4 desenvolvedores, atendendo demandas de novas funcionalidades na aplicação mobile e fornecendo manutenção, corrigindo bugs em ambientes de aprovação e produção.',
            skills: ['Flutter', 'Laravel', 'PHP', 'Scrum', 'Kanban', 'GitFlow'],
            // github: '#',
            // demo: '#'
        },
        {
            title: 'Novo Mundo R.I - Painel Admin',
            company: 'Novo Mundo S.A.',
            description: 'Projetei, planejei e desenvolvi, junto com uma equipe de 4 desenvolvedores, o painel administrativo da página de relações institucionais do Novo Mundo.',
            skills: ['Figma', 'PHP', 'Laravel', 'Vue.js', 'Git', 'Scrum', 'Kanban'],
            // github: '#',
            // demo: '#'
        }
    ]

    return (
        <div className="section projects">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">03.</span>
                    Projetos
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <div className="project-title-wrapper">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-company">{project.company}</span>
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-skills">
                                {project.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
