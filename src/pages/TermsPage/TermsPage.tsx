import React, { FC, useEffect, useState } from 'react'
import s from './TermsPage.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { termsMock } from 'shared/mocks/terms'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useRouter } from 'next/router'

export const TermsPage: FC = () => {
  const { query, push } = useRouter()
  const t = useTranslate()

  const [selectedTerm, setSelectedTerm] = useState<number | undefined>(0)

  useEffect(() => {
    setSelectedTerm(Number(query.id))
  }, [query.id])

  return (
    <div className={s.page}>
      <div className={s.title}>
        <h2>{t('terms.title')}</h2>
        <p>{t('terms.subtitle')}</p>
      </div>
      <div className={s.container}>
        <Tabs
          selectedIndex={selectedTerm}
          selectedTabClassName={s.selectedTab}
          onSelect={index => {
            push(`/terms/${index}`)
            setSelectedTerm(index)
          }}
          className={s.tabs}
        >
          <TabList className={s.tabList}>
            <Tab className={s.tab}>{t('terms.travelDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.rentalDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.cookiesDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.termsOfUseDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.privacy')}</Tab>
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
