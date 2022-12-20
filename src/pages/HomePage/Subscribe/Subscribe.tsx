import { FC, useState } from 'react'

import { subscribeToNewsletter } from 'shared/api/routes/subscription'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './Subscribe.module.scss'

export const Subscribe: FC = () => {
  const t = useTranslate()
  const [value, setValue] = useState<string>('')

  const onHandleClick = () => {
    if (value) {
      subscribeToNewsletter(value)
      setValue('')
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h1 className={s.title}>{t('homepage.subscribeTitle')}</h1>

        <p className={s.subtitle}>{t('homepage.subscribeSubTitle')}</p>

        <div className={s.inputWrapper}>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={t('homepage.subscribePlaceholder')}
            className={s.input}
          />
          <button onClick={onHandleClick} className={s.button}>
            {t('homepage.subscribeInputButton')}
          </button>
        </div>
      </div>
    </div>
  )
}
