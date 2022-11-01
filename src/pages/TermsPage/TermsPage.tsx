import React, { FC } from 'react'
import s from './TermsPage.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { termsMock } from 'shared/mocks/terms'

export const TermsPage: FC = () => {
  return (
    <div className={s.page}>
      <div className={s.title}>
        <h2>Terms and policies</h2>
        <p>
          Quis vulputate facilisis a ullamcorper hausdhausdhuashduasd sit netus
          neque. Nulla erat mattis donec blandit.
        </p>
      </div>
      <div className={s.container}>
        <Tabs selectedTabClassName={s.selectedTab} className={s.tabs}>
          <TabList className={s.tabList}>
            <Tab className={s.tab}>Travel policy</Tab>
            <Tab className={s.tab}>Car rental policy</Tab>
            <Tab className={s.tab}>Cookies policy</Tab>
            <Tab className={s.tab}>Terms of use</Tab>
            <Tab className={s.tab}>Privacy policy</Tab>
          </TabList>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
