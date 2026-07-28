import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Globe from './Globe'
import Pin from './Pin'
import FlightArc from './FlightArc'
import StarField from './StarField'
import LocationPanel from './LocationPanel'
import { ORIGIN, DESTINATIONS, type GlobePin } from '../../data/globePins'
import { supportsWebGL } from './supportsWebGL'
import { usePhotoModal } from '../../hooks/usePhotoModal'
import PhotoModal from '../gallery/PhotoModal'
import styles from './Hero3D.module.css'

const AUTO_ADVANCE_MS = 7000
const SCROLL_TARGET_ID = 'home-content'

export default function Hero3D() {
  const [webglOk] = useState(() => supportsWebGL())
  const [selectedPin, setSelectedPin] = useState<GlobePin | null>(null)
  const { photo, open, close } = usePhotoModal()
  const hasInteracted = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted.current) scrollToContent()
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(timer)
  }, [])

  function scrollToContent() {
    document.getElementById(SCROLL_TARGET_ID)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSelectPin(pin: GlobePin) {
    hasInteracted.current = true
    setSelectedPin(pin)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.canvasWrap} onPointerDown={() => (hasInteracted.current = true)}>
        {webglOk ? (
          <Canvas camera={{ position: [0, 0, 2.6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[4, 2, 3]} intensity={1.4} color="#fff4e0" />
            <pointLight position={[-3, -2, -3]} intensity={0.5} color="#38bdf8" />
            <StarField />
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
            <Pin pin={ORIGIN} onSelect={handleSelectPin} />
            {DESTINATIONS.map((pin) => (
              <Pin key={pin.id} pin={pin} onSelect={handleSelectPin} />
            ))}
            {DESTINATIONS.map((pin) => (
              <FlightArc
                key={pin.id}
                from={ORIGIN}
                to={pin}
                color={pin.kind === 'internacional' ? '#ec4899' : '#38bdf8'}
              />
            ))}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={(3 * Math.PI) / 4}
            />
          </Canvas>
        ) : (
          <div className={styles.fallback} />
        )}
      </div>

      <div className={styles.overlay}>
        <h1 className={`${styles.title} aurora-text`}>Isadora &amp; Matheus</h1>
        <p className={styles.subtitle}>
          Gira o globo, amor — toque numa bolinha e veja as fotos daquele lugar.
        </p>
      </div>

      {selectedPin && (
        <LocationPanel pin={selectedPin} onClose={() => setSelectedPin(null)} onOpenPhoto={open} />
      )}

      {!selectedPin && (
        <button className={styles.skip} onClick={scrollToContent} aria-label="Ver nossa história">
          <span>nossa história</span>
          <span className={styles.arrow} aria-hidden="true">⌄</span>
        </button>
      )}

      <PhotoModal photo={photo} onClose={close} />
    </section>
  )
}
