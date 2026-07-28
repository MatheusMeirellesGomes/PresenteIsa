import { useState } from 'react'
import FloatingHearts from '../layout/FloatingHearts'
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

  function handleOpen() {
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
      <p className={styles.subtitle}>Preparei uma coisa pra você. Toque quando estiver pronta.</p>
      <button className={`${styles.button} btn-aurora`} onClick={handleOpen}>
        Abrir minha surpresa
      </button>
    </div>
  )
}
