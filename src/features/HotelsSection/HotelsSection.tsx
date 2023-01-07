import { FC } from 'react'

import { HotelCard } from 'features'
import { Slider } from 'components'

import { Hotel } from 'shared/types/hotel'

import s from './HotelSection.module.scss'

interface HotelSection {
  hotels: Hotel[]
  title?: string
  subTitle?: string
}

export const HotelSection: FC<HotelSection> = ({ hotels, title, subTitle }) => {
  return (
    <div className={s.hotelSection}>
      <div className={s.title}>{title}</div>

      <div className={s.subTitle}>{subTitle}</div>

      <div className={s.wrap}>
        {hotels.length ? (
          <Slider withNavigation withPagination spaceBetween={30}>
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  )
}
