import { timeline } from '../../data/timeline'
import { usePhotoModal } from '../../hooks/usePhotoModal'
import PhotoModal from '../gallery/PhotoModal'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.css'

export default function Timeline() {
  const { photo, open, close } = usePhotoModal()

  return (
    <div className={styles.timeline}>
      {timeline.map((moment, index) => (
        <TimelineItem key={moment.id} moment={moment} side={index % 2 === 0 ? 'left' : 'right'} onOpenPhoto={open} />
      ))}
      <PhotoModal photo={photo} onClose={close} />
    </div>
  )
}
