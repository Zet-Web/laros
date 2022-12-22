import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import { Button, SaleIcon, TagCard } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'
import { withDomain } from 'shared/helpers/withDomain'

import { Currency } from 'shared/types'
import { Trip } from 'shared/types/trip'

import { LIMIT_HOTEL_CARD_TAGS } from 'shared/constants'

import s from './TripCard.module.scss'

interface TripCardProps extends Trip {
  wide?: boolean
  onClick?: (id: number) => void
}

export const TripCard: FC<TripCardProps> = ({
  name,
  wide,
  images = [],
  tags = [],
  price,
  period,
  duration,
  offer_percent,
  offer_discount,
  onClick,
  id,
  offer_date_start,
  offer,
  destinations,
  transports,
  travel_types,
  offer_name,
  offer_date_end,
  island_hopping_fee,
  description,
  is_active,
  route,
}) => {
  const handleClick = (id: number) => {
    onClick?.(id)
  }
  const t = useTranslate()

  return (
    <div className={cn(s.tripCard, { [s.wide]: wide })}>
      <div className={s.header}>
        {images.length ? (
          <Image
            src={withDomain(images[0])}
            layout={'fill'}
            alt='trip card image'
          />
        ) : null}

        {offer_discount && (
          <div className={s.sale}>
            {`- ${offer_discount} CHF`}
            <SaleIcon />
          </div>
        )}

        {!offer_discount && offer_percent && (
          <div className={s.sale}>
            {`- ${offer_percent}% ${t('tripCard.off')}`}
            <SaleIcon />
          </div>
        )}
      </div>

      <div className={s.main}>
        <div className={s.mainWrap}>
          <div className={s.mainHead}>
            <div className={s.mainContainer}>
              <div className={s.label}>{t('tripCard.name')}</div>
              <div className={s.name}>{name ? name : '-'}</div>
            </div>

            <div className={s.mainContainer2}>
              <div className={s.label}>{t('tripCard.from')}</div>
              <div className={s.price}>{`${price ? price : '-'} ${
                Currency.CHF
              }`}</div>
              <div className={s.label}>{t('tripCard.person')}</div>
            </div>
          </div>

          <div className={s.mainCenter}>
            <div className={s.mainContainer}>
              <div className={s.label}>{t('tripCard.period')}</div>
              <div className={s.name}>{period ? period : '-'}</div>
            </div>

            <div className={s.mainContainer2}>
              <div className={s.label}>{t('tripCard.duration')}</div>
              <div className={s.price}>{`${duration ? duration : '-'} ${t(
                'travelPlannerTripPlan.day'
              )}`}</div>
            </div>
          </div>

          <div className={s.mainFooter}>
            {tags.length
              ? tags.slice(0, LIMIT_HOTEL_CARD_TAGS).map(tag => (
                  <div key={tag.id} className={s.tag}>
                    <TagCard {...tag} />
                  </div>
                ))
              : null}
          </div>
        </div>

        <div className={s.footer}>
          <Button classname={s.footerButton} onClick={() => handleClick(id)}>
            {t('tripCard.viewOfferButton')}
          </Button>
        </div>
      </div>
    </div>
  )
}
