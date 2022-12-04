import { FC, ChangeEvent, useState, useRef } from 'react'

import { validateStrDate } from 'shared/helpers/dateValidator'
import { convertStrDate } from 'shared/helpers/dateConverter'

import s from './InputCalendar.module.scss'

interface ShowManualInputUIType {
  error: boolean
  setShowManualInput: (value: boolean) => void
  setError: (value: boolean) => void
  setDate: (date: Date) => void
}

const ManualInputUI: FC<ShowManualInputUIType> = ({
  error,
  setShowManualInput,
  setError,
  setDate,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [textDate, setTextDate] = useState<string>('')
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const strDate: string = e.target.value
    const isDateOK: boolean = validateStrDate(strDate)
    setTextDate(strDate)
    isDateOK ? setError(false) : setError(true)
  }

  const handleClickOutside = (): void => {
    setShowManualInput(false)
    if (!error) {
      if (textDate !== '') setDate(convertStrDate(textDate))
    } else {
      setDate(new Date())
    }
  }
  return (
    <div onBlur={() => handleClickOutside()} ref={ref}>
      <input
        className={s.textDate}
        placeholder='dd/mm/yyyy'
        type='text'
        value={textDate}
        onChange={e => handleChangeText(e)}
        autoFocus
      />
    </div>
  )
}
export default ManualInputUI
