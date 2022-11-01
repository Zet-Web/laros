import { AxiosPromise } from 'axios'
import { ContactForm } from 'shared/types/contact'
import { api } from '..'
import { endpoints } from '../endpoints'

export const sendContactForm = (form: ContactForm): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.contactForm, form)
}
