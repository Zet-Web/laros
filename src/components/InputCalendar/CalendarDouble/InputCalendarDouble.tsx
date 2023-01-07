import { FC, useRef } from 'react'
import cn from 'classnames'

import { CalendarIcon } from 'components'

import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'
import { monthsCut } from '../consts'

import s from './calendarDouble.module.scss'

export const InputCalendarDouble: FC<InputCalendarProps> = ({
  label,
  required,
  value,
  handleIconClick,
  error = false,
  setError,
  setDate,
  doubleValue,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const showCalendarString = () =>
    doubleValue ? (
      <>
        {dateFormatter(doubleValue[0], monthsCut)} -{' '}
        {dateFormatter(doubleValue[1], monthsCut)}
      </>
    ) : (
      ''
    )

  return (
    <div className={s.wrapper}>
      <div className={s.label}>
        <label>{`${label}`}</label>
        {`${required ? '*' : ''}`}
      </div>

      <div className={error ? cn(s.textDate, s.error) : s.textDate} ref={ref}>
        {showCalendarString()}
      </div>

      <div
        className={s.calendarIcon}
        onClick={() => (handleIconClick ? handleIconClick() : null)}
      >
        <CalendarIcon width={30} />
      </div>
    </div>
  )
}
