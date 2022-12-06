import { Button } from '../../components'
import React from 'react'
import s from './ContactFooterHero.module.scss'
import { useRouter } from 'next/router'

export const ContactFooterHero = () => {
  const router = useRouter()
  return (
    <div className={s.contact}>
      <p>
        Plan your journey <br /> now
      </p>
      <Button
        variant='secondary'
        classname={s.button}
        onClick={() => router.push('/contact')}
      >
        Contact
      </Button>
    </div>
  )
}
