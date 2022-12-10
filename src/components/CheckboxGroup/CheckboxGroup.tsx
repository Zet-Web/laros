import { FC, useState } from 'react'
import cn from 'classnames'

import { Option } from 'shared/types'

import s from './CheckboxGroup.module.scss'
import { removeItem } from 'shared/helpers/transformers'

export type CheckBox = Option & { status: boolean }

interface CheckboxGroupProps {
  options: CheckBox[]
  onChange: (value: string) => void
  className?: string
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  onChange,
  className,
}) => {
  const [values, setValues] = useState<string[]>(getInitValues(options))

  function getInitValues(options: CheckBox[]): string[] {
    return options
      .filter(checkbox => checkbox.status)
      .map(checkbox => checkbox.value)
  }

  const handleChange = (value: string) => {
    const newValue = values.includes(value)
      ? removeItem(values, value)
      : [...values, value]
    setValues(newValue)
    onChange(newValue.toString())
  }

  return (
    <>
      {options.map(({ value, label }) => {
        return (
          <label key={value} className={cn(s.label, className)}>
            <input
              key={value}
              className={s.checkboxGroup}
              type='checkbox'
              checked={values.includes(value)}
              onChange={() => handleChange(value)}
            />
            <span className={s.fake}></span>
            <span>{label}</span>
          </label>
        )
      })}
    </>
  )
}
