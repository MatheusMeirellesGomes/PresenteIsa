import { Link } from 'react-router-dom'
import Timeline from '../components/timeline/Timeline'

export default function MemoriasPage() {
  return (
    <div className="page fade-in-up">
      <h1 className="aurora-text">Nossas Memórias</h1>
      <p>Amor, cada momento com você é um tesouro. Aqui está a nossa história, do início até hoje.</p>

      <Timeline />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/vales" className="btn-aurora">
          Ver Seus Vales, Amor! 🎁
        </Link>
      </div>
    </div>
  )
}
