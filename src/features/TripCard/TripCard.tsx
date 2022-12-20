import { FC } from 'react'
import cn from 'classnames'

import { Button, SaleIcon, TagCard } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Currency } from 'shared/types'
import { Trip } from 'shared/types/trip'

import s from './TripCard.module.scss'
import { LIMIT_HOTEL_CARD_TAGS } from '../../shared/constants'

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
    <div className={cn(s.wrapper, { [s.wide]: wide })}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${images[0]})`,
        }}
      >
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
        <div className={s.row}>
          <div className={s.regionName}>
            <div className={s.meta}>{t('tripCard.name')}</div>
            <div>{name}</div>
          </div>

          <div className={s.fromWrapper}>
            <div className={s.meta}>{t('tripCard.from')}</div>
            <div className={s.from}>{`${price} ${Currency.CHF}`}</div>
            <div className={s.meta}>{t('tripCard.person')}</div>
          </div>
        </div>

        <div className={s.row}>
          <div className={s.periodWrapper}>
            <div className={s.meta}>{t('tripCard.period')}</div>
            <div className={s.period}>{period}</div>
          </div>
          <div className={s.durationWrapper}>
            <div className={s.meta}>{t('tripCard.duration')}</div>
            <div className={s.duration}>{`${duration} Days`}</div>
          </div>
        </div>

        <div className={s.lastRow}>
          {tags.length
            ? tags.slice(0, LIMIT_HOTEL_CARD_TAGS).map((tag, index) => (
                <div key={tag.id} className={s.tag}>
                  <TagCard index={index} {...tag} />
                </div>
              ))
            : null}
        </div>
        <Button classname={s.button} onClick={() => handleClick(id)}>
          {t('tripCard.viewOfferButton')}
        </Button>
      </div>
    </div>
  )
}
