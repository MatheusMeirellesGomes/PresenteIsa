const EMOJIS = ['❤️', '💜', '💗']

export function burstHearts(x: number, y: number) {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div')
    heart.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
    heart.style.cssText = `position:fixed; left:${x}px; top:${y}px; font-size:1.1rem; pointer-events:none; z-index:300; will-change:transform;`
    document.body.appendChild(heart)

    const angle = Math.random() * Math.PI * 2
    const distance = 45 + Math.random() * 55
    const duration = 800 + Math.random() * 300

    heart.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        {
          transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.4)`,
          opacity: 0,
        },
      ],
      { duration, easing: 'ease-out' },
    )

    setTimeout(() => heart.remove(), duration)
  }
}
