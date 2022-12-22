// @ts-nocheck
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelIntro } from './HotelIntro'
import { Facility } from './Facility'
import { RoomCards } from './RoomCards'
import { HotelImages } from './HotelImages/HotelImages'
import { NearbyDestinations } from './NearbyDestinations/NearbyDestinations'
import { HotelSection } from 'features'

import { withDomain } from 'shared/helpers/withDomain'
import { getHotel, getNearHotels } from 'shared/api/routes/hotels'
import { getRooms } from 'shared/api/routes/rooms'
import { getDestination } from 'shared/api/routes/destinations'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel, Room } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'

import s from './HotelPage.module.scss'

export const HotelPage: FC = () => {
  const { query } = useRouter()
  const hotelID = Number(query.id)
  const t = useTranslate()

  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [rooms, setRooms] = useState<Room[]>([])
  const [nearHotels, setNearHotels] = useState<Hotel[]>([])
  const [destination, setDestination] = useState<Destination[]>([])

  const loadHotel = async (hotelId: number) => {
    try {
      const { data } = await getHotel(hotelId)
      setHotel(data.data)
    } catch (error) {
      console.error(error)
    }
  }

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
    if (hotelID) {
      loadDestination(hotelID)
      loadHotel(hotelID)
      loadNearHotels(hotelID)
      loadRooms(hotelID)
    }
  }, [query.id])

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

      {hotel?.facilities.length ? (
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
