import React from 'react'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
    const education = [
        {
            degree: 'Pós-graduação em Engenharia de Software',
            institution: 'Uniamérica',
            period: 'jun de 2024 - set de 2025',
            status: 'Concluído'
        },
        {
            degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
            institution: 'Uniamérica',
            period: 'jan de 2022 - jun de 2024',
            status: 'Concluído'
        },
        {
            degree: 'Curso Profissionalizante em Programação de Sistemas',
            institution: 'Faculdade SENAI Fatesg',
            period: 'out de 2022 - fev de 2023',
            description: 'Curso abrangente incluindo Lógica de Programação, Banco de Dados Oracle, Gerência de Projetos, Arquitetura de Software, Git, Programação Web (HTML/CSS/JS, PHP Laravel), Desenvolvimento Mobile (Flutter) e Virtualização (Docker).',
            status: 'Concluído'
        },
        {
            degree: 'Bacharelado em Ciência da Computação',
            institution: 'Pontifícia Universidade Católica de Goiás',
            period: '2019 - 2020',
        },
    ]

    return (
        <div className="section education">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">04.</span>
                    Formação Acadêmica
                </h2>
                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <div className="education-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="education-content">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <div className="education-institution">
                                    {edu.institution}
                                </div>
                                <div className="education-period">
                                    <FaCalendarAlt className="icon" />
                                    {edu.period}
                                    {edu.status && <span className="education-status"> · {edu.status}</span>}
                                </div>
                                {edu.description && (
                                    <p className="education-description">{edu.description}</p>
                                )}
                                {edu.skills && (
                                    <div className="education-skills">
                                        {edu.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
