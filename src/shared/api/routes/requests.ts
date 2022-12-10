import { AxiosPromise } from 'axios'
import { api } from '..'
import { endpoints } from '../endpoints'

import {
  FlightRequestPayload,
  PackageRequestPayload,
} from 'shared/types/requestForm'

export const sendFlightRequestForm = (
  form: FlightRequestPayload
): AxiosPromise<any> => {
  //TODO add type
  return api.post(endpoints.requests.flight, form)
}

export const sendPackageRequestForm = (
  form: PackageRequestPayload
): AxiosPromise => {
  return api.post(endpoints.requests.package, form)
}

export const getAirports = (search: string): AxiosPromise => {
  return api.get(endpoints.airport, { params: { search } })
}
