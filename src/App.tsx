import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import Nav from './components/layout/Nav'
import FloatingHearts from './components/layout/FloatingHearts'
import MusicToggle from './components/layout/MusicToggle'
import AppRoutes from './router'
import { burstHearts } from './utils/burstHearts'
import { MusicContext } from './context/MusicContext'
import { useBackgroundMusic } from './hooks/useBackgroundMusic'

function App() {
  const music = useBackgroundMusic()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('.btn-aurora')
      if (target) burstHearts(e.clientX, e.clientY)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <MusicContext.Provider value={music}>
      <HashRouter>
        <FloatingHearts />
        <MusicToggle />
        <AppRoutes />
        <Nav />
      </HashRouter>
    </MusicContext.Provider>
  )
}

export default App
