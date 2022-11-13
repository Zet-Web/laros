import { StaticImageData } from 'next/image'
import { Meta } from '.'

export enum TripSort {
  AZ = 'name',
  ZA = '-name',
  COST_LOW = 'cost',
  COST_HIGH = '-cost',
  DURATION_SHORT = 'duration',
  DURATION_LONG = '-duration',
}

export interface TripFilterParams {
  destination: string
  travel_types: number
  price_lt: number
  price_gt: number
  ordering: TripSort
  offer: boolean
}
export interface TripDestination {
  readonly id: number
  images: string[] // '/media/destination/img/xxx.png'
  duration: number
  trip: number // id
  destination: number // id
  hotel: number // id
}

export interface TripCategory extends Meta {
  description: string
  image: string | StaticImageData
}
export interface Trip {
  readonly id: number
  images: string[]
  price: number
  destinations: TripDestination[]
  name: string
  is_bookable: boolean
  is_active: boolean
  island_hopping_fee: boolean
  description: string
  route: string // TODO check
  transports: unknown[]
  travel_types: unknown[]
  tags: Meta[]
  duration: number
}
export interface TripItem {
  readonly id: number
  image: string | StaticImageData
  name: string
  from: string
  period: string
  duration: string
  startPoint: string
  tags: string[]
}
