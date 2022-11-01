import { Brochure } from 'shared/types/brochures'
import { RootState } from 'store'

export const getSelectedBrochuresIds = (brochures: Brochure[]): number[] =>
  brochures.filter(brochure => brochure.isSelected).map(brochure => brochure.id)
