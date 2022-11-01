import { Option } from 'shared/types'

export const provideOptionsWithIcon = (
  options: Option[],
  icon: string
): Required<Option[]> => {
  return options.map(option => {
    return { ...option, icon }
  })
}
