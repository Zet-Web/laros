import React, { FC, useState } from 'react'
import { CalendarIcon, PencilIcon } from 'components/icons'

import s from './InputCalendarLeft.module.scss'
import { dateFormatter } from 'shared/helpers/dateFormatter'
import { InputCalendarProps } from '../InputCalendar'
import { monthsFull } from '../consts'

export const InputCalendarLeft: FC<InputCalendarProps> = ({
  label,
  required,
  value = new Date(),
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  return (
    <>
      <div
        className={s.calendarIcon}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CalendarIcon />
      </div>

      <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
      <div className={s.textDate}>{dateFormatter(value, monthsFull)}</div>
      <div
        className={s.pencilIcon}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <PencilIcon />
      </div>
    </>
  )
}
