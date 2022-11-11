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
