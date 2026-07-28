import styles from './PhotoStrip.module.css'

interface PhotoStripProps {
  photos: string[]
  onOpen: (src: string) => void
}

export default function PhotoStrip({ photos, onOpen }: PhotoStripProps) {
  return (
    <div className={styles.strip}>
      {photos.map((src) => (
        <img key={src} src={src} alt="" className={styles.thumb} loading="lazy" onClick={() => onOpen(src)} />
      ))}
    </div>
  )
}
