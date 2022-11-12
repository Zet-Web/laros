import React, { FC } from 'react'

import { RoomCard } from './RoomCard/RoomCard'
import { Room } from 'shared/types/hotel'

import s from './RoomCards.module.scss'

interface RoomCardsProps {
  rooms: Room[]
}

export const RoomCards: FC<RoomCardsProps> = ({ rooms }) => {
  return (
    <div className={s.roomCards}>
      <div className={s.roomCardsTitle}>Room types</div>
      <div className={s.roomCardsSubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.roomCardsWrap}>
        {rooms.map((room, index) => (
          <div key={index} className={s.roomCardWrap}>
            <RoomCard {...room} />
          </div>
        ))}
      </div>
    </div>
  )
}
