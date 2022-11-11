import React, { FC, useState } from 'react'
import { CalendarIcon, PencilIcon } from 'components/icons'

import s from './InputCalendarTop.module.scss'
import { dateFormatter } from 'shared/helpers/dateFormatter'
import { InputCalendarProps } from '../InputCalendar'
import { monthsCut } from '../consts'

export const InputCalendarTop: FC<InputCalendarProps> = ({
  label = 'Date of Birth',
  required,
  value = new Date(),
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false)

  return (
    <div className={s.columns}>
      <div className={s.row}>
        <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
      </div>
      <div className={s.row}>
        <div
          className={s.calendarIcon}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <CalendarIcon />
        </div>
        <div className={s.textDate}>{dateFormatter(value, monthsCut)}</div>
        <div
          className={s.pencilIcon}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <PencilIcon />
        </div>
      </div>
    </div>
  )
}
