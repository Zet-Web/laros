import React, { FC } from 'react'
import Image from 'next/image'

import { Room } from 'shared/types/hotel'

import s from './RoomCard.module.scss'
import {withDomain} from "../../../../shared/helpers/withDomain";
import {useTranslate} from "../../../../shared/hooks/useTranslate";

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
  const t = useTranslate()
  console.log(image)
  return (
    <div className={s.roomCard}>
      <div className={s.roomCardImage}>
        {image ? <Image src={withDomain(image)} alt='' layout={'fill'} /> : null}
      </div>

      <div className={s.roomCardBody}>
        <div className={s.roomCardTitle}>{room_name}</div>
        <div className={s.roomCardInfo}>{price} CHF / {t('common.nightPro')}</div>
        <div className={s.roomCardDescription}>{description}</div>
      </div>
    </div>
  )
}
