import { AxiosPromise } from 'axios'
import { VoucherForm } from 'shared/types/vouchers'
import { api } from '..'
import { endpoints } from '../endpoints'

export const sendVoucherForm = (form: VoucherForm): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.voucherForm, form)
}
