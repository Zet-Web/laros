import { StaticImageData } from 'next/image'

export interface Destination {
  readonly id: number
  name: string
  fee: number
  description: string
  sightseeing: string
  location: string //'SRID=4326;POINT (21.986157 38.873375)'
  culture: string
  is_island: boolean
  is_active: boolean
  is_airport: boolean
  is_port: boolean
  is_road: boolean
  parent: number | null
  activities: any[] // wait API schema TODO
  travel_types: any[]
  festivals: any[]
  images: string[] | StaticImageData[]
}
