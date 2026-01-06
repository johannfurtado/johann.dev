import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import johannImg from '../img/jojo2.jpg'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Engenheiro de Software'

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img src={johannImg} alt="Johann Furtado" className="hero-image" />
          </div>
          <h1 className="hero-title">
            Olá, eu sou <span className="highlight">Johann Furtado</span>
          </h1>
          <h2 className="hero-subtitle">
            {typedText}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Software Engineer especializado em React, Laravel e PostgreSQL,
            criando aplicações web escaláveis e de fácil manutenção.
          </p>
          <div className="hero-location">
            <span>📍 Goiânia, Goiás, Brasil</span>
          </div>
          <div className="hero-social">
            <a href="https://github.com/johannfurtado" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/johannfurtado" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:johannfurtado@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Entre em contato</a>
            <a href="#projects" className="btn btn-secondary">Ver projetos</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

