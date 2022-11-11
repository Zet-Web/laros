import React, { FC, useState } from 'react'
import { dateFormatter } from 'shared/helpers/dateFormatter'

import { CalendarIcon } from 'components/icons'

import s from './InputCalendarRight.module.scss'

import { InputCalendarProps } from '../InputCalendar'
import { monthsCut } from '../consts'

export const InputCalendarRight: FC<InputCalendarProps> = ({
  label = 'Your travel period',
  required,
  value = new Date(),
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false)

  return (
    <>
      <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
      <div className={s.textDate}>{dateFormatter(value, monthsCut)}</div>
      <div
        className={s.calendarIcon}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CalendarIcon />
      </div>
    </>
  )
}
