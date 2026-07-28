import { Link } from 'react-router-dom'
import Gallery from '../components/gallery/Gallery'
import Timeline from '../components/timeline/Timeline'

export default function MemoriasPage() {
  return (
    <div className="page fade-in-up">
      <h1 className="aurora-text">Nossas Memórias</h1>
      <p>Amor, cada momento com você é um tesouro. Aqui estão nossas lembranças do primeiro mês, guardadas com todo carinho!</p>

      <Gallery />

      <h2 className="aurora-text" style={{ marginBottom: '0.5rem' }}>Nossa história completa</h2>
      <Timeline />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/vales" className="btn-aurora">
          Ver Seus Vales, Amor! 🎁
        </Link>
      </div>
    </div>
  )
}
