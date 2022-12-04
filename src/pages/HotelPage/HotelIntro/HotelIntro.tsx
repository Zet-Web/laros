import React, { FC, useState } from 'react'
import { truncate } from 'lodash'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { StartTripForm } from 'features'
import { Map } from 'components'

import { InfoTags } from 'features/InfoTags/InfoTags'

import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from 'shared/constants'
import { Hotel } from 'shared/types/hotel'

import s from './HotelIntro.module.scss'

export const HotelIntro: FC<Hotel> = ({
  description,
  rating,
  name,
  tags,
  location,
  address,
  opinion,
  destination,
  is_active,
  link,
  max_capacity,
  period,
  tripadvisor_id,
  id,
  category_name,
  category,
  images,
  destination_name,
  accommodations,
  min_price,
  facilities,
  rooms,
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)

  return (
    <div className={s.hotelIntro}>
      <div className={s.hotelIntroLeft}>
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor='#ffd700'
          edit={false}
          classNames={s.rating}
        />

        <div className={s.hotelIntroAddress}>{address}</div>

        <div className={s.hotelIntroName}>{name}</div>

        <div className={s.hotelIntroDescription}>
          {isTruncated
            ? truncate(description, { length: TRUNCATED_ROOM_CARD_TEXT_SIZE })
            : description}
        </div>

        {description && (
          <div
            className={s.hotelIntroSeeMore}
            onClick={() => setIsTruncated(prev => !prev)}
          >
            See more
          </div>
        )}

        <StartTripForm />
      </div>

      <div className={s.hotelIntroRight}>
        <div className={s.map}>
          <Map location={location} />
        </div>

        <div className={s.tagsPanel}>
          {tags?.length ? (
            <>
              <div className={s.tagsTitle}>Highlights:</div>
              <InfoTags tags={tags} limit={4} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
