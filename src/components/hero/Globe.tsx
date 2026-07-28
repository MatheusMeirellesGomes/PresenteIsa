import { useRef } from 'react'
import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Globe() {
  const outerRef = useRef<Mesh>(null)
  const innerWireRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (outerRef.current) outerRef.current.rotation.y += delta * 0.03
    if (innerWireRef.current) innerWireRef.current.rotation.y -= delta * 0.05
  })

  return (
    <group>
      {/* nucleo solido */}
      <mesh>
        <sphereGeometry args={[0.97, 48, 48]} />
        <meshStandardMaterial
          color="#150c26"
          emissive="#3b1a5c"
          emissiveIntensity={0.5}
          roughness={0.65}
          metalness={0.15}
        />
      </mesh>

      {/* grade holografica externa */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.35} />
      </mesh>

      {/* segunda camada girando ao contrario, efeito "scanner" */}
      <mesh ref={innerWireRef}>
        <sphereGeometry args={[1.015, 24, 24]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  )
}
