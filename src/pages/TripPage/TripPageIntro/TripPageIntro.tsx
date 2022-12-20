// @ts-nocheck
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { StartTripForm, InfoTags, FieldsType } from 'features'
import { Map, TruncatedText } from 'components'

import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from 'shared/constants'
import { useAppDispatch } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'

import { Trip } from 'shared/types/trip'

import s from './tripPageIntro.module.scss'
import { useTranslate } from '../../../shared/hooks/useTranslate'

export const TripPageIntro: FC<Trip> = ({
  id,
  name,
  tags,
  price,
  route,
  description,
  offer_name,
  offer,
  offer_percent,
  offer_discount,
  is_active,
  offer_date_end,
  offer_date_start,
  period,
  island_hopping_fee,
  travel_types,
  images,
  destinations,
  transports,
  duration,
  near_destinations,
}) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const t = useTranslate()

  const handleClick = (fields: FieldsType) => {
    dispatch(
      updateForm({
        rooms: fields.rooms,
        date_start: [Number(fields.date[0]), Number(fields.date[1])],
      })
    )
    push(`/trip_form`)
  }

  return (
    <div className={s.pageIntro}>
      <div className={s.left}>
        <div className={s.name}>{name}</div>
        <div className={s.price}>
          {price} CHF / {t('travelPlannerTripPlan.proPerson')}
        </div>

        <TruncatedText
          limit={TRUNCATED_ROOM_CARD_TEXT_SIZE}
          className={s.description}
          more={t('hotel.more')}
        >
          {description}
        </TruncatedText>

        <StartTripForm onChange={handleClick} />
      </div>

      <div className={s.right}>
        <div className={s.map}>
          <Map route={route} />
        </div>

        <div className={s.tagsPanel}>
          {tags?.length ? (
            <>
              <div className={s.tagsTitle}>{t('hotel.tagsTitle')}:</div>
              <InfoTags tags={tags} limit={4} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
