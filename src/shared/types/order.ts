import { ServerDate, Title } from '.'
import { TripDestination } from './trip'

export interface PeopleCapacity {
  adult: number
  children: number
}

export interface OrderDestination {
  destination: number //id
  hotel: number
  duration: number
  taxi: number[]
  rental: number[]
}
export interface Traveller {
  name: string
  surname: string
  dob: ServerDate //'2022-10-28'
  title: Lowercase<Title>
  nationality: string
}
export interface Transport {
  transport: number
  date: ServerDate //'2022-11-26'
  rental: boolean
}
export interface OrderRoom extends PeopleCapacity {
  room_id: number
}

export interface OrderForm {
  // Start trip form:
  date_start: number[]
  rooms: PeopleCapacity[]
  // Step 1:
  dest_from: number
  dest_to: number
  destinations: TripDestination[]
  ports: Transport[]
  room_ids: number[]
  // Step 2:
  name: string
  surname: string
  title: Lowercase<Title>
  email: string
  phone: string
  country: number
  city: string
  address: string
  address_2: string
  zip_code: string
  travellers: Traveller[]
  comment: string
  is_travel_agent: boolean
  // ?
  offer?: number
}

export interface OrderPlaceAccomodation {
  destination: number //id
  hotel: number
  duration: number
  rooms: OrderRoom[]
  taxi: number[]
  rental: boolean
}
export interface OrderPayload {
  destinations: OrderPlaceAccomodation[]
  travellers: Traveller[]
  transports: Transport[]
  name: string
  surname: string
  phone: string
  address: string
  zip_code: string
  dest_start: number //id
  dest_end: number //id
  offer?: number //id of discount
  email: string
  date_start: ServerDate // '2022-10-28'
  comment: string
  is_travel_agent: boolean
}
