import { FC, ReactNode, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'

import { Modal } from 'components'
import { ContactForm } from 'features'
import { FlightRequestForm } from 'pages/FlightRequestPage'
import { PackageRequestForm } from 'pages/RequestsPage'

import gobackImg from '/public/assets/images/back__arrow.svg?url'

import s from './RequestsLayout.module.scss'
import { useTranslate } from '../../shared/hooks/useTranslate'

interface RequestsLayoutProps {
  children: ReactNode
}
export const RequestsLayout: FC<RequestsLayoutProps> = ({ children }) => {
  const router: NextRouter = useRouter()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const t = useTranslate()

  return (
    <>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ContactForm />
      </Modal>

      <div className={s.top__contentBg}>
        <h2 className={s.h2__titleWhite}>
          {t('worldwideTours.WorldwideToursTitle')}
        </h2>
        <p className={s.top__contentText}>
          {t('worldwideTours.WorldwideToursSubTitle')}
        </p>
      </div>

      <div className={s.request__form}>
        <div className={s.top__contentForm}>
          <div className={s.go__backRequest}>
            <button className={s.goback__button} onClick={() => router.back()}>
              <Image src={gobackImg} alt='back arrow' width={10} height={10} />
              <span className={s.request__span}>
                {t('worldwideTours.GoBack')}
              </span>
            </button>
          </div>

          <div className={s.contact__usRequest}>
            <span className={s.contact__requestText}>
              {t('worldwideTours.ContactUs')}
            </span>
            <button
              className={s.link__contactUs}
              onClick={() => setOpenModal(!openModal)}
            >
              {t('travelPlannerTabs.tab5')}
            </button>
          </div>
        </div>

        <nav className={s.tabs__navigation}>
          <Tabs
            defaultIndex={0}
            selectedTabClassName={s.selectedTab}
            onSelect={index => console.log(index)}
          >
            <TabList className={s.tabList}>
              <Tab className={s.tab}>
                Flight Requests{t('worldwideTours.Tab_1')}
              </Tab>
              <Tab className={s.tab}>
                Request package{t('worldwideTours.Tab_2')}
              </Tab>
            </TabList>

            <TabPanel className={s.tabPanel}>
              <FlightRequestForm />
            </TabPanel>

            <TabPanel className={s.tabPanel}>
              <PackageRequestForm />
            </TabPanel>
          </Tabs>
        </nav>
      </div>
    </>
  )
}
