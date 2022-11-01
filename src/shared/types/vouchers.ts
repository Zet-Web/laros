import { Title } from '.'

export type VoucherForm = VoucherFormViaEmail | VoucherFormViaDelivery
export interface VoucherDetails extends BillingPerson {
  name: string
  value: number
  to: string
  from: string
  paymentType: VoucherPayment
}
export interface VoucherFormViaEmail extends VoucherDetails {
  recepientEmail: string
  deliveryType: VoucherDelivery.EMAIL
}
export interface VoucherFormViaDelivery extends VoucherDetails {
  deliveryType: VoucherDelivery.STORE | VoucherDelivery.POST
  recepientAddress: Address
}

export interface BillingPerson {
  name: string
  title: Title
  email: string
  company?: string
  phone: string
  address: Address
}

export interface Address {
  street: string
  zip_code: string
  region: string
}
export enum VoucherDelivery {
  STORE,
  POST,
  EMAIL,
}
export enum VoucherPayment {
  VISA,
}
