import React, { FC } from 'react'

import { HotelTag } from 'shared/types/hotel'

import s from './TagCard.module.scss'

export const TagCard: FC<HotelTag> = ({ name ,id}) => {
  return <div className={s.tagCard}>{name}</div>
}
