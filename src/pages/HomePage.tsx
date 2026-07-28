import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

const Hero3D = lazy(() => import('../components/hero/Hero3D'))

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<div className={styles.heroFallback} />}>
        <Hero3D />
      </Suspense>

      <div id="home-content" className="page">
        <div className={`${styles.intro} fade-in-up`}>
          <h1 className={`${styles.introTitle} aurora-text`}>Isadora, preparei uma surpresa para você</h1>
          <p className={styles.introText}>
            Cada ponto naquele globo é um pedaço da nossa história: de Contagem até a aurora
            boreal, do primeiro encontro até hoje. Ainda estamos escrevendo, e você é o motivo de
            cada página.
          </p>
          <p className={styles.introText}>
            Você é muito especial pra mim, e eu quis fazer algo diferente pra te mostrar o quanto
            eu te amo. Clique abaixo pra descobrir a surpresa que preparei com todo carinho!
          </p>
          <div className={styles.actions}>
            <Link to="/detalhes" className="btn-aurora">Ver a Surpresa</Link>
            <Link to="/renovacao" className="btn-aurora">Descubra Nossa Renovação Mágica</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
