export const LOVE_WORDS = [
  'Eu te amo',
  'Meu mundo',
  'Minha vida',
  'Para sempre',
  'Você e eu',
  'Meu porto seguro',
  'Minha pessoa favorita',
  'Meu amor',
  'Gratidão por você',
  'Minha melhor escolha',
  'Meu lar é você',
  'Sempre nós dois',
  'Meu maior tesouro',
  'Você é meu presente',
  'Minha paz',
]

export function randomLoveWord(): string {
  return LOVE_WORDS[Math.floor(Math.random() * LOVE_WORDS.length)]
}
