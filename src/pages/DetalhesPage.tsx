import { Link } from 'react-router-dom'
import CounterLive from '../components/counter/CounterLive'
import { useTypewriter } from '../hooks/useTypewriter'
import styles from './DetalhesPage.module.css'

const NAMORO_START = new Date('2025-04-04T00:00:00')
const MENSAGEM =
  'Amor, como sempre digo pra você, palavras não são suficientes pra eu dizer o quanto eu te amo, mas saiba que o meu amor por vc é enorme, eu te amo muito.'

export default function DetalhesPage() {
  const { text, done } = useTypewriter(MENSAGEM, { startDelayMs: 1200, speedMs: 45 })

  return (
    <div className="page fade-in-up">
      <h2 className={styles.verse}>1 Coríntios 13:4-7</h2>
      <p className={styles.quote}>
        "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não
        maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor
        não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo
        espera, tudo suporta."
      </p>

      <h1 className={`${styles.title} aurora-text`}>Isadora, você é meu mundo desde:</h1>
      <CounterLive startDate={NAMORO_START} />

      <hr className={styles.divider} />

      <p className={`${styles.message} ${done ? styles.done : ''}`}>{text}</p>

      <div className={styles.cta}>
        <Link to="/memorias" className="btn-aurora">
          Veja Nossas Memórias, Amor! 💕
        </Link>
      </div>
    </div>
  )
}
