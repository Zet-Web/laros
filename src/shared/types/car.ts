import { StaticImageData } from 'next/image'

export enum CarTransferType {
  PICKUP = 'pickup',
  RENTAL = 'rental',
}

export interface Car {
  readonly id: number
  group: string //'A'
  model: string //'Peugeot'
  price: number
  capacity?: number
  luggage?: number
  description?: string //id
  destination?: number //id
  rent_car?: number //?
  image?: string | StaticImageData
  destination_name?: string
  from_dest_name?: string
  to_dest_name?: string
  from_dest?: number
  to_dest?: number
}

export type CarFilterParams = {
  destination: string
}
