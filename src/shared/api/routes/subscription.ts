import { AxiosPromise } from 'axios'

import { api, endpoints } from '../index'
import { SubscribeResponse } from '../../types/subscribe'

export const subscribeToNewsletter = (
  mail: string
): AxiosPromise<SubscribeResponse> => {
  return api.post(endpoints.subscription, { mail })
}
