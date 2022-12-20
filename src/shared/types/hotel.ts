import { Meta } from '.'

export interface Room {
  readonly id: number
  destination_name?: string
  title?: string
  hotel_name?: string
  capacity?: number
  room_name?: string
  season_price?: number
  description?: string // TODO check API
  change_price?: string // TODO check API
  image: string
  price: number
}

export type HotelFilterParams = {
  destination: string // '1,2,3'
  capacity: number
  rating: number
  tags: string // '1,2,3'
  price_lt: number
  price_gt: number
  ordering: keyof Hotel
  category: string
  accommodations: string // '1,2,3'
  facilities: string // '1,2,3'
  date: string
}
export type Hotel = {
  accommodations: Meta[]
  address: string
  category: number | null
  category_name: string
  description: string
  destination: number | null
  destination_name: string
  facilities: Facility[]
  readonly id: number
  images: string[]
  is_active: boolean
  link: string | null
  location: string
  lrweb: string
  max_capacity: string
  min_price: string
  min_price_chf: number
  name: string
  opinion: string
  period: string | null
  rating: number
  rooms: string
  tags: HotelTag[]
  tripadvisor_id: number | null
}

export type RoomFilterParams = {
  hotel: number
}
export interface Facility extends Meta {
  image: string
}

export type HotelTag = Meta
