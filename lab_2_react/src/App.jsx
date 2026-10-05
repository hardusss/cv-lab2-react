import { useEffect, useState } from 'react'
import { cv } from './data/cv.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Achievements from './components/Achievements.jsx'
import Timeline from './components/Timeline.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  // Мова зберігається у стані: зміна lang перемальовує всі компоненти з новим текстом
  const [lang, setLang] = useState('ua')
  const t = cv[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.title
  }, [t])

  const toggleLang = () => setLang((current) => (current === 'ua' ? 'en' : 'ua'))

  return (
    <div className="page">
      <Header nav={t.nav} lang={lang} switchLabel={t.switchTo} onToggleLang={toggleLang} />
      <main>
        <Hero badge={t.badge} hero={t.hero} contacts={t.contacts} locale={t.locale} />
        <Experience data={t.experience} />
        <Achievements data={t.awards} />
        <Timeline data={t.path} />
        <Skills data={t.stack} />
        <Education data={t.education} />
      </main>
      <Footer data={t.footer} contacts={t.contacts} />
    </div>
  )
}

export default App
