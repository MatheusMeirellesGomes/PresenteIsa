import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const LINKS = [
  { to: '/', label: 'Início', icon: '🌌', end: true },
  { to: '/detalhes', label: 'Detalhes', icon: '💌' },
  { to: '/memorias', label: 'Memórias', icon: '📸' },
  { to: '/renovacao', label: 'Renovação', icon: '✨' },
  { to: '/vales', label: 'Vales', icon: '🎁' },
]

export default function Nav() {
  return (
    <nav className={`${styles.nav} glass-card`}>
      {LINKS.map(({ to, label, icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <span className={styles.icon} aria-hidden="true">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
