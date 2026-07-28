import { useRef, useState } from 'react'
import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { ESTADO_COLOR, type GlobePin } from '../../data/globePins'
import { latLongToVector3 } from './latLongToVector3'
import styles from './Pin.module.css'

function colorFor(pin: GlobePin): string {
  if (pin.kind === 'origin') return '#facc15'
  if (pin.kind === 'internacional') return '#ec4899'
  return (pin.estado && ESTADO_COLOR[pin.estado]) || '#38bdf8'
}

interface PinProps {
  pin: GlobePin
  radius?: number
  onSelect?: (pin: GlobePin) => void
}

export default function Pin({ pin, radius = 1.02, onSelect }: PinProps) {
  const ref = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const phase = useRef(Math.random() * Math.PI * 2)
  const position = latLongToVector3(pin.lat, pin.lon, radius)
  const color = colorFor(pin)
  const isUpcoming = pin.status === 'upcoming'

  useFrame(({ clock }) => {
    if (!ref.current) return
    const pulse = 1 + Math.sin(clock.elapsedTime * 2 + phase.current) * 0.25
    ref.current.scale.setScalar(pin.kind === 'origin' ? pulse * 1.4 : pulse)
  })

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        onSelect?.(pin)
      }}
    >
      <sphereGeometry args={[pin.kind === 'origin' ? 0.022 : 0.017, 12, 12]} />
      <meshBasicMaterial color={color} transparent={isUpcoming} opacity={isUpcoming ? 0.55 : 1} />
      {hovered && (
        <Html center distanceFactor={2.6} zIndexRange={[10, 0]}>
          <span className={styles.label}>{pin.label}</span>
        </Html>
      )}
    </mesh>
  )
}
