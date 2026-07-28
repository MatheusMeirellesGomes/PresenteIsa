import type { GlobePin } from '../../data/globePins'
import { getMomentPhotos } from '../../data/momentPhotos'
import PhotoStrip from '../gallery/PhotoStrip'
import styles from './LocationPanel.module.css'

interface LocationPanelProps {
  pin: GlobePin
  onClose: () => void
  onOpenPhoto: (src: string) => void
}

export default function LocationPanel({ pin, onClose, onOpenPhoto }: LocationPanelProps) {
  const photos = pin.photoMomentId ? getMomentPhotos(pin.photoMomentId) : []

  return (
    <div className={`${styles.panel} glass-card`}>
      <div className={styles.header}>
        <span className={styles.title}>
          {pin.label}
          {pin.estado && <span className={styles.estado}>{pin.estado}</span>}
        </span>
        <button className={styles.close} onClick={onClose} aria-label="Fechar">✖</button>
      </div>

      {photos.length > 0 ? (
        <PhotoStrip photos={photos} onOpen={onOpenPhoto} />
      ) : (
        <p className={styles.empty}>
          {pin.status === 'upcoming' ? 'Ainda vamos criar essas memórias 💫' : 'Fotos daqui chegando em breve 📷'}
        </p>
      )}
    </div>
  )
}
