import { ReactNode } from 'react'
import { mockRegions } from 'shared/mocks/regions'
import Greece from 'features/DestinationMaps/Greece/Greece'
import Cyrpus from 'features/DestinationMaps/Cyrpus/Cyrpus'
import Macedonia from 'features/DestinationMaps/Macedonia/Macedonia'
import { mockMaps } from '../mocks/maps'

interface getMap {
  map: ReactNode
  name: 'Greece' | 'Cyrpus' | 'Macedonia'
}

export const getMap = (id: number): getMap => {
  const currentMap = mockRegions.find(region => region.id === id)

  switch (currentMap?.name) {
    case 'Greece':
      return { map: <Greece />, name: currentMap?.name! }
    case 'Cyrpus':
      return { map: <Cyrpus />, name: currentMap?.name! }
    case 'Macedonia':
      return { map: <Macedonia />, name: currentMap?.name! }

    default:
      return { map: <Greece />, name: 'Greece' }
  }
}

export const getCurrentMap = (id: number) => {
  const currentMap = mockMaps.Greece.find(item => item.id == id)

  return currentMap?.region
}
