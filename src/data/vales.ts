export interface Vale {
  id: string
  titulo: string
  descricao: string
  mensagemWhatsapp: string
}

const WHATSAPP_NUMBER = '+5531996981400'

export const vales: Vale[] = [
  {
    id: 'massagem',
    titulo: 'Vale-Massagem',
    descricao: 'Uma massagem relaxante com ventosa, e óleos, quando você quiser!',
    mensagemWhatsapp: 'Oi, amor! Quero resgatar meu Vale-Massagem! 😊',
  },
  {
    id: 'restaurante',
    titulo: 'Vale-Restaurante',
    descricao: 'Um jantar especial no seu restaurante favorito, só nós dois!',
    mensagemWhatsapp: 'Oi, amor! Quero resgatar meu Vale-Restaurante! 🍽️',
  },
  {
    id: 'cinema',
    titulo: 'Vale-Cinema',
    descricao: 'Uma noite de cinema com pipoca e seus filmes preferidos!',
    mensagemWhatsapp: 'Oi, amor! Quero resgatar meu Vale-Cinema! 🎬',
  },
  {
    id: 'passeio',
    titulo: 'Vale-Passeio',
    descricao: 'Um dia ao ar livre, com um piquenique ou caminhada!',
    mensagemWhatsapp: 'Oi, amor! Quero resgatar meu Vale-Passeio! 🌳',
  },
  {
    id: 'jantar',
    titulo: 'Vale-Jantar',
    descricao: 'Você escolhe um tipo de prato que queira comer, que vou prepará-lo com muito carinho!',
    mensagemWhatsapp: 'Oi, amor! Quero resgatar meu Vale-Surpresa! 🎁',
  },
]

export function whatsappUrl(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
