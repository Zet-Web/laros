export default function dateFormater(
  date: Date
): `${number} ${string}, ${number}` | `${string} ${string}, ${number}` {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let day: number | string = date.getDate()
  let month: number | string = date.getMonth()
  month = months[month]
  const year: number = date.getFullYear()
  if (day < 10) {
    day = '0' + day
  }

  return `${day} ${month}, ${year}`
}
