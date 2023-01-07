import { ChangeEvent, FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Option } from 'shared/types'

import s from './Radio.module.scss'

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
  const t = useTranslate()

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
              checked={option.value === value}
              onChange={handleChange}
              onClick={() => onClick}
            />
            {option.icon && (
              <span className={s.icon}>
                <Image src={option.icon} alt='icon' width={15} height={15} />
              </span>
            )}
            <span className={s.label}>{t(option.label)}</span>
          </label>
        )
      })}
    </div>
  )
}
