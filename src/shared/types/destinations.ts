import { StaticImageData } from 'next/image'

export interface Destination {
  readonly id: number
  name: string
  fee: number
  overview: string
  description: string
  highlights: string[] | null
  location: string //'SRID=4326;POINT (21.986157 38.873375)'
  tips: string | null
  address: string
  sightseeing: string
  culture: string
  is_island: boolean
  is_active: boolean
  is_airport: boolean
  is_port: boolean
  is_road: boolean
  parent: number | null
  travel_types: number[]
  activities: any[] // wait API schema TODO
  festivals: any[]
  images: string[] | StaticImageData[] | HTMLImageElement[]
}
