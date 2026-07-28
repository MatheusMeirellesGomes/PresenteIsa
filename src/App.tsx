import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import Nav from './components/layout/Nav'
import FloatingHearts from './components/layout/FloatingHearts'
import AppRoutes from './router'
import { burstHearts } from './utils/burstHearts'

function App() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('.btn-aurora')
      if (target) burstHearts(e.clientX, e.clientY)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <HashRouter>
      <FloatingHearts />
      <AppRoutes />
      <Nav />
    </HashRouter>
  )
}

export default App
