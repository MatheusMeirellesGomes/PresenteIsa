import { imgUrl } from '../utils/assetUrl'

export interface AlbumPhoto {
  id: string
  src: string
  caption: string
}

// Fotos do primeiro mes de namoro (fev-mai/2025), lista fixa
export const album: AlbumPhoto[] = [
  { id: 'fotojogo', src: imgUrl('fotojogo.jpg'), caption: 'Nosso jogo favorito, onde tudo começou!' },
  { id: 'foto', src: imgUrl('foto.jpg'), caption: 'Um dia especial que marcou nosso coração.' },
  { id: 'foto1', src: imgUrl('foto1.jpg'), caption: 'Risos e alegria, só com você!' },
  { id: 'foto3', src: imgUrl('foto3.jpg'), caption: 'Um momento que nunca vou esquecer.' },
  { id: 'fotoniverisa', src: imgUrl('fotoniverisa.jpg'), caption: 'Seu sorriso ilumina meu mundo!' },
  { id: 'fotojuntinho', src: imgUrl('fotojuntinho.jpg'), caption: 'Nosso abraço mais quente e verdadeiro.' },
  { id: 'fotosdivas', src: imgUrl('fotosdivas.jpg'), caption: 'Você, sempre brilhando como uma diva!' },
  { id: 'fotoselfie', src: imgUrl('fotoselfie.jpg'), caption: 'Nossa selfie, nosso momento perfeito.' },
  { id: 'fotonariz', src: imgUrl('fotonariz.jpg'), caption: 'Narizes juntos, corações conectados.' },
  { id: 'fotoolhando', src: imgUrl('fotoolhando.jpg'), caption: 'Seus olhos me dizem tudo, sempre.' },
]
