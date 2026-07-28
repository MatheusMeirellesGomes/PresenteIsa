import { useElapsedTime } from '../../hooks/useElapsedTime'
import styles from './CounterLive.module.css'

interface CounterLiveProps {
  startDate: Date
  label?: string
}

const UNITS: Array<{ key: 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds'; label: string }> = [
  { key: 'years', label: 'Anos' },
  { key: 'months', label: 'Meses' },
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
]

export default function CounterLive({ startDate, label }: CounterLiveProps) {
  const elapsed = useElapsedTime(startDate)

  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.grid}>
        {UNITS.map(({ key, label: unitLabel }) => (
          <div key={key} className={`${styles.unit} glass-card`}>
            <span className={styles.value}>{String(elapsed[key]).padStart(2, '0')}</span>
            <span className={styles.unitLabel}>{unitLabel}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
