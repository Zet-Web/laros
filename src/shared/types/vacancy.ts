import { Meta } from './index'

export interface Vacancy extends Meta {
  occupancy: number
  description: string
}

export interface VacancyRequest {
  name: string
  email: string
  phone: string
  file: File
}

export interface VacancyFilterParams {
  ordering: keyof Vacancy
}
