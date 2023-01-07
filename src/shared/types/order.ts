import { Option, ServerDate, Title } from '.'
import { Destination } from './destinations'
import { Hotel, Room } from './hotel'
import { TripDestination } from './trip'

export interface PeopleCapacity {
  adults: number
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
export interface OrderTransport {
  transport: number
  date: ServerDate //'2022-11-26'
  rental?: boolean // unused in API, check and remove
}
export interface OrderRoom extends PeopleCapacity {
  room_id: number
}

export interface OrderForm {
  // Start trip form:
  date_start: number
  rooms: PeopleCapacity[] // TODO rename
  // Step 1:
  dest_from: Option
  dest_to: Option
  destinations: TripDestination[]
  transports: OrderTransport[]
  room_ids: Room[][] // TODO rename
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
  travellers: OrderTraveller[]
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
  taxi: boolean
  rental: number[]
  rental_duration: number // duration in days of the rented car
}
export interface OrderPayload {
  destinations: OrderPlaceAccomodation[]
  travellers: Traveller[]
  transports: OrderTransport[]
  name: string
  surname: string
  phone: string
  address: string
  zip_code: string
  dest_start: number //id
  dest_end: number //id
  offer?: number //id of discount
  email: string
  date_start: number // '2022-10-28' use TODO ServerDate
  comment: string
  is_travel_agent: boolean
}

export interface DefaultTripDay {
  location: Destination
  hotel: Hotel
  room: Room
}

export interface TripDayInfo {
  location: Destination
  hotel: Hotel
  rooms: Room[]
}

export interface OrderTraveller {
  full_name: string
  dob: number //'2022-10-28'
  title: Lowercase<Title>
  nationality: Option
}
