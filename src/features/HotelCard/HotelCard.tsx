import React, { FC } from 'react'
import Image from 'next/image'

// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { Button } from 'components'

import { Hotel } from 'shared/types/hotel'

import s from './HotelCard.module.scss'

export interface HotelCardProps extends Hotel {
  onClick?: (id: number) => void
}

export const HotelCard: FC<HotelCardProps> = ({
  rating,
  address,
  name,
  tags,
  images,
  id,
  link,
  location,
  max_capacity,
  period,
  tripadvisor_id,
  is_active,
  opinion,
  destination,
  description,
  onClick,
  min_price,
}) => {
  return (
    <div className={s.HotelCard}>
      <div className={s.HotelCardImage}>
        <Image
          src={images[0]}
          objectFit='cover'
          width='368'
          height='180'
          alt='Hotel Picture'
        />
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
        {tags.slice(0, 2).map((tag, index) => (
          <span key={index} className={s.tag}>
            {tag.name}
          </span>
        ))}
      </div>

      <Button classname={s.button}>Learn more</Button>
    </div>
  )
}
