import { FC } from 'react'
import { useRouter } from 'next/router'

import { Button } from 'components'
import { HotelCardBody } from './HotelCardBody/HotelCardBody'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel } from 'shared/types/hotel'

import s from './HotelCard.module.scss'

export interface HotelCardProps {
  hotel: Hotel
}

export const HotelCard: FC<HotelCardProps> = ({ hotel }) => {
  const t = useTranslate()
  const { push } = useRouter()

  const handleClick = (id: number) => {
    push(`/hotels/${id}`)
  }

  return (
    <div className={s.hotelCard}>
      <HotelCardBody {...hotel} />
      <div className={s.footer}>
        <Button
          classname={s.footerButton}
          onClick={() => handleClick(hotel.id)}
        >
          {t('hotelCard.moreButton')}
        </Button>
      </div>
    </div>
  )
}
