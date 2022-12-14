import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import {
  Trip,
  TripCategory,
  TripDuration,
  TripFilterParams,
} from 'shared/types/trip'
import { api } from '..'
import { endpoints } from '../endpoints'
import { Destination } from '../../types/destinations'

export const getTrip = (id: number): AxiosPromise<Trip> => {
  return api.get(endpoints.trips.id(id))
}

export const getTrips = (
  params: Partial<TripFilterParams>
): AxiosPromise<AxiosPaginatedResponse<Trip>> => {
  return api.get(endpoints.trips.get, { params })
}

export const getTripCategories = (): AxiosPromise<
  AxiosPaginatedResponse<TripCategory>
> => {
  return api.get(endpoints.trips.categories)
}

export const getTripsDuration = (): AxiosPromise<TripDuration> => {
  return api.get(endpoints.trips.duration)
}

export const getTripsSimilar = (
  id: number
): AxiosPromise<AxiosPaginatedResponse<Trip>> => {
  return api.get(endpoints.trips.similar(id))
}

export const getTripsNearby = (
  id: number
): AxiosPromise<AxiosPaginatedResponse> => {
  return api.get(endpoints.trips.near(id))
}

export const getTripPdf = (
  id: number
): AxiosPromise<AxiosPaginatedResponse> => {
  return api.get(endpoints.trips.pdf(id))
}
