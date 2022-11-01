import React, { FC } from 'react'

import { HotelCard } from 'features/HotelCard'
import { Slider } from 'components/Slider'

import { Hotel } from 'shared/types/hotel'

import s from './OtherHotels.module.scss'

interface OtherHotelsProps {
  hotels: Hotel[]
}

export const OtherHotels: FC<OtherHotelsProps> = ({ hotels }) => {
  return (
    <div className={s.OtherHotels}>
      <div className={s.OtherHotelsTitle}>Other hotels</div>

      <div className={s.OtherHotelsSubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.OtherHotelsWrap}>
        {hotels.length ? (
          <Slider withNavigation={true} withPagination={true} nextEl={s.NextButton} prevEl={s.PrevButton} >
            {hotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  )
}
