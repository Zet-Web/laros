import React, { FC, useRef, useState } from 'react'
import cn from 'classnames'

import { CalendarIcon, PencilIcon } from 'components/icons'

import ManualInputUI from '../ManualEnter'
import { dateFormatter } from 'shared/helpers/dateFormatter'

import { InputCalendarProps } from '../InputCalendar'

import { monthsFull } from '../consts'

import s from './InputCalendarLeft.module.scss'

export const InputCalendarLeft: FC<InputCalendarProps> = ({
  label = 'Date',
  required,
  value = new Date(),
  handleIconClick,
  error,
  setError,
  setDate,
  widIcon,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [showManualInput, setShowManualInput] = useState<boolean>(false)

  const showCalendarString = () =>
    value ? dateFormatter(value, monthsFull) : ''

  const chooseInputUI = (): JSX.Element | string =>
    showManualInput ? (
      <ManualInputUI
        // @ts-ignore
        error={error}
        // @ts-ignore
        setError={setError}
        // @ts-ignore
        setDate={setDate}
        setShowManualInput={setShowManualInput}
      />
    ) : (
      showCalendarString()
    )

  return (
    <>
      {widIcon && (
        <div
          className={s.calendarIcon}
          onClick={() => (handleIconClick ? handleIconClick() : null)}
        >
          <CalendarIcon width={24} height={24} />
        </div>
      )}

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
        className={s.pencilIcon}
        onClick={() => (handleIconClick ? handleIconClick() : null)}
      >
        <PencilIcon width={18} height={18} />
      </div>
    </>
  )
}
