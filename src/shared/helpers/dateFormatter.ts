import { ServerDate } from 'shared/types'

export function dateFormatter(
  date: Date,
  months: string[]
): `${number} ${string}, ${number}` | `${string} ${string}, ${number}` {
  let day: number | string = date.getDate()
  let month: number | string = date.getMonth()
  month = months[month]
  const year: number = date.getFullYear()
  if (day < 10) {
    day = '0' + day
  }

  return `${day} ${month}, ${year}`
}

export const dateToServerFormat = (date: number | Date): ServerDate => {
  let time = new Date(date)
  const offset = time.getTimezoneOffset()
  const formattedDate = new Date(time.getTime() - offset * 60 * 1000)
  return formattedDate
    .toISOString()
    .split('T')[0] as `${number}-${number}-${number}`
}
