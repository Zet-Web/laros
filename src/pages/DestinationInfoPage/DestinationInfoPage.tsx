import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelSection, DestinationIntro } from 'features'
import { Trips } from './Trips/Trips'
import { Overview } from './Overview/Overview'

import { getDestination } from 'shared/api/routes/destinations'
import { getHotels } from 'shared/api/routes/hotels'
import { getTripsNearby } from 'shared/api/routes/trips'
import { useTranslate } from 'shared/hooks/useTranslate'
import { withDomain } from 'shared/helpers/withDomain'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { Hotel } from 'shared/types/hotel'

import s from './DestinationInfoPage.module.scss'

export const DestinationInfoPage = () => {
  const t = useTranslate()
  const { query } = useRouter()
  const destinationID = Number(query.id)

  const [destination, setDestination] = useState<Destination | null>(null)
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [trips, setTrips] = useState<Trip[]>([])

  const loadDestination = async (id: number) => {
    try {
      const { data } = await getDestination(id)
      // @ts-ignore TODO
      setDestination(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadTripNearby = async (id: number) => {
    try {
      const { data } = await getTripsNearby(id)
      setTrips(data.data)
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadHotels = async (id: number) => {
    try {
      const { data } = await getHotels({ destination: id.toString() })
      setHotels(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
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
            destination?.images ? withDomain(destination.images[0]) : ''
          })`,
        }}
      />
      {destination ? <DestinationIntro {...destination} /> : null}

      {destination?.images ? (
        // @ts-ignore TODO
        <Overview images={destination.images} overview={destination.overview} />
      ) : null}

      {trips ? (
        <Trips
          trips={trips}
          title={destination?.name}
          subTitle={t('areaPage.HotelsInSubTitle')}
        />
      ) : null}

      {destination?.tips ? (
        <div
          className={s.insiderTips}
          dangerouslySetInnerHTML={{ __html: destination.tips }}
        />
      ) : null}

      {hotels.length ? (
        <HotelSection
          title={`${t('areaPage.HotelsInTitle')} ${destination?.name}`}
          subTitle={t('areaPage.HotelsInSubTitle')}
          hotels={hotels}
        />
      ) : null}
    </div>
  )
}
