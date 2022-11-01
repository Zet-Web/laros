import { TagProps } from 'components/Tag/Tag'
import gallery1 from '../../../public/assets/images/hotelPageGallery/Frame1.png'

export interface HotelPageProps {
  id: number
  name: string
  rating: number
  address: string
  description: string
  images: string
  location: string
  max_capacity: string
  is_active: boolean
  opinion: string
  tripadvisor_id: number
  destination: number
  facilitiesAndAmenities: FacilityType[]
  tags: TagProps[]
}

export type FacilityType = {
  id: number
  facility: string
}

export interface HotelGallery {
  id: number
  link: string
  image: string
  description: string
}
