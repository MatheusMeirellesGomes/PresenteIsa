import type { TimelineMoment } from '../../data/timeline'
import { getMomentPhotos } from '../../data/momentPhotos'
import { useInView } from '../../hooks/useInView'
import styles from './TimelineItem.module.css'

const CATEGORY_ICON: Record<TimelineMoment['category'], string> = {
  inicio: '🌱',
  marco: '💍',
  'viagem-nacional': '🇧🇷',
  'viagem-internacional': '✈️',
  renovacao: '✨',
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split('-')
  return `${day}/${month}/${year}`
}

interface TimelineItemProps {
  moment: TimelineMoment
  side: 'left' | 'right'
  onOpenPhoto: (src: string) => void
}

export default function TimelineItem({ moment, side, onOpenPhoto }: TimelineItemProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const photos = getMomentPhotos(moment.id)

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.visible : ''} ${side === 'right' ? styles.right : ''}`}
    >
      <span className={styles.dot} aria-hidden="true" />
      <div className={styles.cardWrap}>
        <div className={`${styles.card} glass-card ${moment.status === 'upcoming' ? styles.upcoming : ''}`}>
          <div className={styles.meta}>
            <span className={styles.icon} aria-hidden="true">{CATEGORY_ICON[moment.category]}</span>
            <span className={styles.date}>{formatDate(moment.date)}</span>
            {moment.status === 'upcoming' && <span className={styles.badge}>Em breve</span>}
          </div>
          <h3 className={styles.title}>{moment.title}</h3>
          <p className={styles.text}>{moment.text}</p>
          {photos.length > 0 && (
            <div className={styles.photos}>
              {photos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={moment.title}
                  className={styles.photo}
                  loading="lazy"
                  onClick={() => onOpenPhoto(src)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
