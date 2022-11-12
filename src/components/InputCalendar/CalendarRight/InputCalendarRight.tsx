import React, { FC } from 'react'

import { CalendarIcon } from 'components/icons'

import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'

import { monthsCut } from '../consts'

import s from './InputCalendarRight.module.scss'

export const InputCalendarRight: FC<InputCalendarProps> = ({
  label = 'Your travel period',
  required,
  value = new Date(),
  showCalendar,
  setShowCalendar,
}) => (
  <>
    <div className={s.label}>
      <label>{`${label}`}</label>
      {`${required ? '*' : ''}`}
    </div>
    <div className={s.textDate}>{dateFormatter(value, monthsCut)}</div>
    <div
      className={s.calendarIcon}
      onClick={() => setShowCalendar(!showCalendar)}
    >
      <CalendarIcon width={13} />
    </div>
  </>
)
