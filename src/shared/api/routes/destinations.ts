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
