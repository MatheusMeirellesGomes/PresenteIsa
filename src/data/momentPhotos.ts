/**
 * Cada marco da timeline tem sua propria pasta em src/assets/timeline/<id>/.
 * Basta arrastar fotos novas pra pasta do marco correspondente que elas
 * aparecem sozinhas aqui, sem precisar tocar em codigo.
 */
const modules = import.meta.glob<{ default: string }>('/src/assets/timeline/**/*.{jpg,jpeg,png}', {
  eager: true,
})

const grouped: Record<string, string[]> = {}

for (const path in modules) {
  const match = path.match(/\/timeline\/([^/]+)\/[^/]+$/)
  if (!match) continue
  const momentId = match[1]
  grouped[momentId] ??= []
  grouped[momentId].push(modules[path].default)
}

for (const momentId in grouped) {
  grouped[momentId].sort()
}

export function getMomentPhotos(momentId: string): string[] {
  return grouped[momentId] ?? []
}
