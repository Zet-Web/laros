import { FC } from 'react'
import { useRouter } from 'next/router'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { FieldsType, StartTripForm, InfoTags } from 'features'
import { Map, TruncatedText } from 'components'

import { useAppDispatch } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'

import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from 'shared/constants'
import { Hotel } from 'shared/types/hotel'

import s from './HotelIntro.module.scss'
import { useTranslate } from '../../../shared/hooks/useTranslate'

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
  min_price_chf,
  lrweb,
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
    <div className={s.hotelIntro}>
      <div className={s.left}>
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor='#f2c94c'
          edit={false}
          classNames={s.rating}
        />

        <div className={s.address}>{address}</div>

        <div className={s.name}>{lrweb}</div>

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
          <Map location={location} />
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
