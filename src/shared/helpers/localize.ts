export const getDayName = (count: number): string => {
  if (count === 1) {
    return 'day'
  } else {
    return 'days'
  }
}
