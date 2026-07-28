import { Link } from 'react-router-dom'
import ValeCard from '../components/vales/ValeCard'
import { vales } from '../data/vales'
import styles from './ValesPage.module.css'

export default function ValesPage() {
  return (
    <div className="page fade-in-up">
      <h1 className="aurora-text">Vales Especiais para Você, Isadora!</h1>

      <div className={styles.list}>
        {vales.map((vale) => (
          <ValeCard key={vale.id} vale={vale} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/detalhes" className="btn-aurora">Voltar para a Surpresa</Link>
      </div>
    </div>
  )
}
