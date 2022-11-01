import { Tag } from './tag'

export interface HotelsCard {
  id: number
  image: string
  rating: number
  address: string
  name: string
  fromPrice: number
  period: string
  tags: Tag[]
}
