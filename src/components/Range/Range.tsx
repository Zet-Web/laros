import React, { FC, useState, ChangeEvent } from 'react'
import s from './Range.module.scss'

interface InputRangeProps {
  min?: number
  max: number
  currency: string
  value: number
  onChange: (value?: number) => void
}

export const Range: FC<InputRangeProps> = ({
  min = 0,
  max,
  currency,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number>(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(e.target.value))
    onChange?.(Number(e.target.value))
  }

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((selectedValue - min) * 100) / (max - min)}% 100%`,
    }
  }

  return (
    <div className={s.range}>
      <label className={s.label}>
        {min} {currency}
      </label>
      <input
        type='range'
        onChange={handleChange}
        style={getBackgroundSize()}
        step={1}
        value={selectedValue}
        min={min}
        max={max}
      />
      <label className={s.label}>
        {selectedValue} {currency}
      </label>
    </div>
  )
}
