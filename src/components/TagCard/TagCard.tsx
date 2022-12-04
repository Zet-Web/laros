import React, { FC } from 'react'
import cn from 'classnames'

import { HotelTag } from 'shared/types/hotel'

import s from './TagCard.module.scss'

interface HotelTagProps extends HotelTag {
  index: number
}
export const TagCard: FC<HotelTagProps> = ({ name, index }) => {
  const colorClass = s[`color_${(index + 1) % 6}`]
  return <div className={cn(s.tagCard, colorClass)}>{name}</div>
}
