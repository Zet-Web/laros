import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import {
  Vacancy,
  VacancyRequest,
  VacancyFilterParams,
} from 'shared/types/vacancy'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getVacancies = (
  params?: Partial<VacancyFilterParams>
): AxiosPromise<AxiosPaginatedResponse<Vacancy>> => {
  return api.get(endpoints.vacancy.all, { params })
}
export const getCurrentVacancy = (id: number): AxiosPromise<Vacancy> => {
  return api.get(endpoints.vacancy.one(id))
}

export const applyForVacancy = (id: number, params: VacancyRequest) => {
  return api.post(endpoints.vacancy.apply(id), params)
}
