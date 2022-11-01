import { useEffect, useState } from 'react'

import { getHotels } from 'shared/api/routes/hotels'
import { Hotel, HotelFilterParams } from 'shared/types/hotel'

import { HotelCard } from '../HotelCard'
import Sorting from './Sorting/Sorting'

import s from './DestinationHotels.module.scss'

const DestinationHotels = () => {
  const [params, setParams] = useState<Partial<HotelFilterParams>>({})
  const [hotels, setHotels] = useState<Hotel[]>([])

  const getHotelsFunction = async () => {
    const { data } = await getHotels(params)

    setHotels(data.data)
  }

  useEffect(() => {
    getHotelsFunction()
  }, [params])

  return (
    <div className={s.container}>
      <h3 className={s.title}>Sort accomodations by</h3>
      <Sorting setParams={setParams} params={params} />
      <div className={s.hotels}>
        {hotels.map(hotel => (
          // @ts-ignore
          <HotelCard
            // @ts-ignore
            type={'Type (Hotel/hostel ect)'}
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
