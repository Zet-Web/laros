import { FC, useEffect, useState } from 'react'

import Sorting from './Sorting/Sorting'
import { HotelCard } from '../HotelCard'

import { HotelFilterParams } from 'shared/types/hotel'
import { useGetHotels } from 'shared/hooks/useGetHotels'
import { Region } from 'shared/types/region'
import { useTranslate } from 'shared/hooks/useTranslate'

import s from './DestinationHotels.module.scss'

interface DestinationHotelsProps {
  map: Region
}

const DestinationHotels: FC<DestinationHotelsProps> = ({ map }) => {
  const [params, setParams] = useState<Partial<HotelFilterParams>>({})
  const [hotels, isLoading, handleReady] = useGetHotels(params)
  const t = useTranslate()

  useEffect(() => {
    setParams({ destination: String(map.id) })
  }, [map])

  useEffect(() => {
    const timeout = setTimeout(() => handleReady(), 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [params])

  return (
    <div className={s.container}>
      <h3 className={s.title}>{t('hotels.sortTitle')}</h3>
      <Sorting map={map} setParams={setParams} params={params} />
      <div className={s.hotels}>
        {!isLoading &&
          hotels.map(hotel => (
            <HotelCard
              // @ts-ignore
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
