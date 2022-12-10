import { Option } from 'shared/types'
import { TripDuration } from 'shared/types/trip'

export const provideOptionsWithIcon = (
  options: Option[],
  icon: string
): Required<Option[]> => {
  return options.map(option => {
    return { ...option, icon }
  })
}

export const getTripDays = (
  start: number,
  duration: number
): string | `${number}-${number}` => {
  if (duration === 1) {
    return start.toString()
  } else return `${start}-${start + duration - 1}`
}

export const getTripDurationOptions = (durations: TripDuration): Option[] => {
  let options = []
  const { min_duration: min, max_duration: max } = durations
  for (let i = min; i < max; i++) {
    options.push({ label: i.toString(), value: i.toString() })
  }
  return options
}

export function removeItem(arr: string[], value: string): string[] {
  var index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}
