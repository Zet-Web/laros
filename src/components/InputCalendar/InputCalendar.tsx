import { useRef, useState, FC } from 'react'
import CalendarWrapper from 'react-calendar'
import cn from 'classnames'

import { InputCalendarLeft } from './CalendarLeft'
import { InputCalendarRight } from './CalendarRight'
import { InputCalendarTop } from './CalendarTop'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './InputCalendar.module.scss'
import 'react-calendar/dist/Calendar.css'

export interface InputCalendarProps {
  label?: string
  required?: boolean
  onChange?: (value: Date) => void
  value?: Date
  classname?: string
  variant?: 'left' | 'right' | 'top'
  showCalendar: boolean
  setShowCalendar: (showCalendar: boolean) => void
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

  const CalendarLeft = (
    <div className={s.gridWrapper}>
      <InputCalendarLeft
        label={label}
        required={required}
        value={date}
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
      />
    </div>
  )

  const CalendarRight = (
    <InputCalendarRight
      label={label}
      required={required}
      value={date}
      showCalendar={showCalendar}
      setShowCalendar={setShowCalendar}
    />
  )

  const CalendarTop = (
    <InputCalendarTop
      label={label}
      required={required}
      value={date}
      showCalendar={showCalendar}
      setShowCalendar={setShowCalendar}
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
            prev2Label={null}
            minDate={new Date()}
          />
        </div>
      )}

      <div className={cn(s.gridWrapper, classname)}> {showInput()}</div>
    </div>
  )
}
