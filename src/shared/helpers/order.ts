// @ts-nocheck
import {
  OrderForm,
  OrderPayload,
  OrderPlaceAccomodation,
} from 'shared/types/order'
import { dateToServerFormat } from './dateFormatter'

export const prepareOrder = (form: OrderForm): OrderPayload => {
  const destinations: OrderPlaceAccomodation[] = form.destinations.map(
    (destination, index) => {
      return {
        ...destination,
        rooms: form.rooms.map(room => ({
          ...room,
          room_id: form.room_ids[index],
        })),
        taxi: form.transports.map(transport => transport.transport),
        rental: form.transports[index].rental,
      }
    }
  )
  return {
    ...form,
    dest_start: form.dest_from,
    dest_end: form.dest_to,
    date_start: dateToServerFormat(form.date_start),
    destinations: destinations,
  }
}
