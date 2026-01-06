// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'

function App() {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const targetText = 'johannfurtado.dev'
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setTypedText(targetText.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 150)
  }, [])

  return (
    <div id="portfolio">
      <h1>{typedText}</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
