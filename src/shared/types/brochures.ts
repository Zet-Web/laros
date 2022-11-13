import { Title } from '.'
import { StaticImageData } from 'next/image'

export type Brochure = {
  readonly id: number
  image: string | StaticImageData
  name: string
  topic: string
  file: string
  isSelected: boolean
}

export interface DownloadBrochureForm {
  title: Title
  first_name: string
  last_name: string
  email: string
  brochures: number[]
}

export interface SendBrochureForm {
  full_name: string
  city: string
  address: string
  zip_code: string
  phone: string
  email?: string
  comments?: string
  brochures: number[]
}
export interface SendBrochureForm {}
