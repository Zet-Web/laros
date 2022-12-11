import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelSection, DestinationIntro } from 'features'
import { Trips } from './Trips/Trips'
import { Overview } from './Overview/Overview'

import { getDestination } from 'shared/api/routes/destinations'
import { getHotels } from 'shared/api/routes/hotels'
import { getTripsNearby } from 'shared/api/routes/trips'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { Hotel } from 'shared/types/hotel'

import { destinationInfo, tripsMock } from 'shared/mocks/destinationInfo' //TODO delete when done
import { nearHotelsMock } from 'shared/mocks/hotel' //TODO delete when done

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
      // console.log(data) //TODO delete when done
      setDestination(data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error(error)
    }
  }

  const loadTripNearby = async (id: number) => {
    try {
      const { data } = await getTripsNearby(id)
      // console.log(data) //TODO delete when done
      setTrips(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadHotels = async (id: number) => {
    try {
      const { data } = await getHotels({ destination: id.toString() })
      // console.log(data) //TODO delete when done
      setHotels(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // setTrips(tripsMock) //TODO delete when done
    // setDestination(destinationInfo) //TODO delete when done
    // setHotels(nearHotelsMock) //TODO delete when done
    if (destinationID) {
      loadDestination(destinationID)
      loadHotels(destinationID)
      loadTripNearby(destinationID)
    }
  }, [query.id])

  return (
    <div className={s.destinationPage}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${
            destination?.images ? destination.images[0] : ''
          })`,
        }}
      />

      {destination ? <DestinationIntro {...destination} /> : null}

      {destination?.images ? (
        // @ts-ignore TODO
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
