import { useRef } from 'react'
import type { Mesh } from 'three'
import { BackSide } from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

export default function Globe() {
  const earthRef = useRef<Mesh>(null)
  const [dayMap, nightMap] = useTexture([
    `${import.meta.env.BASE_URL}textures/earth-day.jpg`,
    `${import.meta.env.BASE_URL}textures/earth-night-lights.jpg`,
  ])

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.035
  })

  return (
    <group>
      {/* Terra com mapa real (continentes e oceanos) + luzes de cidade sutis */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={dayMap}
          emissiveMap={nightMap}
          emissive="#ffcf8a"
          emissiveIntensity={0.7}
          roughness={0.9}
          metalness={0}
        />
      </mesh>

      {/* atmosfera sutil ao redor */}
      <mesh scale={1.035}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial color="#5eb8ff" transparent opacity={0.1} side={BackSide} />
      </mesh>
    </group>
  )
}
