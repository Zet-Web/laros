import { ServerDate, Title } from '.'

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

export interface OrderForm {
  destinations: OrderDestination[]
  travellers: Traveller[]
  name: string
  surname: string
  phone: string
  address: string
  dest_from: number
  dest_to: number
  email: string
  date_start: ServerDate // '2022-10-28'
  comment: string
}
