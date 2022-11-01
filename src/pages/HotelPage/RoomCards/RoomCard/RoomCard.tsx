import React, { FC } from 'react'
import Image from 'next/image'

import { Room } from 'shared/types/hotel'

import s from './RoomCard.module.scss'

export const RoomCard: FC<Room> = ({
  image,
  description,
  title,
  id,
  room_name,
  destination_name,
  hotel_name,
  change_price,
  price,
  season_price,
  capacity,
}) => {
  return (
    <div className={s.RoomCard}>
      <div className={s.RoomCardImage}>
        <Image // @ts-ignore
          src={image}
          alt=''
          width={'220'}
          height={'144px'}
        />
      </div>

      <div className={s.RoomCardBody}>
        <div className={s.RoomCardTitle}>{room_name}</div>
        <div className={s.RoomCardInfo}>{price} CHF / Night Pro 1 Person</div>
        <div className={s.RoomCardDescription}>{description}</div>
      </div>
    </div>
  )
}
