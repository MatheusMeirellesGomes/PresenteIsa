import { album } from '../../data/album'
import { usePhotoModal } from '../../hooks/usePhotoModal'
import PhotoModal from './PhotoModal'
import styles from './Gallery.module.css'

export default function Gallery() {
  const { photo, open, close } = usePhotoModal()

  return (
    <>
      <div className={styles.grid}>
        {album.map(({ id, src, caption }) => (
          <div key={id} className={`${styles.card} glass-card`} onClick={() => open(src, caption)}>
            <img className={styles.image} src={src} alt={caption} loading="lazy" />
            <span className={styles.caption}>{caption}</span>
          </div>
        ))}
      </div>
      <PhotoModal photo={photo} onClose={close} />
    </>
  )
}
