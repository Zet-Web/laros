import React, { FC } from 'react'

import { RoomCard } from './RoomCard/RoomCard'
import { Room } from 'shared/types/hotel'

import s from './RoomCards.module.scss'

interface RoomCardsProps {
  rooms: Room[]
}

export const RoomCards: FC<RoomCardsProps> = ({ rooms }) => {
  return (
    <div className={s.RoomCards}>
      <div className={s.RoomCardsTitle}>Room types</div>
      <div className={s.RoomCardsSubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.RoomCardsWrap}>
        {rooms.map((room, index) => (
          <div key={index} className={s.RoomCardWrap}>
            <RoomCard {...room} />
          </div>
        ))}
      </div>
    </div>
  )
}
