export interface Traveller {
  name: string
  nationality: { label: string; value: number | string }
  gender: string
  birth: string
  country: { label: string; value: string }
  city: string
  address: string
  address1: string
  address2: string
  zip: string | number | undefined
}
export interface FlightRequestFormType {
  departFrom: { label: string; value: number }
  arrivalTo: { label: string; value: number }
  earliestDeparture: string
  latestReturn: string
  class: string
  adults: number
  children: number
  email: string
  comment: string
  travellers: Traveller[]
}

export interface PackageRequestFormType {
  departFrom: { label: string; value: number }
  arrivalTo: { label: string; value: number }
  earliestDeparture: string
  latestReturn: string
  hotelCategory?: { label: string; value: string }
  travelDuration?: number
  transferType?: string
  boardType?: string
  totalTripBudget?: number
  adults: number
  children: number
  email: string
  comment?: string
  travellers: Traveller[]
}

export interface PackageRequestPayload {
  dest_from: number
  dest_to: number
  departure_date: string
  return_date: string
  duration?: number
  hotel_category?: number
  transfer_type?: string
  board_type?: string
  budget?: number
  adults?: number
  children?: number
  email: string
  comment?: string
  travellers: TravelerRequestPayload[]
}

export interface TravelerRequestPayload {
  name: string
  nationality: number
  gender: string
  dob: string
  addresses: string[]
}

export interface FlightRequestPayload {
  dest_from: number
  dest_to: number
  departure_date: string
  return_date: string
  flight_class: string
  adults: number
  children: number
  email: string
  comment: string
  travellers: TravelerRequestPayload[]
}

export enum BoardTypes {
  ALL = 'all',
  FULL = 'full',
  HALF = 'half',
  BNB = 'bnb',
}

export enum BoardTypesEnum {
  ALL = 'all',
  FULL = 'full',
  HALF = 'half',
  BNB = 'bnb',
}
