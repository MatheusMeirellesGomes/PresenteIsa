import { useEffect, useMemo, useState } from 'react'
import { preciseElapsed } from '../utils/dateDiff'

export function useElapsedTime(start: Date) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return useMemo(() => preciseElapsed(start, now), [start, now])
}
