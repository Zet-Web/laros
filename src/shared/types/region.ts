import { Meta } from './index'
import { ReactNode } from 'react'
import { Location } from 'shared/types/maps'

export interface Region extends Meta {
  parentId: number | null
  subRegions: Region[]
  icon: any //FIXME
  map?: (location?: Location[]) => ReactNode //FIXME
}
