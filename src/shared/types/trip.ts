import { StaticImageData } from 'next/image'
import { Meta } from '.'
import { Hotel } from './hotel'
import { Destination } from './destinations'

export interface Trip {
  readonly id: number
  images: string[]
  price: number
  price_chf: number
  destinations: TripDestination[]
  duration: string
  offer_name: string | null
  offer_discount: string | null
  offer_percent: string | null
  offer_date_start: string
  offer_date_end: string
  tags: Meta[]
  travel_types: string
  transports: unknown[] // TODO check
  near_destinations: Destination[]
  name: string
  is_active: boolean
  island_hopping_fee: boolean
  description: string | null
  tips: string | null
  route: string | null
  period: string | null
  offer: number | null
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
  hotel: Hotel
}

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
  page: number
}
export interface TripCategory extends Meta {
  description: string
  images: string[]
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

// export interface TripDuration {
//   min_duration: number
//   max_duration: number
// }

// TODO (fix after clarification)

export interface TripDuration {
  code: number
  data: { min_duration: number; max_duration: number }
  message: string
  status: string
}
