import { hotelCategory, transferOptions } from './form'
import { BoardTypesEnum, Traveller } from '../types/requestForm'

export const DEFAULT_HOTEL_CATEGORY = hotelCategory[4] // 5
export const DEFAULT_BOARD_TYPE = BoardTypesEnum.FULL //full
export const DEFAULT_DURATION = 7
export const DEFAULT_TRANSFER_TYPE = transferOptions[0].value // private

export const DEFAULT_TRAVELLER: Traveller = {
  name: '',
  nationality: { label: 'not chosen', value: 'not chosen' },
  gender: 'male',
  birth: '',
  country: { label: '', value: '' },
  city: '',
  address: '',
  zip: '',
  address1: '',
  address2: '',
}
