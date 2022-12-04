import React, { useState, FC, useRef } from 'react'
import cn from 'classnames'

import { CalendarIcon, PencilIcon } from 'components/icons'

import ManualInputUI from '../ManualEnter'
import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'

import { monthsCut } from '../consts'

import s from './InputCalendarTop.module.scss'

export const InputCalendarTop: FC<InputCalendarProps> = ({
  label = 'Date of Birth',
  required,
  value = new Date(),
  handleIconClick,
  error = false,
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
          onClick={() => (handleIconClick ? handleIconClick() : null)}
        >
          <CalendarIcon width={18} height={18} />
        </div>
        <div
          className={error ? cn(s.textDate, s.error) : s.textDate}
          ref={ref}
          onClick={() => setShowManualInput(true)}
        >
          {chooseInputUI()}
        </div>
        <div
          className={s.pencilIcon}
          onClick={() => (handleIconClick ? handleIconClick() : null)}
        >
          <PencilIcon />
        </div>
      </div>
    </div>
  )
}
