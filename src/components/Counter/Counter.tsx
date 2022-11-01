import Image from 'next/image'
import { FC } from 'react'
import s from './Counter.module.scss'
import minus from '/public/assets/images/counter/minus.svg'
import plus from '/public/assets/images/counter/plus.svg'
import minusDisabled from '/public/assets/images/counter/MinusDisabled.svg'
import plusDisabled from '/public/assets/images/counter/PlusDisabled.svg'

interface CounterProps {
  onChange: (val: number) => void
  value: number
  min?: number
  max?: number
}
export const Counter: FC<CounterProps> = ({
  onChange,
  value,
  min = 0,
  max,
}) => {
  const minDisabled = value === min
  const maxDisabled = max && value === max
  const handleIncrement = () => {
    if (maxDisabled) {
      onChange(value)
    } else onChange(value + 1)
  }
  const handleDecrement = () => {
    if (minDisabled) {
      onChange(value)
    } else onChange(value - 1)
  }
  return (
    <div className={s.counter}>
      <span onClick={() => handleDecrement()}>
        <Image
          src={minDisabled ? minusDisabled : minus}
          width={24}
          height={24}
        />
      </span>
      <span onClick={() => handleIncrement()}>
        <Image src={maxDisabled ? plusDisabled : plus} width={24} height={24} />
      </span>
    </div>
  )
}
