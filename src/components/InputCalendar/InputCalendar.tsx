import { useRef, useState, FC } from 'react'
import CalendarWrapper from 'react-calendar'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import { PencilIcon, CalendarIcon } from 'components/icons'

import s from './InputCalendar.module.scss'
import cn from 'classnames'
import 'react-calendar/dist/Calendar.css'

import dateFormatter from 'shared/helpers/dateFormatter'

interface InputCalendarProps {
  label: string
  required?: boolean
  onChange?: (value: Date) => void
  value?: Date
  classname?: string
  shorten?: boolean
}

export const InputCalendar: FC<InputCalendarProps> = ({
  label,
  required = false,
  onChange,
  classname,
  value
}) => {
  const [date, setDate] = useState(value ?? new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    setShowCalendar(false)
  }

  useClickOutside(ref, handleClickOutside)

  const handleChange = (e: Date): void => {
    onChange?.(e)
    setDate(e)
  }

  return (
    <div className={cn(s.inputCalendar, classname)}>
      {showCalendar && (
        <div ref={ref}>
          <CalendarWrapper
            className={cn(s.wrapper, classname)}
            onChange={handleChange}
            value={date}
            prev2Label={null}
            minDate={new Date()}
          />
        </div>
      )}
      {!showCalendar && (
        <div className={s.gridWrapper}>
          <div
            className={s.calendarIcon}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <CalendarIcon />
          </div>

          <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
          <div className={s.textDate}>{dateFormatter(date)}</div>
          <span
            className={s.pencilIcon}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <PencilIcon />
          </span>
        </div>
      )}
    </div>
  )
}
