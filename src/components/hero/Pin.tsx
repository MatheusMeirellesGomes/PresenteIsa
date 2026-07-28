import { useRef, useState } from 'react'
import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import type { GlobePin } from '../../data/globePins'
import { latLongToVector3 } from './latLongToVector3'
import styles from './Pin.module.css'

const COLOR: Record<GlobePin['kind'], string> = {
  origin: '#facc15',
  internacional: '#ec4899',
  nacional: '#38bdf8',
}

interface PinProps {
  pin: GlobePin
  radius?: number
}

export default function Pin({ pin, radius = 1.02 }: PinProps) {
  const ref = useRef<Mesh>(null)
  const [active, setActive] = useState(false)
  const phase = useRef(Math.random() * Math.PI * 2)
  const position = latLongToVector3(pin.lat, pin.lon, radius)
  const color = COLOR[pin.kind]

  useFrame(({ clock }) => {
    if (!ref.current) return
    const pulse = 1 + Math.sin(clock.elapsedTime * 2 + phase.current) * 0.25
    ref.current.scale.setScalar(pin.kind === 'origin' ? pulse * 1.4 : pulse)
  })

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      onClick={(e) => {
        e.stopPropagation()
        setActive((v) => !v)
      }}
    >
      <sphereGeometry args={[pin.kind === 'origin' ? 0.022 : 0.016, 12, 12]} />
      <meshBasicMaterial color={color} />
      {active && (
        <Html center distanceFactor={2.6} zIndexRange={[10, 0]}>
          <span className={styles.label}>{pin.label}</span>
        </Html>
      )}
    </mesh>
  )
}
