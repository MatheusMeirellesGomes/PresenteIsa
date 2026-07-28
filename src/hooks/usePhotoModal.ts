import { useState } from 'react'

export interface OpenPhoto {
  src: string
  caption?: string
}

export function usePhotoModal() {
  const [photo, setPhoto] = useState<OpenPhoto | null>(null)

  return {
    photo,
    open: (src: string, caption?: string) => setPhoto({ src, caption }),
    close: () => setPhoto(null),
  }
}
