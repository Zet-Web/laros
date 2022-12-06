import { Destination } from 'shared/types/destinations'
import { RootState } from 'store'

export const getRootDestinations = (
  destinations: Destination[]
): Destination[] => {
  return destinations.filter(destination => destination.parent === null)
}

export const getSubRegions = (state: RootState, region: string | null) => {
  return state.destinations.destinations.filter(destination =>
    region ? destination.parent === Number(region) : true
  )
}

export const isRootDestination = (destination: Destination[]): boolean => {
  return destination.every(destination => !destination.parent)
}

export const getSubDestinations = (
  destinations: Destination[],
  parentId: number
): Destination[] => {
  return destinations.filter(destination => destination.parent === parentId)
}

export const getParentDestinations = (
  destinations: Destination[],
  parentId: number
): Destination[] => {
  const parent = destinations.find(destination => destination.id === parentId)
  if (parent) {
    return destinations.filter(
      destination => destination.parent === parent.parent
    )
  } else {
    return getRootDestinations(destinations)
  }
}

export const getParentDestination = (
  state: RootState,
  id: number | null
): Destination | undefined => {
  return state.destinations.destinations.find(
    (item: Destination) => item.parent === id
  )
}

export const isNotFinalDestination = (
  destinations: Destination[],
  id: number
): boolean => {
  return destinations.some(destination => destination.parent === id)
}
