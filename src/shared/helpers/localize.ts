export const getDayName = (count: number): string => {
  if (count === 1) {
    return 'tripSteps.day'
  } else {
    return 'tripSteps.days'
  }
}
