import React, { FC } from 'react'
import Image from 'next/image'

// @ts-ignore // TODO
import ReactStars from 'react-rating-stars-component'

import { Button, TagCard } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'
import { withDomain } from 'shared/helpers/withDomain'

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
      <div className={s.header}>
        {images.length ? (
          <Image
            src={withDomain(images[0])}
            layout={'fill'}
            alt='Hotel image'
          />
        ) : null}
      </div>

      <div className={s.body}>
        <div className={s.bodyHead}>
          <div className={s.cardRating}>
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor='#f2c94c'
              edit={false}
              classNames={s.rating}
            />
          </div>

          <div className={s.label}>{address}</div>
          <div className={s.name}>{lrweb}</div>
        </div>

        <div className={s.bodyCenter}>
          <div className={s.bodySection}>
            <div className={s.label}>{t('hotelCard.from')}</div>
            <div className={s.price}>
              {min_price_chf ? min_price_chf : '-'} CHF / {t('hotelCard.night')}
            </div>
            <div className={s.label}>{t('hotelCard.person')}</div>
          </div>

          <div className={s.bodySection}>
            <div className={s.label}>{t('hotelCard.period')}</div>
            <div className={s.period}>{period}</div>
          </div>
        </div>
        <div className={s.bodyFooter}>
          {tags?.slice(0, LIMIT_HOTEL_CARD_TAGS).map((tag, index) => (
            <TagCard key={index} {...tag} />
          ))}
        </div>
      </div>

      <div className={s.footer}>
        <Button classname={s.footerButton} onClick={() => handleClick(id)}>
          {t('hotelCard.moreButton')}
        </Button>
      </div>
    </div>
  )
}
