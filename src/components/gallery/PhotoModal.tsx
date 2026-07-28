import { useMemo } from 'react'
import { randomLoveWord } from '../../data/loveWords'
import styles from './PhotoModal.module.css'

interface PhotoModalProps {
  src: string | null
  onClose: () => void
}

export default function PhotoModal({ src, onClose }: PhotoModalProps) {
  // muda a cada vez que uma foto e aberta (src muda), mas fica estavel
  // enquanto o modal permanece aberto na mesma foto
  const word = useMemo(() => randomLoveWord(), [src])

  if (!src) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.close} onClick={onClose} aria-label="Fechar">
        ✖
      </button>
      <div className={styles.frame} onClick={(e) => e.stopPropagation()}>
        <img className={styles.image} src={src} alt="" />
        <p className={styles.word}>
          <span aria-hidden="true">♡ </span>
          {word}
        </p>
      </div>
    </div>
  )
}
