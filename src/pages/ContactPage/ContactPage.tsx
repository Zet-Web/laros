import { FC, useState } from 'react'

import { ContactForm, ThankYouPage } from 'features'

import { Map } from 'components'
import { COMPANY_LOCATION } from 'shared/constants/companyInfo'

import s from './ContactPage.module.scss'

export const ContactPage: FC = () => {
  const [thankYou, setThankYou] = useState(false)
  const [location] = useState(COMPANY_LOCATION)

  const showThankYou = () => {
    setThankYou(prevState => !prevState)
  }

  return (
    <>
      <div className={s.headerBg}> </div>
      <div className={s.container}>
        {!thankYou ? (
          <div className={s.content}>
            <div className={s.formWrapper}>
              <ContactForm contactPage onFormSubmit={showThankYou} />
            </div>
            <div className={s.mapWrapper}>
              <Map location={location} />
            </div>
          </div>
        ) : (
          <ThankYouPage />
        )}
      </div>
    </>
  )
}
