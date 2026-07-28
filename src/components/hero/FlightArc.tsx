import { QuadraticBezierLine } from '@react-three/drei'
import type { GlobePin } from '../../data/globePins'
import { latLongToVector3 } from './latLongToVector3'

interface FlightArcProps {
  from: GlobePin
  to: GlobePin
  color?: string
}

export default function FlightArc({ from, to, color = '#ec4899' }: FlightArcProps) {
  const start = latLongToVector3(from.lat, from.lon, 1.01)
  const end = latLongToVector3(to.lat, to.lon, 1.01)

  const mid = start.clone().add(end).multiplyScalar(0.5)
  const distance = start.distanceTo(end)
  const height = 1 + 0.25 + distance * 0.18
  mid.normalize().multiplyScalar(height)

  return <QuadraticBezierLine start={start} end={end} mid={mid} color={color} lineWidth={1.1} />
}
