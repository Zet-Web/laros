import { FC } from 'react'

import { Button } from 'components'
import { HotelCardBody } from './HotelCardBody/HotelCardBody'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel } from 'shared/types/hotel'

import s from './HotelCard.module.scss'

export interface HotelCardProps {
  hotel: Hotel
  onClick?: (id: number) => void
}

export const HotelCard: FC<HotelCardProps> = ({ hotel, onClick }) => {
  const handleClick = (id: number) => {
    onClick?.(id)
  }
  const t = useTranslate()

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
