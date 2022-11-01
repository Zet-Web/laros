import { Brochure } from 'shared/types/brochures'

export const getSelectedBrochures = (brochures: Brochure[]): Brochure[] => {
  return brochures.filter(brochure => brochure.isSelected)
}
