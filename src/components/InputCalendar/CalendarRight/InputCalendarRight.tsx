import React, { FC, useRef, useState } from 'react'
import cn from 'classnames'

import { CalendarIcon } from 'components/icons'

import ManualInputUI from '../ManualEnter'
import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'

import { monthsCut } from '../consts'

import s from './InputCalendarRight.module.scss'

export const InputCalendarRight: FC<InputCalendarProps> = ({
  label = 'Your travel period',
  required,
  value = new Date(),
  handleIconClick,
  error,
  setError,
  setDate,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [showManualInput, setShowManualInput] = useState<boolean>(false)

  const showCalendarString = () =>
    value ? dateFormatter(value, monthsCut) : ''

  const chooseInputUI = (): JSX.Element | string =>
    showManualInput ? (
      <ManualInputUI
        error={error}
        setError={setError}
        setDate={setDate}
        setShowManualInput={setShowManualInput}
      />
    ) : (
      showCalendarString()
    )

  return (
    <>
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
      <div className={s.calendarIcon} onClick={() => handleIconClick()}>
        <CalendarIcon width={12} />
      </div>
    </>
  )
}
