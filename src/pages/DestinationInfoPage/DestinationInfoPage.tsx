import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelSection, DestinationIntro } from 'features'
import { Trips } from './Trips/Trips'
import { Overview } from './Overview/Overview'

import { getDestination } from 'shared/api/routes/destinations'
import { getHotels } from 'shared/api/routes/hotels'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { Hotel } from 'shared/types/hotel'

import { destinationInfo, tripsMock } from 'shared/mocks/destinationInfo'
import { nearHotelsMock } from 'shared/mocks/hotel'

import s from './DestinationInfoPage.module.scss'

export const DestinationInfoPage = () => {
  const { query } = useRouter()
  const destinationID = Number(query.id)

  const [destination, setDestination] = useState<Destination | null>(null)
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [trips, setTrips] = useState<Trip[]>([])

  const loadDestination = async (id: number) => {
    try {
      const { data } = await getDestination(id)
      // console.log(data)
      // setDestination(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadHotels = async (id: number) => {
    try {
      const { data } = await getHotels({ destination: id.toString() })
      // console.log(data)
      // setHotels(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setTrips(tripsMock)
    if (destinationID) {
      loadDestination(destinationID)
      loadHotels(destinationID)
      setDestination(destinationInfo)
      setHotels(nearHotelsMock)
    }
  }, [query.id])

  return (
    <div
      className={s.destinationPage}
      style={{
        backgroundImage: `url(${destination ? destination.images[0] : ''})`,
      }}
    >
      {destination ? <DestinationIntro {...destination} /> : null}

      {destination?.images ? (
        // @ts-ignore
        <Overview images={destination.images} overview={destination.overview} />
      ) : null}

      {trips && destination ? (
        <Trips
          trips={trips}
          title={destination.name}
          subTitle={
            'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.'
          }
        />
      ) : null}

      {destination?.tips ? (
        <div
          className={s.insiderTips}
          dangerouslySetInnerHTML={{ __html: destination.tips }}
        />
      ) : null}

      {hotels ? (
        <HotelSection
          title={'Hotels in Tessaloniki'}
          subTitle={
            'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.'
          }
          hotels={hotels}
        />
      ) : null}
    </div>
  )
}
