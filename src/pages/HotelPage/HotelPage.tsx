import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelIntro } from 'pages/HotelPage/HotelIntro/HotelIntro'
import { Facility } from 'pages/HotelPage/Facility/Facility'
import { RoomCards } from './RoomCards'
import { HotelImages } from './HotelImages/HotelImages'
import { NearbyDestinations } from './NearbyDestinations/NearbyDestinations'
import { HotelSection } from 'features'

import { getHotel, getNearHotels } from 'shared/api/routes/hotels'
import { getRooms } from 'shared/api/routes/rooms'
import { getDestination } from 'shared/api/routes/destinations'

import { Hotel, Room } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'

import { NearbyDestinationsMock } from 'shared/mocks/hotel'
import { HotelMock } from 'shared/mocks/hotel'
import { nearHotelsMock } from 'shared/mocks/hotel'

import s from './HotelPage.module.scss'

export const HotelPage: FC = () => {
  const { query } = useRouter()
  const hotelID = Number(query.id)

  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [rooms, setRooms] = useState<Room[]>([])
  const [nearHotels, setNearHotels] = useState<Hotel[]>([])
  const [destination, setDestination] = useState<Destination[]>([])

  const loadHotel = async (hotelId: number) => {
    try {
      const { data } = await getHotel(hotelId)
      // console.log(data.data)
      // setHotel(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadNearHotels = async (hotelId: number) => {
    try {
      const { data } = await getNearHotels(hotelId)
      // console.log(data)
      // setNearHotels(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadRooms = async (hotelId: number) => {
    try {
      const { data } = await getRooms({ hotel: hotelId })
      // console.log(data)
      setRooms(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadDestination = async (hotelId: number) => {
    try {
      const { data } = await getDestination(hotelId)
      // console.log(data)
      // setDestination(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setHotel(HotelMock)
    setNearHotels(nearHotelsMock)
    setDestination(NearbyDestinationsMock)

    if (hotelID) {
      loadDestination(hotelID)
      loadHotel(hotelID)
      loadNearHotels(hotelID)
      loadRooms(hotelID)
    }
  }, [query.id])

  return (
    <div
      className={s.hotelPage}
      style={{
        backgroundImage: `url(${hotel?.images.length ? hotel.images[0] : ''})`,
      }}
    >
      {hotel ? <HotelIntro {...hotel} /> : null}
      {hotel ? <HotelImages images={hotel.images} /> : null}
      {hotel ? <Facility facilitiesAndAmenities={hotel.facilities} /> : null}
      {rooms.length ? <RoomCards rooms={rooms} /> : null}

      {nearHotels.length ? (
        <HotelSection
          hotels={nearHotels}
          title={'Other hotels'}
          subTitle={
            'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.'
          }
        />
      ) : null}
      {destination.length ? (
        <NearbyDestinations destination={destination} />
      ) : null}
    </div>
  )
}
