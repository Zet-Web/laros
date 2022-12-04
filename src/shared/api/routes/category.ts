import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { api } from '..'
import { endpoints } from '../endpoints'
import { Meta } from 'shared/types'

export const getCategories = (): AxiosPromise<AxiosPaginatedResponse<Meta>> => {
  return api.get(endpoints.category.all)
}
export const getCurrentCategory = (id: number): AxiosPromise<Meta> => {
  return api.get(endpoints.category.one(id))
}
