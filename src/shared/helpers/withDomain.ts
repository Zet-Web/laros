import { ImageProps } from 'next/image'
import { BASE_DOMAIN } from '../constants'

export const withDomain = (image?: ImageProps['src']): ImageProps['src'] => {
  if (!image) return ''
  return typeof image === 'string' && !image.includes(BASE_DOMAIN)
    ? BASE_DOMAIN + image
    : image
}
