// @ts-nocheck
import { FC, useEffect, useState } from 'react'
import { HotelIntro } from './HotelIntro'
import { Facility } from './Facility'
import { RoomCards } from './RoomCards'
import { HotelImages } from './HotelImages/HotelImages'
import { NearbyDestinations } from './NearbyDestinations/NearbyDestinations'
import { HotelSection } from 'features'

import { withDomain } from 'shared/helpers/withDomain'
import { getNearHotels } from 'shared/api/routes/hotels'
import { getRooms } from 'shared/api/routes/rooms'
import { getDestination } from 'shared/api/routes/destinations'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel, Room } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'

import s from './HotelPage.module.scss'

interface HotelProps {
  hotelProp: Hotel
}

export const HotelPage: FC<HotelProps> = ({ hotelProp }) => {
  const t = useTranslate()

  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [rooms, setRooms] = useState<Room[]>([])
  const [nearHotels, setNearHotels] = useState<Hotel[]>([])
  const [destination, setDestination] = useState<Destination[]>([])

  const loadNearHotels = async (hotelId: number) => {
    try {
      const { data } = await getNearHotels(hotelId)
      setNearHotels(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadRooms = async (hotelId: number) => {
    try {
      const { data } = await getRooms({ hotel: hotelId })
      setRooms(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadDestination = async (hotelId: number) => {
    try {
      const { data } = await getDestination(hotelId)
      setDestination(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (hotelProp) {
      setHotel(hotelProp)
    }
  }, [hotelProp])

  useEffect(() => {
    if (hotel) {
      loadDestination(hotel.id)
      loadNearHotels(hotel.id)
      loadRooms(hotel.id)
    }
  }, [hotel])

  return (
    <div className={s.hotelPage}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${
            hotel?.images ? withDomain(hotel.images[0]) : ''
          })`,
        }}
      />
      {hotel ? <HotelIntro {...hotel} /> : null}

      {hotel ? <HotelImages images={hotel.images} /> : null}

      {hotel?.facilities?.length ? (
        <Facility facilitiesAndAmenities={hotel.facilities} />
      ) : null}

      {rooms.length ? <RoomCards rooms={rooms} /> : null}

      {nearHotels.length ? (
        <HotelSection
          hotels={nearHotels}
          title={t('hotel.otherTitle')}
          subTitle={t('hotel.otherSubTitle')}
        />
      ) : null}

      {destination.length ? (
        <NearbyDestinations destination={destination} />
      ) : null}
    </div>
  )
}
