export interface GlobePin {
  id: string
  label: string
  lat: number
  lon: number
  kind: 'origin' | 'internacional' | 'nacional'
}

export const ORIGIN: GlobePin = {
  id: 'contagem',
  label: 'Contagem, MG',
  lat: -19.93,
  lon: -44.05,
  kind: 'origin',
}

export const DESTINATIONS: GlobePin[] = [
  { id: 'lisboa', label: 'Lisboa, Portugal', lat: 38.72, lon: -9.14, kind: 'internacional' },
  { id: 'copenhague', label: 'Copenhague, Dinamarca', lat: 55.68, lon: 12.57, kind: 'internacional' },
  { id: 'tromso', label: 'Tromsø, Noruega', lat: 69.65, lon: 18.96, kind: 'internacional' },
  { id: 'kilpisjarvi', label: 'Kilpisjärvi, Finlândia', lat: 69.05, lon: 20.79, kind: 'internacional' },
  { id: 'tiradentes', label: 'Tiradentes, MG', lat: -21.11, lon: -44.17, kind: 'nacional' },
  { id: 'serra-do-cipo', label: 'Serra do Cipó, MG', lat: -19.35, lon: -43.6, kind: 'nacional' },
  { id: 'rio-de-janeiro', label: 'Rio de Janeiro, RJ', lat: -22.91, lon: -43.17, kind: 'nacional' },
  { id: 'pocos-de-caldas', label: 'Poços de Caldas, MG', lat: -21.79, lon: -46.56, kind: 'nacional' },
]
