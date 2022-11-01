import { StaticImageData } from 'next/image'

export type Review = {
  readonly id: number
  name: string
  tripname: string
  images?: StaticImageData[] | string[]
  avatar: StaticImageData | string
  text: string
}
