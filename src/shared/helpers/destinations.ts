import { Option } from 'shared/types'
import { Destination } from 'shared/types/destinations'

export const destinationToOption = (destinations: Destination[]): Option[] => {
  return destinations.map(dest => {
    return { value: dest.id.toString(), label: dest.name }
  })
}
