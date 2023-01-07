import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { api } from '..'
import { endpoints } from '../endpoints'
import { Car, CarFilterParams } from 'shared/types/car'
import { Transfer, TransferOptions } from 'shared/types/transport'
import { getTransports } from './destinations'
import { DEFAULT_TRANSFER } from 'shared/constants/transfer'

export const getCars = (
  params: Partial<CarFilterParams>
): AxiosPromise<AxiosPaginatedResponse<Car>> => {
  return api.get(endpoints.cars.all, { params }) // TODO revert params
}

export const getTransfer = async (
  from: number,
  to: number
): Promise<TransferOptions> => {
  let transfers: TransferOptions = DEFAULT_TRANSFER
  try {
    const { data } = await getTransports(from, to)
    const transports = data.data
    const ferryTransfer = transports.find(
      transport => transport.type_name === Transfer.FERRY
    )
    const airportTransfer = transports.find(
      transport => transport.type_name === Transfer.FLIGHT
    )
    const carTransfer = transports.find(
      transport => transport.type_name === Transfer.CAR
    )
    if (ferryTransfer) {
      transfers.ferry = ferryTransfer.id
    }
    if (airportTransfer) {
      transfers.airport = airportTransfer.id
    }
    if (carTransfer) {
      transfers.car = carTransfer.id
    }
    return transfers
  } catch (error) {
    console.log(error)
  }
  return transfers
}
