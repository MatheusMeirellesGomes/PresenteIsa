import { useState } from 'react'
import { Link } from 'react-router-dom'
import CounterLive from '../components/counter/CounterLive'
import PhotoModal from '../components/gallery/PhotoModal'
import PhotoStrip from '../components/gallery/PhotoStrip'
import { renovacaoPhotos } from '../data/renovacaoAlbum'
import { usePhotoModal } from '../hooks/usePhotoModal'
import styles from './RenovacaoPage.module.css'

const RENOVACAO_START = new Date('2025-08-19T00:00:00')

const DESCRICAO =
  'Isadora, seu perdão me mostrou o quão profundo e sincero é nosso amor. Eu sou completamente louco por você, cada sorriso seu ilumina meu mundo, cada abraço me faz sentir vivo e mais forte. Você é a mulher mais incrível que existe: forte, bondosa, linda por dentro e por fora. Eu te amo de uma forma que palavras mal conseguem descrever, um amor que me faz querer ser melhor todos os dias. Obrigado por me dar uma segunda chance; entendi seu perdão como um ato de amor puro, e prometo mudança profunda: mais lealdade, mais presença, mais tudo por nós. Você é meu tudo, minha eterna companheira.'

const MENSAGEM_REVELADA =
  'Minha linda Isadora, aqui vão promessas mágicas que se transformarão em atitudes: Vou te surpreender todos os dias, te apoiar em tudo, e construir um futuro cheio de aventuras e loucuras. Sou louco por você porque você me completa de uma forma inexplicável. Eu te amo infinitamente! Eu queria nesse momento agradecer a Deus pela nossa união e dizer que ele sempre esteve conosco em todos os momentos onde algo quis nos atrapalhar, assim eu oro, amém! 💖'

export default function RenovacaoPage() {
  const [revealed, setRevealed] = useState(false)
  const { photo, open, close } = usePhotoModal()

  return (
    <div className="page fade-in-up">
      <h1 className={`${styles.title} aurora-text`}>Isadora, Minha Estrela Guia — Nossa Renovação Mágica</h1>

      <p className={styles.verse}>
        "Efésios 4:32: Sejam bondosos e compassivos uns com os outros, perdoando-se mutuamente,
        assim como Deus os perdoou em Cristo."
      </p>
      <p className={styles.verse}>
        "Colossenses 3:13: Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra
        os outros. Perdoem como o Senhor lhes perdoou."
      </p>
      <p className={styles.verse}>
        "Mateus 6:14-15: Pois se perdoarem as ofensas uns dos outros, o Pai celestial também lhes
        perdoará."
      </p>

      <PhotoStrip photos={renovacaoPhotos} onOpen={open} />

      <CounterLive startDate={RENOVACAO_START} label="Nossa renovação, dia a dia" />

      <p className={styles.description}>{DESCRICAO}</p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn-aurora" onClick={() => setRevealed(true)}>
          Revele Meu Amor Eterno ❤️
        </button>
      </div>

      {revealed && <p className={`${styles.hiddenMessage} glass-card`}>{MENSAGEM_REVELADA}</p>}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Link to="/" className="btn-aurora">Voltar à Página Inicial</Link>
      </div>

      <PhotoModal photo={photo} onClose={close} />
    </div>
  )
}
