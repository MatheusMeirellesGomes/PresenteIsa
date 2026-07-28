import type { Vale } from '../../data/vales'
import { whatsappUrl } from '../../data/vales'
import styles from './ValeCard.module.css'

export default function ValeCard({ vale }: { vale: Vale }) {
  return (
    <a
      href={whatsappUrl(vale.mensagemWhatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} glass-card`}
    >
      <h2 className={styles.title}>{vale.titulo}</h2>
      <p className={styles.description}>{vale.descricao}</p>
      <span className={styles.hint}>Clique para resgatar via WhatsApp 📲</span>
    </a>
  )
}
