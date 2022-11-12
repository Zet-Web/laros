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
    <div className={s.otherHotels}>
      <div className={s.otherHotelsTitle}>Other hotels</div>

      <div className={s.otherHotelsSubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.otherHotelsWrap}>
        {hotels.length ? (
          <Slider
            withNavigation={true}
            withPagination={true}
            nextEl={s.nextButton}
            prevEl={s.prevButton}
            classname={s.slider}
          >
            {hotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  )
}
