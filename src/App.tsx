import { HashRouter } from 'react-router-dom'
import Nav from './components/layout/Nav'
import FloatingHearts from './components/layout/FloatingHearts'
import AppRoutes from './router'

function App() {
  return (
    <HashRouter>
      <FloatingHearts />
      <AppRoutes />
      <Nav />
    </HashRouter>
  )
}

export default App
