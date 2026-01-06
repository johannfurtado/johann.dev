import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="section contact">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">06.</span>
                    Contato
                </h2>
                <div className="contact-info">
                    <p className="contact-description">
                        Estou sempre aberto a novas oportunidades e projetos interessantes.
                        Se você tem uma ideia ou quer trabalhar junto, entre em contato!
                    </p>
                    <div className="contact-social">
                        <a href="https://github.com/johannfurtado" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/johannfurtado" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:johannfurtado@gmail.com" className="social-link">
                            <FaEnvelope />
                            <span>Email</span>
                        </a>
                        <a href="https://wa.me/5562982388893" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaWhatsapp />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
