import React, { FC } from 'react'

import { CalendarIcon, PencilIcon } from 'components/icons'

import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'

import { monthsCut } from '../consts'

import s from './InputCalendarTop.module.scss'

export const InputCalendarTop: FC<InputCalendarProps> = ({
  label = 'Date of Birth',
  required,
  value = new Date(),
  showCalendar,
  setShowCalendar,
}) => (
  <div className={s.columns}>
    <div className={s.row}>
      <div className={s.label}>
        <label>{`${label}`}</label>
        {`${required ? '*' : ''}`}
      </div>
    </div>
    <div className={s.row}>
      <div
        className={s.calendarIcon}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CalendarIcon width={18} height={18} />
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
