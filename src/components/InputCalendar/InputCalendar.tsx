import { useRef, useState, FC } from 'react'
import CalendarWrapper from 'react-calendar'
import cn from 'classnames'

import { InputCalendarLeft } from './CalendarLeft'
import { InputCalendarRight } from './CalendarRight'
import { InputCalendarTop } from './CalendarTop'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MIN_DATE } from 'shared/constants/form'

import s from './InputCalendar.module.scss'
import 'react-calendar/dist/Calendar.css'

export interface InputCalendarProps {
  label?: string
  required?: boolean
  onChange?: (value: Date) => void
  value?: Date | null
  classname?: string
  variant?: 'left' | 'right' | 'top'
  showCalendar?: boolean
  setShowCalendar?: (showCalendar: boolean) => void
  handleIconClick?: () => void
  error?: boolean
  setError?: any
  setDate?: any
  // TODO temp changed to any as build errors
  // setError?: (value: boolean) => void
  // setDate?: (date: Date) => void
}

type InputCalendarPropsMain = Omit<
  InputCalendarProps,
  'showCalendar' | 'setShowCalendar'
>

export const InputCalendar: FC<InputCalendarPropsMain> = ({
  label,
  required = false,
  onChange,
  classname,
  variant,
  value,
}) => {
  const [date, setDate] = useState<Date | null>(value ?? new Date())
  const [error, setError] = useState<boolean>(false)
  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  const [clickCounter, setClickCounter] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  const handleIconClick = (): void => {
    setShowCalendar(!showCalendar)
    setDate(null)
    setError(false)
  }

  const handleClickOutside = (): void => {
    setShowCalendar(false)
    if (error || value === undefined) setDate(date || new Date())
  }

  useClickOutside(ref, handleClickOutside)

  const handleChange = (e: Date): void => {
    onChange?.(e)
    setDate(e)

    setClickCounter(clickCounter + 1) // TODO improve code

    if (clickCounter == 1) {
      setShowCalendar(false)
      setClickCounter(0)
    } else {
      setClickCounter(clickCounter + 1)
    }
  }
  const CalendarLeft = (
    <div className={s.gridWrapper}>
      <InputCalendarLeft
        label={label}
        required={required}
        value={date}
        handleIconClick={handleIconClick}
        error={error}
        setError={setError}
        setDate={setDate}
      />
    </div>
  )

  const CalendarRight = (
    <InputCalendarRight
      label={label}
      required={required}
      value={date}
      handleIconClick={handleIconClick}
      error={error}
      setError={setError}
      setDate={setDate}
    />
  )

  const CalendarTop = (
    <InputCalendarTop
      label={label}
      required={required}
      value={date}
      handleIconClick={handleIconClick}
      error={error}
      setError={setError}
      setDate={setDate}
    />
  )

  const showInput = () => {
    switch (variant) {
      case 'right':
        return CalendarRight
      case 'top':
        return CalendarTop
      default:
        return CalendarLeft
    }
  }

  return (
    <div className={cn(s.inputCalendar, classname)}>
      {showCalendar && (
        <div ref={ref}>
          <CalendarWrapper
            className={cn(s.wrapper, classname)}
            onChange={handleChange}
            value={date}
            minDate={MIN_DATE}
          />
        </div>
      )}

      <div className={cn(s.gridWrapper, classname)}> {showInput()}</div>
    </div>
  )
}
