import { FC, useState } from 'react'
import { ContactForm } from 'features/ContactForm'

import s from './ContactPage.module.scss'

import { Map } from 'components'
import { COMPANY_LOCATION } from 'shared/constants/companyInfo'

export const ContactPage: FC = () => {
  const [location] = useState(COMPANY_LOCATION)

  return (
    <>
      <div className={s.headerBg}></div>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.formWrapper}>
            <ContactForm contactPage />
          </div>
          <div className={s.mapWrapper}>
            <Map location={location} />
          </div>
        </div>
      </div>
    </>
  )
}
