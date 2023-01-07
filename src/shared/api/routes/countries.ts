import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Country } from 'shared/types/country'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getCountries = (
  search?: string
): AxiosPromise<AxiosPaginatedResponse<Country>> => {
  return api.get(endpoints.country.all, { params: { search } })
}
