import { FC } from 'react'
import { useRouter } from 'next/router'

import { TripCard } from 'features'

import { Trip } from 'shared/types/trip'

import s from './RelatedTours.module.scss'

interface RelatedToursProps {
  similarTrips: Trip[]
}

export const RelatedTours: FC<RelatedToursProps> = ({ similarTrips }) => {
  const { push } = useRouter()

  const handlePush = (id: number) => {
    push(`/trips/${id}`)
  }

  return (
    <div className={s.wrapper}>
      {similarTrips?.map(trip => {
        return (
          <div key={trip.id} className={s.tripCard}>
            <TripCard {...trip} onClick={handlePush} />
          </div>
        )
      })}
    </div>
  )
}
