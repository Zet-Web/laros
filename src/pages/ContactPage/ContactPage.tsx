import { FC, useEffect, useState } from 'react'
import { ContactForm } from 'features/ContactForm'

import s from './ContactPage.module.scss'
import { Map } from 'components'
import axios from 'axios'

export const ContactPage: FC = () => {
  const [route, setRoute] = useState()

  useEffect(() => {
    async function getRoute() {
      await axios({
        method: 'GET',
        url: 'http://165.227.155.246/api/trip/1',
      }).then(data => setRoute(data.data.data.route))
    }
    getRoute()
  }, [])

  return (
    <>
      <div className={s.headerBg}></div>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.formWrapper}>
            <ContactForm contactPage />
          </div>
          <div className={s.mapWrapper}>
            <Map route={route} />
          </div>
        </div>
      </div>
    </>
  )
}
