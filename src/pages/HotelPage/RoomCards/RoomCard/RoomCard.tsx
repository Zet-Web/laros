import React, { FC } from 'react'
import Image from 'next/image'

import { Room } from 'shared/types/hotel'

import s from './RoomCard.module.scss'

export const RoomCard: FC<Room> = ({
  image,
  description,
  room_name,
  price,
  title,
  id,
  destination_name,
  hotel_name,
  change_price,
  season_price,
  capacity,
}) => {
  return (
    <div className={s.roomCard}>
      <div className={s.roomCardImage}>
        {image ? <Image src={image} alt='' layout={'fill'} /> : null}
      </div>

      <div className={s.roomCardBody}>
        <div className={s.roomCardTitle}>{room_name}</div>
        <div className={s.roomCardInfo}>{price} CHF / Night Pro 1 Person</div>
        <div className={s.roomCardDescription}>{description}</div>
      </div>
    </div>
  )
}
