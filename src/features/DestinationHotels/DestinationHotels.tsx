import { FC, useEffect, useState } from 'react'

import Sorting from './Sorting/Sorting'
import { HotelCard } from '../HotelCard'

import { HotelFilterParams } from 'shared/types/hotel'
import { useGetHotels } from 'shared/hooks/useGetHotels'
import { Map } from 'shared/helpers/getMap'

import s from './DestinationHotels.module.scss'

interface DestinationHotelsProps {
  map: Map
}

const DestinationHotels: FC<DestinationHotelsProps> = ({ map }) => {
  const [params, setParams] = useState<Partial<HotelFilterParams>>({})
  const [hotels, isLoading, handleReady] = useGetHotels(params)

  useEffect(() => {
    map.currentMap && setParams({ destination: map.currentMap.id.toString() })
  }, [map])

  useEffect(() => {
    const timeout = setTimeout(() => handleReady(), 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [params])

  return (
    <div className={s.container}>
      <h3 className={s.title}>Sort accomodations by</h3>
      <Sorting map={map} setParams={setParams} params={params} />
      <div className={s.hotels}>
        {!isLoading &&
          hotels.map(hotel => (
            <HotelCard
              fromPrice={hotel?.max_capacity!}
              key={hotel.id}
              {...hotel}
            />
          ))}
      </div>
    </div>
  )
}

export default DestinationHotels
