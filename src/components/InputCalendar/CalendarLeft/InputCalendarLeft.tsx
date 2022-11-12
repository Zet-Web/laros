import React, { FC } from 'react'

import { CalendarIcon, PencilIcon } from 'components/icons'

import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'

import { monthsFull } from '../consts'

import s from './InputCalendarLeft.module.scss'

export const InputCalendarLeft: FC<InputCalendarProps> = ({
  label = 'Date',
  required,
  value = new Date(),
  showCalendar,
  setShowCalendar,
}) => (
  <>
    <div
      className={s.calendarIcon}
      onClick={() => setShowCalendar(!showCalendar)}
    >
      <CalendarIcon width={24} height={24} />
    </div>

    <div className={s.label}>
      <label>{`${label}`}</label>
      {`${required ? '*' : ''}`}
    </div>
    <div className={s.textDate}>{dateFormatter(value, monthsFull)}</div>
    <div
      className={s.pencilIcon}
      onClick={() => setShowCalendar(!showCalendar)}
    >
      <PencilIcon width={18} height={18} />
    </div>
  </>
)
