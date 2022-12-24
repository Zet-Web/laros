import { AxiosPromise } from 'axios'
import { Meta } from 'shared/types'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getHotels = (
  params: Partial<HotelFilterParams>
): AxiosPromise<AxiosPaginatedResponse<Hotel>> => {
  return api.get(endpoints.hotels.all, { params })
}

export const getHotel = (id: number): AxiosPromise<Hotel> => {
  return api.get(endpoints.hotels.one(id))
}

export const getHotelByName = (name: string): AxiosPromise<Hotel> => {
  return api.get(endpoints.hotels.oneByName(name))
}

export const getNearHotels = (
  location: number
): AxiosPromise<AxiosPaginatedResponse<Hotel>> => {
  return api.get(endpoints.hotels.near(location))
}

export const getSimilarHotels = (
  id: number
): AxiosPromise<AxiosPaginatedResponse<Hotel>> => {
  return api.get(endpoints.hotels.near(id))
}

export const getHotelTags = (): AxiosPromise<AxiosPaginatedResponse<Meta>> => {
  return api.get(endpoints.hotels.tags.all)
}

export const getHotelTag = (id: number): AxiosPromise<Meta> => {
  return api.get(endpoints.hotels.tags.one(id))
}
