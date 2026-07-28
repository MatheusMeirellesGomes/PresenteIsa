export interface ElapsedTime {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * Diferenca de calendario real entre duas datas (campo a campo, com
 * "emprestimo" entre unidades) em vez de dividir milissegundos por
 * medias fixas (ex: dias/30), que desalinha ao longo do tempo.
 */
export function preciseElapsed(start: Date, now: Date): ElapsedTime {
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()
  let hours = now.getHours() - start.getHours()
  let minutes = now.getMinutes() - start.getMinutes()
  let seconds = now.getSeconds() - start.getSeconds()

  if (seconds < 0) {
    seconds += 60
    minutes--
  }
  if (minutes < 0) {
    minutes += 60
    hours--
  }
  if (hours < 0) {
    hours += 24
    days--
  }
  if (days < 0) {
    const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    days += daysInPrevMonth
    months--
  }
  if (months < 0) {
    months += 12
    years--
  }

  return { years, months, days, hours, minutes, seconds }
}
