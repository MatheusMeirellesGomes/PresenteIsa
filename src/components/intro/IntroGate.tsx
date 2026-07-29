import { useState } from 'react'
import FloatingHearts from '../layout/FloatingHearts'
import { useMusic } from '../../context/MusicContext'
import styles from './IntroGate.module.css'

const STORAGE_KEY = 'presenteisa:gate-opened'

interface IntroGateProps {
  onOpen: () => void
}

export function shouldShowGate(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== '1'
  } catch {
    return true
  }
}

export default function IntroGate({ onOpen }: IntroGateProps) {
  const [closing, setClosing] = useState(false)
  const { start } = useMusic()

  function handleOpen() {
    // chama play() sincrono dentro do clique, senao o navegador bloqueia o autoplay
    start()
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* sessionStorage indisponivel, tudo bem */
    }
    setClosing(true)
    setTimeout(onOpen, 650)
  }

  return (
    <div className={`${styles.gate} ${closing ? styles.closing : ''}`}>
      <FloatingHearts count={6} spawnIntervalMs={2200} />
      <span className={styles.icon} aria-hidden="true">💌</span>
      <h1 className={`${styles.title} aurora-text`}>Isadora</h1>
      <p className={styles.message}>
        Amor, tenho muito orgulho de você e de tudo que vivemos até aqui. Nossa jornada é feita
        de tantas coisas boas, e sei que estamos subindo, degrau por degrau, rumo a tudo que
        planejamos juntos. Obrigado por ser exatamente quem você é — isso aqui é só uma forma de
        expressar a minha gratidão e o meu amor por você.
      </p>
      <p className={styles.subtitle}>Toque quando estiver pronta.</p>
      <button className={`${styles.button} btn-aurora`} onClick={handleOpen}>
        Abrir minha surpresa
      </button>
    </div>
  )
}
