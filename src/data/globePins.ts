export interface GlobePin {
  id: string
  label: string
  lat: number
  lon: number
  kind: 'origin' | 'internacional' | 'nacional'
  estado?: string // sigla do estado, para os pins nacionais
  photoMomentId?: string // id em src/assets/timeline/<id> com as fotos do lugar
  status?: 'past' | 'upcoming'
}

export const ORIGIN: GlobePin = {
  id: 'contagem',
  label: 'Contagem, MG',
  lat: -19.93,
  lon: -44.05,
  kind: 'origin',
  estado: 'MG',
}

export const DESTINATIONS: GlobePin[] = [
  { id: 'lisboa', label: 'Lisboa', lat: 38.72, lon: -9.14, kind: 'internacional', photoMomentId: 'portugal' },
  { id: 'copenhague', label: 'Copenhague', lat: 55.68, lon: 12.57, kind: 'internacional', photoMomentId: 'dinamarca' },
  { id: 'tromso', label: 'Tromsø', lat: 69.65, lon: 18.96, kind: 'internacional', photoMomentId: 'aurora-boreal' },
  { id: 'kilpisjarvi', label: 'Kilpisjärvi', lat: 69.05, lon: 20.79, kind: 'internacional', photoMomentId: 'aurora-boreal' },
  { id: 'tiradentes', label: 'Tiradentes', lat: -21.11, lon: -44.17, kind: 'nacional', estado: 'MG', photoMomentId: 'tiradentes' },
  { id: 'serra-do-cipo', label: 'Serra do Cipó', lat: -19.35, lon: -43.6, kind: 'nacional', estado: 'MG', photoMomentId: 'serra-do-cipo' },
  { id: 'pocos-de-caldas', label: 'Poços de Caldas', lat: -21.79, lon: -46.56, kind: 'nacional', estado: 'MG', photoMomentId: 'pocos-de-caldas' },
  { id: 'rio-de-janeiro', label: 'Rio de Janeiro', lat: -22.91, lon: -43.17, kind: 'nacional', estado: 'RJ', photoMomentId: 'rio-de-janeiro' },
  {
    id: 'vinicola-pinhal',
    label: 'Espírito Santo do Pinhal',
    lat: -22.19,
    lon: -46.75,
    kind: 'nacional',
    estado: 'SP',
    photoMomentId: 'vinicola-espirito-santo-do-pinhal',
  },
  {
    id: 'praia',
    label: 'Praia no Rio (em breve)',
    lat: -22.97,
    lon: -43.19,
    kind: 'nacional',
    estado: 'RJ',
    photoMomentId: 'praia',
    status: 'upcoming',
  },
]

// cor por estado, so pra dar identidade visual aos pins nacionais
export const ESTADO_COLOR: Record<string, string> = {
  MG: '#38bdf8',
  RJ: '#34d399',
  SP: '#fbbf24',
}
