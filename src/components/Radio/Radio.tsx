import { ChangeEvent, FC } from 'react'
import s from './Radio.module.scss'
import cn from 'classnames'
import { Option } from 'shared/types'

interface RadioProps {
  name: string
  options: Option[]
  value: string | undefined
  onChange?: (value: string) => void
  onClick?: (value: string) => void
  orientation?: 'column' | 'row'
  classname?: string
}
export const Radio: FC<RadioProps> = ({
  name,
  options,
  value,
  onChange,
  onClick,
  classname,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={cn(s.radioGroup, classname)}>
      {options.map(option => {
        return (
          <label key={option.value} className={s.radio}>
            <input
              type='radio'
              className={cn(s.radioButton)}
              name={name}
              value={option.value}
              defaultChecked={value === option.value}
              onChange={handleChange}
              onClick={() => onClick}
            />
            <span className={s.label}>{option.label}</span>
          </label>
        )
      })}
    </div>
  )
}
