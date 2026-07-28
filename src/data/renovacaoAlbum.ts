import { imgUrl } from '../utils/assetUrl'

// Fotos da renovacao (fotoA a fotoK, sem a fotoI que nunca existiu)
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']

export const renovacaoPhotos = LETTERS.map((letter) => imgUrl(`foto${letter}.jpg`))
