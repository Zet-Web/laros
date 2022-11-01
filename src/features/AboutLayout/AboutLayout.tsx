import { FC, ReactNode } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import logo from '/public/assets/images/laros_logo_rgb_web 1.png'
import bg from '/public/assets/images/aboutLayoutBG.jpg'

import s from './AboutLayout.module.scss'

interface AboutLayoutProps {
  tab: number
  children: ReactNode
}
export const AboutLayout: FC<AboutLayoutProps> = ({ tab, children }) => {
  const { push } = useRouter()
  return (
    <div>
      <div className={s.hero}>
        <div
          className={s.bg}
          style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100%',
          }}
        />
        <div className={s.about}>About</div>
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
              Who We Are
            </Tab>
            <Tab onClick={() => push('/about/team')} className={s.tab}>
              Our Team
            </Tab>
            <Tab onClick={() => push('/about/testimonials')} className={s.tab}>
              Testimonials
            </Tab>
            <Tab onClick={() => push('/about/faq')} className={s.tab}>
              FAQ
            </Tab>
            <Tab onClick={() => push('/about/careers')} className={s.tab}>
              Career
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
