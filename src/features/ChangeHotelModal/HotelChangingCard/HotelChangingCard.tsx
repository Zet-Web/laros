import { FC, useState } from 'react'
import cn from 'classnames'

import { Button } from 'components'
import { HotelCardBody } from '../../HotelCard/HotelCardBody/HotelCardBody'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel } from 'shared/types/hotel'

import s from '../../HotelCard/HotelCard.module.scss'

export interface HotelChangingCardProps {
  hotel: Hotel
  onClick?: (id: number, isSelected: boolean) => void
}

export const HotelChangingCard: FC<HotelChangingCardProps> = ({
  onClick,
  hotel,
}) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = (id: number, isSelected: boolean) => {
    setIsSelected(prevState => !prevState)
    onClick?.(id, !isSelected)
  }

  const t = useTranslate()

  return (
    <div className={cn(s.hotelCard, { [s.hotelCardBorder]: isSelected })}>
      <HotelCardBody {...hotel} />

      <div className={s.footer}>
        <Button
          classname={cn(s.hotelChangingCardFooterButton, {
            [s.hotelChangingCardButton]: isSelected,
          })}
          onClick={() => handleClick(hotel.id, isSelected)}
        >
          {isSelected ? (
            <>{t('brochures.buttonSelected')}</>
          ) : (
            <>{t('brochures.buttonSelect')}</>
          )}
        </Button>
      </div>
    </div>
  )
}
