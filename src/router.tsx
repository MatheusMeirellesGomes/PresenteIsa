import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetalhesPage from './pages/DetalhesPage'
import MemoriasPage from './pages/MemoriasPage'
import RenovacaoPage from './pages/RenovacaoPage'
import ValesPage from './pages/ValesPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detalhes" element={<DetalhesPage />} />
      <Route path="/memorias" element={<MemoriasPage />} />
      <Route path="/renovacao" element={<RenovacaoPage />} />
      <Route path="/vales" element={<ValesPage />} />
    </Routes>
  )
}
