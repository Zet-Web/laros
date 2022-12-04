import { AxiosPromise } from 'axios'
import { api } from '..'
import { endpoints } from '../endpoints'
import { Traveller } from '../../types/travellers'

interface FlightRequestPayload {
  dest_from: string
  dest_to: string
  departure_date: string
  return_date: string
  flight_class: string
  adults: number
  children: number
  email: string
  comment: string
  travellers: Traveller[]
}

export const sendFlightRequestForm = (
  form: FlightRequestPayload
): AxiosPromise => {
  return api.post(endpoints.requests.flight, form)
}

export const getAirports = (search: string): AxiosPromise => {
  return api.get(endpoints.airport, { params: { search } })
}
