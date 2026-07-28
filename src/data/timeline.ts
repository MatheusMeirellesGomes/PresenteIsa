export type TimelineCategory = 'inicio' | 'marco' | 'viagem-nacional' | 'viagem-internacional' | 'renovacao'

export interface TimelineMoment {
  id: string
  date: string // ISO 'YYYY-MM-DD', dia 01 usado quando so se sabe o mes
  title: string
  text: string
  category: TimelineCategory
  status: 'past' | 'upcoming'
}

// As fotos de cada marco vem de src/assets/timeline/<id>/ (ver momentPhotos.ts)
export const timeline: TimelineMoment[] = [
  {
    id: 'conhecimento',
    date: '2025-02-01',
    title: 'Nos conhecemos',
    text: 'No Shopping Itaú, em Contagem/MG, saímos pela primeira vez juntos.',
    category: 'inicio',
    status: 'past',
  },
  {
    id: 'primeiro-encontro',
    date: '2025-02-17',
    title: 'Primeiro encontro',
    text: 'Nosso começo, quando você mudou minha vida, e vc aceitou sair comigo no cinema.',
    category: 'inicio',
    status: 'past',
  },
  {
    id: 'casa-familia',
    date: '2025-03-09',
    title: 'Conheceu a família',
    text: 'A primeira vez que foi na minha casa e esteve junto com minha família.',
    category: 'inicio',
    status: 'past',
  },
  {
    id: 'primeiro-jogo',
    date: '2025-03-20',
    title: 'Primeiro jogo juntos',
    text: 'Nosso primeiro jogo juntos, cheio de risadas e momentos engraçados.',
    category: 'inicio',
    status: 'past',
  },
  {
    id: 'passeio-familia',
    date: '2025-03-22',
    title: 'Passeio em família',
    text: 'Um passeio inesquecível, eu, você e nossa família.',
    category: 'inicio',
    status: 'past',
  },
  {
    id: 'surpresa-garagem',
    date: '2025-04-02',
    title: 'Surpresa na garagem',
    text: 'A surpresa que vc tentou fazer pra mim, e te achei escondidinha na garagem.',
    category: 'inicio',
    status: 'past',
  },
  {
    id: 'pedido-namoro',
    date: '2025-04-04',
    title: 'Pedido de namoro oficial',
    text: 'O dia que mudou nossas vidas, e vc foi pedida em namoro na frente dos seus pais.',
    category: 'marco',
    status: 'past',
  },
  {
    id: 'tiradentes',
    date: '2025-04-12',
    title: 'Viagem a Tiradentes',
    text: 'Nossa viagem pra Tiradentes.',
    category: 'viagem-nacional',
    status: 'past',
  },
  {
    id: 'um-mes',
    date: '2025-05-04',
    title: '1 mês de namoro',
    text: 'Um mês de amor, e muitos mais virão!',
    category: 'marco',
    status: 'past',
  },
  {
    id: 'renovacao',
    date: '2025-08-19',
    title: 'Início da nossa renovação',
    text: 'Um recomeço guiado por perdão e fé, fortalecendo tudo o que já tínhamos construído.',
    category: 'renovacao',
    status: 'past',
  },
  {
    id: 'portugal',
    // data aproximada: virada do ano 2025/2026, ajustar se souber o dia exato
    date: '2025-12-20',
    title: 'Portugal',
    text: 'O início da nossa viagem internacional: dias de Natal em Lisboa.',
    category: 'viagem-internacional',
    status: 'past',
  },
  {
    id: 'dinamarca',
    date: '2025-12-27',
    title: 'Copenhague, Dinamarca',
    text: 'Dias gelados e lindos em Copenhague, parte da nossa viagem internacional.',
    category: 'viagem-internacional',
    status: 'past',
  },
  {
    id: 'aurora-boreal',
    date: '2026-01-02',
    title: 'Aurora Boreal — Noruega e Finlândia',
    text: 'A aurora boreal em Tromsø, na Noruega, e um hotdog num seven eleven do outro lado da fronteira, em Kilpisjärvi, já na Finlândia.',
    category: 'viagem-internacional',
    status: 'past',
  },
  {
    id: 'serra-do-cipo',
    date: '2026-04-01',
    title: 'Serra do Cipó — Cachoeira Serra Morena',
    text: 'Um dia de trilha e cachoeira na Serra do Cipó.',
    category: 'viagem-nacional',
    status: 'past',
  },
  {
    id: 'rio-de-janeiro',
    date: '2026-05-01',
    title: 'Rio de Janeiro',
    text: 'Alguns dias no Rio, entre praia e cidade maravilhosa.',
    category: 'viagem-nacional',
    status: 'past',
  },
  {
    id: 'pocos-de-caldas',
    date: '2026-06-01',
    title: 'Poços de Caldas',
    text: 'Um fim de semana relaxante em Poços de Caldas.',
    category: 'viagem-nacional',
    status: 'past',
  },
  {
    id: 'vinicola-espirito-santo-do-pinhal',
    date: '2026-06-02',
    title: 'Vinícola Espírito Santo do Pinhal',
    text: 'Degustação e paisagem, mais um capítulo da nossa história.',
    category: 'viagem-nacional',
    status: 'past',
  },
  {
    id: 'praia',
    date: '2026-08-01',
    title: 'Próximo capítulo: praia no Rio',
    text: 'Voltamos ao Rio de Janeiro, dessa vez pra aproveitar a praia.',
    category: 'viagem-nacional',
    status: 'upcoming',
  },
]
