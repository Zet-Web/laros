import React, { FC } from 'react'
import Image from 'next/image'

// @ts-ignore // TODO
import ReactStars from 'react-rating-stars-component'

import { Button, TagCard } from 'components'

import { Hotel } from 'shared/types/hotel'
import { LIMIT_HOTEL_CARD_TAGS } from 'shared/constants'

import s from './HotelCard.module.scss'
import { useRouter } from 'next/router'

export interface HotelCardProps extends Hotel {
  onClick?: (id: number) => void
}

export const HotelCard: FC<HotelCardProps> = ({
  rating,
  address,
  name,
  tags,
  images,
  period,
  min_price,
  id,
  link,
  location,
  max_capacity,
  tripadvisor_id,
  is_active,
  opinion,
  destination,
  description,
  onClick,
}) => {
  const { push } = useRouter()
  return (
    <div className={s.hotelCard}>
      <div className={s.hotelCardImage}>
        <Image src={images[0]} layout={'fill'} alt='Hotel Picture' />
      </div>

      <div className={s.header}>
        <div className={s.rating}>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor='#ffd700'
            edit={false}
          />
        </div>
        <div className={s.type}>{address}</div>
        <div className={s.name}>{name}</div>
      </div>

      <div className={s.info}>
        <div className={s.block}>
          <p className={s.text}>From</p>
          <p className={s.price}>{min_price} CHF / Night</p>
          <p className={s.text}>Pro person</p>
        </div>
        <div className={s.block}>
          <p className={s.text}>Travel Period</p>
          <p className={s.period}>{period}</p>
        </div>
      </div>

      <div className={s.tags}>
        {tags.slice(0, LIMIT_HOTEL_CARD_TAGS).map((tag, index) => (
          <TagCard index={0} key={index} {...tag} />
        ))}
      </div>

      <Button onClick={() => push(`/hotels/${id}`)} classname={s.button}>
        Learn more
      </Button>
    </div>
  )
}
