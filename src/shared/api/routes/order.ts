import { AxiosPromise } from 'axios'
import { OrderForm, OrderPayload } from 'shared/types/order'
import { api } from '..'
import { endpoints } from '../endpoints'

export const createOrder = (form: OrderForm): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.order.create, form)
}

export const calculateOrder = (
  form: OrderPayload
): AxiosPromise<{ price: number }> => {
  return api.post(endpoints.order.create, form)
}
