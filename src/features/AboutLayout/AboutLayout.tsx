import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { useTranslate } from 'shared/hooks/useTranslate'

import logo from '/public/assets/images/laros_logo_rgb_web 1.png'
import bg from '/public/assets/images/aboutLayoutBG.jpg'

import 'react-tabs/style/react-tabs.css'
import s from './AboutLayout.module.scss'

interface AboutLayoutProps {
  tab: number
  children: ReactNode
}

export const AboutLayout: FC<AboutLayoutProps> = ({ tab, children }) => {
  const { push } = useRouter()
  const t = useTranslate()

  return (
    <div>
      <div className={s.hero}>
        <div
          className={s.bg}
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
        <div className={s.about}>{t('about.about')}</div>
        <div className={s.title}>
          <Image src={logo} width={202} height={81} />
        </div>
      </div>
      <div className={s.container}>
        <Tabs
          selectedTabClassName={s.selectedTab}
          defaultIndex={tab}
          className={s.tabs}
        >
          <TabList className={s.tabList}>
            <Tab onClick={() => push('/about')} className={s.tab}>
              {t('about.tab1')}
            </Tab>
            <Tab onClick={() => push('/about/team')} className={s.tab}>
              {t('about.tab2')}
            </Tab>
            <Tab onClick={() => push('/about/testimonials')} className={s.tab}>
              {t('about.tab3')}
            </Tab>
            <Tab onClick={() => push('/about/faq')} className={s.tab}>
              {t('about.tab4')}
            </Tab>
            <Tab onClick={() => push('/about/careers')} className={s.tab}>
              {t('about.tab5')}
            </Tab>
          </TabList>

          <TabPanel className={s.tabPanel}>{children}</TabPanel>
          <TabPanel className={s.tabPanel}>{children}</TabPanel>
          <TabPanel className={s.tabPanel}>{children}</TabPanel>
          <TabPanel className={s.tabPanel}>{children}</TabPanel>
          <TabPanel className={s.tabPanel}>{children}</TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
