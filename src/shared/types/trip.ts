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
  destination_name: string
  hotel_name: string
  description: string | null
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
  duration: number
  offer_name: string | null
  offer_discount: string
  offer_percent: string
  offer_date_start: string
  offer_date_end: string
  tags: Meta[]
  travel_types: unknown[] // TODO check
  transports: unknown[] // TODO check
  name: string
  is_active: boolean
  island_hopping_fee: boolean
  description: string
  route: string
  period: string | null
  offer: number | null
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

export interface TripDuration {
  min_duration: number
  max_duration: number
}
