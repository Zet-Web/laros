import { FC, useState } from 'react'
import s from './Subscribe.module.scss'
import cls from 'classnames'

export const Subscribe: FC = () => {
  const [value, setValue] = useState<string>('')

  const onHandleClick = () => {
    console.log(value)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h1 className={s.title}>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className={s.subtitle}>
          At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
          in orci, pretium nulla volutpat leo.
        </p>
        <div className={s.inputWrapper}>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Enter your email here'}
            className={s.input}
          />
          <button onClick={onHandleClick} className={s.button}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
