import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Destination } from 'shared/types/destinations'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getDestinations = (): AxiosPromise<
  AxiosPaginatedResponse<Destination>
> => {
  return api.get(endpoints.destinations.get)
}

export const getDestination = (id: number): AxiosPromise<Destination> => {
  return api.get(endpoints.destinations.id(id))
}

export const getAirportDestinations = (): AxiosPromise<
  AxiosPaginatedResponse<Destination>
> => {
  return api.get(endpoints.destinations.get, { params: { airport: false } }) // TODO more to true
}

export const getNearDestinations = (destination: number) => {
  return api.get(endpoints.transport.all, {
    params: { from_dest: destination },
  })
}
