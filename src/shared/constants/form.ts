import { Option } from 'shared/types'

export const titleOptions: Option[] = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  { label: 'Ms', value: 'ms' },
]
export const genderOptions: Option[] = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
]
export const booleanOptions: Option[] = [
  { label: 'Yes', value: 'true' },
  { label: 'No', value: 'false' },
]

export const classOptions: Option[] = [
  { label: 'Econom', value: 'Econom' },
  { label: 'Business', value: 'Business' },
  { label: 'First', value: 'First' },
]

export const citiesOptions: Option[] = [
  { label: 'Moscow', value: 'Moscow' },
  { label: 'New York', value: 'New York' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Istanbul', value: 'Istanbul' },
]

export const REQUEST_FORMS =  {
  name: '',
  nationality: 'not chosen',
  gender: 'Male',
  birth: '',
  address: '',
  address1: '',
  address2: '',
}

export const MIN_DATE = new Date(1900, 0, 1)
