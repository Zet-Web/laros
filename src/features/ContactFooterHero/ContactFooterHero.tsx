import { Button } from '../../components'
import React from 'react'
import s from './ContactFooterHero.module.scss'
import { useRouter } from 'next/router'
import { useTranslate } from '../../shared/hooks/useTranslate'

export const ContactFooterHero = () => {
  const router = useRouter()
  const t = useTranslate()

  return (
    <div className={s.contact}>
      <p>{t('blogs.planJourneyText')}</p>
      <Button
        variant='secondary'
        classname={s.button}
        onClick={() => router.push('/contact')}
      >
        {t('common.contactText')}
      </Button>
    </div>
  )
}
