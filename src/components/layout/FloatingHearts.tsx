import { useEffect, useRef } from 'react'
import styles from './FloatingHearts.module.css'

interface FloatingHeartsProps {
  count?: number
  spawnIntervalMs?: number
}

const EMOJIS = ['❤️', '💜', '💗']

export default function FloatingHearts({ count = 10, spawnIntervalMs = 1800 }: FloatingHeartsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const spawnHeart = () => {
      const heart = document.createElement('div')
      heart.className = styles.heart
      heart.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      heart.style.left = `${Math.random() * 100}vw`
      heart.style.fontSize = `${1 + Math.random() * 1.1}rem`
      const duration = 6 + Math.random() * 5
      heart.style.animationDuration = `${duration}s`
      container.appendChild(heart)
      setTimeout(() => heart.remove(), duration * 1000)
    }

    const initialTimeouts = Array.from({ length: count }, (_, i) => setTimeout(spawnHeart, i * 400))
    const interval = setInterval(spawnHeart, spawnIntervalMs)

    return () => {
      initialTimeouts.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [count, spawnIntervalMs])

  return <div ref={containerRef} className={styles.container} aria-hidden="true" />
}
