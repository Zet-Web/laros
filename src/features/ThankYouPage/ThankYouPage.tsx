import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import fireWorks from '/public/assets/images/fireworks.svg?url'

import s from './ThankYouPage.module.scss'

export const ThankYouPage = () => {
  const t = useTranslate()
  const { push } = useRouter()

  const handlePush = () => {
    push('/')
  }
  return (
    <div className={s.thankYouPage}>
      <Image src={fireWorks} width={300} height={200} alt={'fireworks image'} />

      <div className={s.title}>{t('aboutModal.thanks')}</div>

      <div className={s.subTitle}>{t('aboutModal.text')}</div>

      <div className={s.button}>
        <Button onClick={handlePush}>{t('aboutModal.return')}</Button>
      </div>
    </div>
  )
}
