import { useMemo } from 'react'
import { randomLoveWord } from '../../data/loveWords'
import type { OpenPhoto } from '../../hooks/usePhotoModal'
import styles from './PhotoModal.module.css'

interface PhotoModalProps {
  photo: OpenPhoto | null
  onClose: () => void
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  // se nao tiver legenda propria, sorteia uma palavra carinhosa; muda a
  // cada foto nova, mas fica estavel enquanto o modal segue aberto nela
  const fallbackWord = useMemo(() => randomLoveWord(), [photo?.src])

  if (!photo) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.close} onClick={onClose} aria-label="Fechar">
        ✖
      </button>
      <div className={styles.frame} onClick={(e) => e.stopPropagation()}>
        <img className={styles.image} src={photo.src} alt="" />
        <p className={styles.word}>
          <span aria-hidden="true">♡ </span>
          {photo.caption ?? fallbackWord}
        </p>
      </div>
    </div>
  )
}
