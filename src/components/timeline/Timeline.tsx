import { useState } from 'react'
import { timeline } from '../../data/timeline'
import PhotoModal from '../gallery/PhotoModal'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.css'

export default function Timeline() {
  const [openPhoto, setOpenPhoto] = useState<string | null>(null)

  return (
    <div className={styles.timeline}>
      {timeline.map((moment, index) => (
        <TimelineItem key={moment.id} moment={moment} side={index % 2 === 0 ? 'left' : 'right'} onOpenPhoto={setOpenPhoto} />
      ))}
      <PhotoModal src={openPhoto} onClose={() => setOpenPhoto(null)} />
    </div>
  )
}
