import { FC } from 'react'

import { TripCard } from 'features'

import { Trip } from 'shared/types/trip'

interface RelatedProps {
  data: Trip[]
}

export const RelatedTours: FC<RelatedProps> = ({ data }) => {
  return (
    <>
      {data.map(item => {
        return <TripCard key={item.id} {...item} />
      })}
    </>
  )
}
