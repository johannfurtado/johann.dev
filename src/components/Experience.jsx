import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const Experience = () => {
    const experiences = [
        {
            title: 'Desenvolvedor Full Stack',
            company: 'Infocensus Tecnologia',
            type: 'Tempo integral',
            period: 'out de 2024 - o momento',
            duration: '1 ano 4 meses',
            location: 'São Paulo, São Paulo, Brasil · Remota',
            description: 'Atuando como desenvolvedor full stack usando Laravel, React e PostgreSQL para reconstruir um sistema de gestão prisional. Focado em criar soluções eficientes e inovadoras para melhorar a gestão e o controle de informações.',
            skills: ['Laravel', 'React.js', 'PostgreSQL']
        },
        {
            title: 'Gerente de Projetos',
            company: 'Fire-Droid Game Studio',
            type: 'Tempo integral',
            period: 'jul de 2024 - o momento',
            duration: '1 ano 7 meses',
            location: 'Goiânia, GO · Remota',
            description: 'Responsável por planejar, organizar e coordenar todas as fases de desenvolvimento dos jogos, garantir o cumprimento dos prazos, e assegurar a qualidade do projeto. Solucionador de problemas, ajustando planos conforme necessário.',
            skills: ['Gestão de projetos', 'Miro']
        },
        {
            title: 'Líder Técnico',
            company: 'Five Gestor',
            type: 'Autônomo',
            period: 'out de 2024 - jan de 2025',
            duration: '4 meses',
            location: 'Goiânia, Goiás, Brasil · Remota',
            description: 'Liderei uma equipe de desenvolvedores no projeto "Fivezap", focando em arquitetura escalável e práticas robustas de desenvolvimento. Como Tech Lead, fui responsável por recrutar e integrar dois desenvolvedores, organizar o fluxo de trabalho com ênfase em princípios de Clean Code e metodologias ágeis.',
            skills: ['Laravel', 'Vue.js', 'Arquitetura de Software', 'Clean Code']
        },
        {
            title: 'Engenheiro de Software Full Stack Pleno',
            company: 'Five Gestor',
            type: 'Autônomo',
            period: 'mar de 2024 - out de 2024',
            duration: '8 meses',
            location: 'Goiânia, Goiás, Brasil · Remota',
            description: 'Desenvolvi aplicações web usando Vue.js para o front-end e Laravel (PHP) para o back-end. Utilizei ferramentas de controle de versão como Git, GitHub e Bitbucket. Realizei deploys em ambientes de produção e staging usando Docker. Trabalhei com bancos de dados MySQL e segui o framework Scrum para gestão ágil de projetos.',
            skills: ['PHP', 'Vue.js', 'Docker', 'MySQL', 'Scrum']
        },
        {
            title: 'Engenheiro de Software Jr III',
            company: 'Zetti Tech',
            type: 'Tempo integral',
            period: 'set de 2023 - mar de 2024',
            duration: '7 meses',
            location: 'Goiânia, Goiás, Brasil · Presencial',
            description: 'Desenvolvi sistemas multiplataforma com Flutter e Riverpod, trabalhando em sistemas PDV e orçamento (incluindo notas fiscais eletrônicas). Utilizei PostgreSQL e Git, realizei deploys com Docker e apliquei Clean Architecture.',
            skills: ['Flutter', 'Git', 'PostgreSQL', 'Docker', 'Clean Architecture']
        },
        {
            title: 'Desenvolvedor Full Stack Jr III',
            company: 'Tradio Pagamentos LTDA - Tradio Bank',
            type: 'Tempo integral',
            period: 'abr de 2023 - set de 2023',
            duration: '6 meses',
            location: 'Goiânia, Goiás, Brasil · Híbrida',
            description: 'Desenvolvi aplicações web com React e CoreUI (front-end) e Laravel (PHP) (back-end). Apliquei Scrum, utilizei Git Flow, trabalhei com padrão M.V.C. e gerenciei bancos de dados MySQL.',
            skills: ['PHP', 'React.js', 'Laravel', 'MySQL', 'Scrum']
        },
        {
            title: 'Desenvolvedor Full Stack Jr',
            company: 'Novo Mundo S.A.',
            type: 'Tempo integral',
            period: 'out de 2022 - abr de 2023',
            duration: '7 meses',
            location: 'Goiânia, Goiás, Brasil · Presencial',
            description: 'Criei templates de interface de usuário no Figma, desenvolvi aplicações web usando Vue.js, HTML, CSS e Bootstrap. Desenvolvi aplicações mobile e browser com Flutter (Dart) e gerenciei o estado da aplicação com GetX. Para o back-end, usei Laravel (PHP) e implementei software em ambientes de teste, homologação e produção.',
            skills: ['PHP', 'Vue.js', 'Flutter', 'Laravel', 'Oracle Database', 'Figma']
        }
    ]

    return (
        <div className="section experience">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">02.</span>
                    Experiência
                </h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <h3 className="experience-title">{exp.title}</h3>
                                <div className="experience-company">
                                    <FaBriefcase className="icon" />
                                    <span>{exp.company}</span>
                                    <span className="separator">·</span>
                                    <span>{exp.type}</span>
                                </div>
                                <div className="experience-meta">
                                    <span className="experience-period">
                                        <FaCalendarAlt className="icon" />
                                        {exp.period} · {exp.duration}
                                    </span>
                                    <span className="experience-location">
                                        <FaMapMarkerAlt className="icon" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                            <p className="experience-description">{exp.description}</p>
                            <div className="experience-skills">
                                {exp.skills.map((skill, skillIndex) => (
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

export default Experience
