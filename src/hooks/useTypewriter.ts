import { useEffect, useState } from 'react'

export function useTypewriter(text: string, { startDelayMs = 0, speedMs = 45 } = {}) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setOutput('')
    setDone(false)
    let i = 0
    let intervalId: ReturnType<typeof setInterval>

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        i++
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speedMs)
    }, startDelayMs)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(intervalId)
    }
  }, [text, startDelayMs, speedMs])

  return { text: output, done }
}
