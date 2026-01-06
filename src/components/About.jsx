import React from 'react'

const About = () => {
    return (
        <div className="section about">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">01.</span>
                    Sobre Mim
                </h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Engenheiro de Software com experiência em React, Laravel e PostgreSQL,
                            criando aplicações web escaláveis e de fácil manutenção. Proficiente em GitHub,
                            integração de APIs e modelagem de banco de dados.
                        </p>
                        <p>
                            Focado em código limpo, melhores práticas e na entrega de soluções eficientes
                            e de alta qualidade em ambientes colaborativos.
                        </p>
                        <p>
                            Atualmente trabalho como <strong>Engenheiro de Software</strong> na
                            <strong> Infocensus Tecnologia</strong>, onde atuo na reconstrução de um sistema
                            de gestão prisional usando Laravel, React e PostgreSQL.
                        </p>
                        <div className="about-highlights">
                            <h3>Principais competências:</h3>
                            <ul>
                                <li>Flutter</li>
                                <li>Laravel</li>
                                <li>Gestão de projetos</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>PostgreSQL</li>
                                <li>PHP</li>
                                <li>Vue.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
