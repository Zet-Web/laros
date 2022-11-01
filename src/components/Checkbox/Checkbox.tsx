import { FC, ReactNode } from 'react'
import s from './Checkbox.module.scss'
import cn from 'classnames'

interface СheckboxProps {
  onChange?: () => void
  value?: boolean
  label: string
  children?: ReactNode
  className?: string
}

export const Checkbox: FC<СheckboxProps> = ({
  children,
  label,
  value,
  onChange,
  className,
}) => {
  const checkboxClass = cn(s.label, className)

  return (
    <label className={checkboxClass}>
      <input
        className={s.checkbox}
        checked={value}
        onChange={onChange}
        type='checkbox'
      />
      <span className={s.fake}></span>
      <span>{label || children}</span>
    </label>
  )
}
