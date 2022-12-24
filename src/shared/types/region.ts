import { Meta } from './index'
import { ReactNode } from 'react'
import { Location } from 'shared/types/maps'
import { Destination } from './destinations'

export interface Region extends Meta {
  parentId: number | null
  subRegions: Region[]
  icon: any //FIXME
  destination?: Destination
  destinations?: Destination
  map?: (location?: Location[]) => ReactNode //FIXME
}
