import React, { FC } from 'react'
import cn from 'classnames'

import s from './Tag.module.scss'

export interface TagProps {
  id: number
  name: string
  isSelected?: boolean
  handleChange?: (id: number) => void
}

export const Tag: FC<TagProps> = ({ isSelected, handleChange, name, id }) => {
  const handleClick = () => {
    if (handleChange) {
      handleChange(id)
    }
  }

  return (
    <span
      className={cn(s.name, { [s.active]: isSelected })}
      onClick={handleClick}
    >
      {name}
    </span>
  )
}
