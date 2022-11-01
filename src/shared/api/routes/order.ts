import { AxiosPromise } from 'axios'
import { OrderForm } from 'shared/types/order'
import { api } from '..'
import { endpoints } from '../endpoints'

export const createOrder = (form: OrderForm): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.order, form)
}
