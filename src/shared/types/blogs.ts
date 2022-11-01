import { StaticImageData } from 'next/image'

export type BlogType = {
  id: number
  title: string
  subTitle: string
  description: string
  image: string | StaticImageData
  read: number
}
