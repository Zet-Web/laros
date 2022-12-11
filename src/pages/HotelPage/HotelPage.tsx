// @ts-nocheck
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelIntro } from './HotelIntro'
import { Facility } from './Facility'
import { RoomCards } from './RoomCards'
import { HotelImages } from './HotelImages/HotelImages'
import { NearbyDestinations } from './NearbyDestinations/NearbyDestinations'
import { HotelSection } from 'features'

import { getHotel, getNearHotels } from 'shared/api/routes/hotels'
import { getRooms } from 'shared/api/routes/rooms'
import { getDestination } from 'shared/api/routes/destinations'

import { Hotel, Room } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'

import { NearbyDestinationsMock } from 'shared/mocks/hotel' //TODO delete when done
import { HotelMock } from 'shared/mocks/hotel' //TODO delete when done
import { nearHotelsMock } from 'shared/mocks/hotel' //TODO delete when done

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
      // console.log(data) //TODO delete when done
      setHotel(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error(error)
    }
  }

  const loadNearHotels = async (hotelId: number) => {
    try {
      const { data } = await getNearHotels(hotelId)
      // console.log(data)//TODO delete when done
      setNearHotels(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error(error)
    }
  }

  const loadRooms = async (hotelId: number) => {
    try {
      const { data } = await getRooms({ hotel: hotelId })
      // console.log(data)//TODO delete when done
      setRooms(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error(error)
    }
  }

  const loadDestination = async (hotelId: number) => {
    try {
      const { data } = await getDestination(hotelId)
      // console.log(data)//TODO delete when done
      setDestination(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // setHotel(HotelMock)//TODO delete when done
    // setNearHotels(nearHotelsMock)//TODO delete when done
    // setDestination(NearbyDestinationsMock)//TODO delete when done

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
          backgroundImage: `url(${hotel?.images ? hotel.images[0] : ''})`,
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
