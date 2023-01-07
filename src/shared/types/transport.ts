export enum Transfer {
  FLIGHT = 'Flight',
  FERRY = 'Ferry',
  CAR = 'Car',
}
export interface Transport {
  id: number
  from_dest_name: string
  to_dest_name: string
  type_name: Transfer
  type: number
  duration: number
  tax: number
  airlines: string
  price: number
  from_dest: number
  to_dest: number
}

export interface TransferOptions {
  car: null | number
  airport: null | number
  ferry: null | number
}
