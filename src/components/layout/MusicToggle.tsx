import { useMusic } from '../../context/MusicContext'
import styles from './MusicToggle.module.css'

export default function MusicToggle() {
  const { muted, toggleMuted } = useMusic()

  return (
    <button
      className={styles.toggle}
      onClick={toggleMuted}
      aria-label={muted ? 'Ativar música' : 'Silenciar música'}
      aria-pressed={!muted}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  )
}
