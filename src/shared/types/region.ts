import { Meta } from './index'

export interface Region extends Meta {
  parentId: number | null
  subRegions: Region[]
  icon: any //FIXME
  map?: any //FIXME
}
