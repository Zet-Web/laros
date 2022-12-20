import { Option } from 'shared/types'
import { CheckBox } from '../../components'
import { Traveller } from '../types/requestForm'

export const titleOptions: Option[] = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  { label: 'Ms', value: 'ms' },
]
export const genderOptions: Option[] = [
  { label: 'forms.radioLabel3', value: 'female' },
  { label: 'forms.radioLabel4', value: 'male' },
]
export const booleanOptions: Option[] = [
  { label: 'forms.radioLabel8', value: 'true' },
  { label: 'forms.radioLabel9', value: 'false' },
]

export const classOptions: Option[] = [
  { label: 'forms.radioLabel1', value: 'econom' },
  { label: 'forms.radioLabel2', value: 'business' },
  { label: 'forms.radioLabel7', value: 'first' },
]

export const transferOptions: Option[] = [
  { label: 'forms.radioLabel10', value: 'private' },
  { label: 'forms.radioLabel11', value: 'bus' },
]

export const citiesOptions: Option[] = [
  { label: 'Moscow', value: 'Moscow' },
  { label: 'New York', value: 'New York' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Istanbul', value: 'Istanbul' },
]

export const hotelCategory: Option[] = [
  { label: '*', value: '1' },
  { label: '**', value: '2' },
  { label: '***', value: '3' },
  { label: '****', value: '4' },
  { label: '*****', value: '5' },
]

export const boardTypes: CheckBox[] = [
  { label: 'forms.radioLabel12', value: 'all', status: false },
  { label: 'forms.radioLabel13', value: 'full', status: false },
  { label: 'forms.radioLabel14', value: 'half', status: false },
  { label: 'forms.radioLabel15', value: 'bnb', status: false },
]
export const REQUEST_FORMS: Traveller = {
  name: '',
  nationality: { label: 'not chosen', value: 0 },
  gender: 'Male',
  birth: '',
  address: '',
  address1: '',
  address2: '',
  country: { label: '', value: '' },
  city: '',
  zip: '',
}

export const MIN_DATE = new Date(1900, 0, 1)
