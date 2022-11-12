import { AxiosPromise } from 'axios'
import { Meta } from 'shared/types'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Room, RoomFilterParams } from 'shared/types/hotel'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getRooms = (
  params: Partial<RoomFilterParams>
): AxiosPromise<AxiosPaginatedResponse<Room>> => {
  return api.get(endpoints.rooms.all, { params })
}

export const getRoom = (id: number): AxiosPromise<Room> => {
  return api.get(endpoints.rooms.one(id))
}

export const getRoomTags = (): AxiosPromise<AxiosPaginatedResponse<Meta>> => {
  return api.get(endpoints.rooms.tags.all)
}

export const getRoomTag = (id: number): AxiosPromise<Meta> => {
  return api.get(endpoints.rooms.tags.one(id))
}
