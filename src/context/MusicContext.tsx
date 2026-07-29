import { createContext, useContext } from 'react'

export interface MusicContextValue {
  muted: boolean
  start: () => void
  toggleMuted: () => void
}

export const MusicContext = createContext<MusicContextValue | null>(null)

export function useMusic(): MusicContextValue {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic deve ser usado dentro de MusicContext.Provider')
  return ctx
}
