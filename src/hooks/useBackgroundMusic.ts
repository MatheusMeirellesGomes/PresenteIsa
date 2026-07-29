import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'presenteisa:music-muted'
const TRACK_URL = `${import.meta.env.BASE_URL}audio/tenderness.mp3`

function getStoredMuted(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(getStoredMuted)

  useEffect(() => {
    const audio = new Audio(TRACK_URL)
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio
    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
    try {
      localStorage.setItem(STORAGE_KEY, muted ? '1' : '0')
    } catch {
      /* localStorage indisponivel, tudo bem */
    }
  }, [muted])

  function start() {
    audioRef.current?.play().catch(() => {
      /* navegador bloqueou autoplay, ela pode religar pelo botao */
    })
  }

  function toggleMuted() {
    setMuted((m) => !m)
  }

  return { muted, start, toggleMuted }
}
