import React, { FC } from 'react'
import Image from 'next/image'

// @ts-ignore // TODO
import ReactStars from 'react-rating-stars-component'

import { Button, TagCard } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel } from 'shared/types/hotel'
import { LIMIT_HOTEL_CARD_TAGS } from 'shared/constants'

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
  period,
  min_price,
  min_price_chf,
  lrweb,
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
  const handleClick = (id: number) => {
    onClick?.(id)
  }
  const t = useTranslate()

  return (
    <div className={s.hotelCard}>
      <div className={s.hotelCardImage}>
        {images.length ? (
          <Image src={images[0]} layout={'fill'} alt='Hotel Picture' />
        ) : null}
      </div>

      <div className={s.header}>
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor='#f2c94c'
          edit={false}
          classNames={s.rating}
        />

        <div className={s.type}>{address}</div>
        <div className={s.name}>{lrweb}</div>
      </div>

      <div className={s.info}>
        <div className={s.block}>
          <p className={s.text}>{t('hotelCard.from')}</p>
          <p className={s.price}>{min_price_chf} CHF / Night</p>
          <p className={s.text}>{t('hotelCard.person')}</p>
        </div>
        <div className={s.block}>
          <p className={s.text}>{t('hotelCard.period')}</p>
          <p className={s.period}>{period}</p>
        </div>
      </div>

      <div className={s.tags}>
        {tags?.slice(0, LIMIT_HOTEL_CARD_TAGS).map((tag, index) => (
          <TagCard key={index} {...tag} index={index} />
        ))}
      </div>

      <Button classname={s.button} onClick={() => handleClick(id)}>
        {t('hotelCard.moreButton')}
      </Button>
    </div>
  )
}
