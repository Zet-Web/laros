import { Brochure } from 'shared/types/brochures'

export const getSelectedBrochures = (brochures: Brochure[]): Brochure[] => {
  return brochures.filter(brochure => brochure.isSelected)
}

export const loadBrochure = (url: string) => {
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'file.pdf')
  link.setAttribute('target', '_blank')
  document.body.appendChild(link)
  link.click()
  link.parentNode?.removeChild(link)
}
