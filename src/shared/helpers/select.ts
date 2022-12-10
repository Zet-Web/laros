import { Option, SelectType } from 'shared/types'
import { Country } from '../types/country'

export const stringToOption = (value: SelectType<string>): SelectType => {
  if (value === null || value === undefined) {
    return null
  }
  return Array.isArray(value)
    ? value.map(str => {
        return { value: str, label: str }
      })
    : { value: value, label: value }
}

export const metaToOption = (values: Country[] | null): Option[] => {
  if (values === null || values === undefined) {
    return []
  }
  return values.map(meta => {
    return { value: meta.id.toString(), label: meta.name }
  })
}
