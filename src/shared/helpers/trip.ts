import { TripDestination } from 'shared/types/trip'

export const getTripDuration = (destinations: TripDestination[]): number => {
  return destinations.reduce(
    (total: number, current: TripDestination) => total + current.duration,
    0
  )
}
