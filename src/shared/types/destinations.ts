import { StaticImageData } from 'next/image'

export interface Destination {
  readonly id: number
  images: string[] | StaticImageData[] | HTMLImageElement[]
  location_name: string
  name: string
  fee: number
  description: string | null
  highlights: string[] | null
  location: string | null //'SRID=4326;POINT (21.986157 38.873375)'
  tips: string | null
  airport: string | null
  is_island: boolean
  is_active: boolean
  parent: number | null
  travel_types: number[]
  overview?: string
}
