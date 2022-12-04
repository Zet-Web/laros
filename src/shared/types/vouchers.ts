import { Title } from '.'

export interface VoucherForm {
  name: string
  title: Title
  sender: string
  recipient: string
  email: string
  recipient_email: string
  phone: string
  recipient_phone: string
  address: string
  recipient_address: string
  city: string
  recipient_city: string
  company: string
  zip_code: string
  recipient_zip_code: string
  value: number
  comment: string
  delivery: VoucherDelivery
  payment: VoucherPayment
}

export enum VoucherDelivery {
  STORE = 'store',
  POST = 'post',
  EMAIL = 'email',
}
export enum VoucherPayment {
  CASH = 'cash',
  QRCODE = 'qrcode',
  CARD = 'card',
}

//TODO

// export type VoucherForm = VoucherFormViaEmail | VoucherFormViaDelivery
// export interface VoucherDetails extends BillingPerson {
//   name: string
//   value: number
//   to: string
//   from: string
//   paymentType: VoucherPayment
// }
// export interface VoucherFormViaEmail extends VoucherDetails {
//   recepientEmail: string
//   deliveryType: VoucherDelivery.EMAIL
// }
// export interface VoucherFormViaDelivery extends VoucherDetails {
//   deliveryType: VoucherDelivery.STORE | VoucherDelivery.POST
//   recepientAddress: Address
// }
//
// export interface BillingPerson {
//   name: string
//   title: Title
//   email: string
//   company?: string
//   phone: string
//   address: Address
// }
//
// export interface Address {
//   street: string
//   zip_code: string
//   region: string
// }
