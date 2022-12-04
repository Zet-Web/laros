import { AxiosPromise } from 'axios'
import { OrderPayload } from 'shared/types/order'
import { api } from '..'
import { endpoints } from '../endpoints'

export const createOrder = (form: OrderPayload): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.order.create, form)
}

export const calculateOrder = (
  form: OrderPayload
): AxiosPromise<{ price: number }> => {
  return api.post(endpoints.order.create, form)
}
