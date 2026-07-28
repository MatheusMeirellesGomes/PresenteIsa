import { BackSide } from 'three'
import { useTexture } from '@react-three/drei'

// A rotacao do globo vem do OrbitControls (autoRotate, ver Hero3D.tsx),
// nao de uma animacao propria daqui: os Pins/FlightArcs sao irmaos desse
// componente e sao posicionados por lat/long em espaco fixo, entao se a
// Terra girasse sozinha eles se desalinhariam do mapa aos poucos.
export default function Globe() {
  const [dayMap, nightMap] = useTexture([
    `${import.meta.env.BASE_URL}textures/earth-day.jpg`,
    `${import.meta.env.BASE_URL}textures/earth-night-lights.jpg`,
  ])

  return (
    <group>
      {/* Terra com mapa real (continentes e oceanos) + luzes de cidade sutis */}
      <mesh>
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
