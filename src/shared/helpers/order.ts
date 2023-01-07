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

export const prepareOrderFormToApi = (form: OrderForm): OrderPayload => {
  const finalTravellers = form.travellers.map(traveller => {
    const fullName = traveller.name?.split(' ')
    return {
      name: fullName?.[0],
      surname: fullName?.[1],
      title: traveller.title.toLowerCase(),
      dob: dateToServerFormat(traveller.dob),
      nationality: traveller.nationality.value,
    }
  })
  const finalForm = {
    ...form,
    date_start: dateToServerFormat(form.date_start),
    dest_start: Number(form.dest_from?.value),
    dest_end: Number(form.dest_to?.value),
    destinations: form.destinations.map((destination, index) => {
      return {
        destination: destination.destination,
        hotel: destination.hotel.id,
        duration: destination.duration,
        rooms: destination.rooms.map(room => ({
          ...form.rooms?.[0],
          room_id: room.id,
        })),
        taxi: form.transports?.[index]?.rental ?? false,
        rental: [1],
        // form.transports?.[index]?.transport[
        //   form.transports?.[index].transport
        // ],
        rental_duration: destination.duration,
      }
    }),
    travellers: finalTravellers,
    transports: [
      {
        transport: 1,
        date: dateToServerFormat(new Date()),
      },
    ], // form.transports ?? [1] // TODO remove 1 when API will fix aiports
  }
  return finalForm
}
