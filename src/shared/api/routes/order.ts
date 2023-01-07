import { AxiosPromise } from 'axios'
import {
  DefaultTripDay,
  OrderForm,
  OrderPayload,
  TripDayInfo,
} from 'shared/types/order'
import { api } from '..'
import { endpoints } from '../endpoints'
import {
  getDestination,
  getNearDestinations,
  getTransports,
} from './destinations'
import { getHotel, getHotels } from './hotels'
import { getRooms } from './rooms'

export const createOrder = (form: OrderPayload): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.order.create, form)
}

export const calculateOrder = (
  form: OrderPayload
): AxiosPromise<{ price: number }> => {
  return api.post(endpoints.order.create, form)
}

export const getTripDay = async (
  destFromId: number
): Promise<DefaultTripDay | null> => {
  let newLocation, newHotel, newRoom
  try {
    const { data } = await getNearDestinations(destFromId)
    const nearDestinations = data.data
    if (nearDestinations.length) {
      newLocation = nearDestinations[0]
      const { data } = await getHotels({
        destination: newLocation.id.toString(),
      })
      const hotels = data.data
      if (hotels.length) {
        newHotel = hotels[0].id
        const { data } = await getRooms({ hotel: newHotel }) // TODO add capacity params
        const rooms = data.data
        if (rooms.length) {
          newRoom = rooms[0]
        } else return null // in any case we return null, meaning that there is no trip place from this location
      } else return null
    } else return null

    try {
      const hotelData = await getHotel(newHotel) // TODO do we need this request?
      return {
        // @ts-ignore
        location: newLocation,
        // @ts-ignore
        hotel: hotelData.data.data,
        room: newRoom,
      }
    } catch (error) {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getTripDayByDestination = async (
  dest: number
): Promise<TripDayInfo | null> => {
  let newLocation, newHotel, newRooms
  try {
    const destinationResponse = await getDestination(dest)
    //@ts-ignore
    newLocation = destinationResponse.data.data
    const { data } = await getHotels({
      destination: newLocation.id.toString(),
    })
    const hotels = data.data
    if (hotels.length) {
      newHotel = hotels[0]
      const { data } = await getRooms({ hotel: newHotel.id })
      const rooms = data.data
      if (rooms.length) {
        newRooms = rooms
      } else return null // in any case we return null, meaning that there is no trip place from this location
    } else return null
    return {
      location: newLocation,
      hotel: newHotel,
      rooms: newRooms,
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
