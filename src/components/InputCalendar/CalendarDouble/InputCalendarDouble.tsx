import React, { FC, useRef, useState } from 'react'
import cn from 'classnames'

import { CalendarIcon } from 'components'
import ManualInputUI from '../ManualEnter'

import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'
import { monthsCut } from '../consts'

import s from './calendarDouble.module.scss'

export const InputCalendarDouble: FC<InputCalendarProps> = ({
  label = 'Your travel period',
  required,
  value,
  handleIconClick,
  error = false,
  setError,
  setDate,
  doubleValue,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [showManualInput, setShowManualInput] = useState<boolean>(false)

  const showCalendarString = () =>
    doubleValue ? (
      <>
        {dateFormatter(doubleValue[0], monthsCut)} -{' '}
        {dateFormatter(doubleValue[1], monthsCut)}
      </>
    ) : (
      ''
    )

  const chooseInputUI = (): JSX.Element | string =>
    showManualInput ? (
      <>
        <ManualInputUI
          error={error}
          setError={setError}
          setDate={setDate}
          setShowManualInput={setShowManualInput}
        />
        <ManualInputUI
          error={error}
          setError={setError}
          setDate={setDate}
          setShowManualInput={setShowManualInput}
        />
      </>
    ) : (
      showCalendarString()
    )

  return (
    <div className={s.wrapper}>
      <div className={s.label}>
        <label>{`${label}`}</label>
        {`${required ? '*' : ''}`}
      </div>

      <div
        className={error ? cn(s.textDate, s.error) : s.textDate}
        ref={ref}
        onClick={() => setShowManualInput(true)}
      >
        {chooseInputUI()}
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
