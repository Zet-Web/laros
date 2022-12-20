import { mockRegions } from 'shared/mocks/regions'
import { Region } from 'shared/types/region'
import { Location } from 'shared/types/maps'

export interface Map {
  parent?: Region
  currentMap?: Region
  location?: Location[]
}

export const getCurrentMap = (id: number): Map => {
  const currentMap = mockRegions.find(region => region.id === id)
  const parent = mockRegions.find(region => region.id === currentMap?.parentId)

  return { currentMap: currentMap, parent: parent }
}
