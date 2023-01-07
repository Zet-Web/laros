// @ts-nocheck
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { StartTripForm, InfoTags, FieldsType } from 'features'
import { Map, TruncatedText } from 'components'

import { useAppDispatch } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'
import { useTranslate } from 'shared/hooks/useTranslate'

import { Trip } from 'shared/types/trip'

import s from './tripPageIntro.module.scss'

export const TripPageIntro: FC<Trip> = ({
  id,
  name,
  tags,
  price,
  route,
  description,
}) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const t = useTranslate()
  console.log(id)

  const handleClick = (fields: FieldsType) => {
    dispatch(
      updateForm({
        rooms: fields.rooms,
        date_start: Number(fields.date[0]),
      })
    )
    push(`/trip_form/${id}`)
  }

  return (
    <div className={s.pageIntro}>
      <div className={s.left}>
        <div className={s.name}>{name}</div>
        <div className={s.price}>
          {price} CHF / {t('travelPlannerTripPlan.proPerson')}
        </div>

        {description ? (
          <div
            className={cn(s.description, ['scrollStyle'])}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : null}

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
