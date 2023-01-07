import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { TripPlan } from './Tab/TripPlan'
import { InsiderTips } from './Tab/InsiderTips'
import { RelatedTours } from './Tab/RelatedTours'
import { AreasOf } from '../../features/AreasOf'
import { TripPageIntro } from './TripPageIntro/TripPageIntro'
import { ContactForm } from 'features'
import { Modal } from 'components'

import {
  getTrip,
  getTripsNearby,
  getTripsSimilar,
} from 'shared/api/routes/trips'
import { withDomain } from 'shared/helpers/withDomain'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useModal } from 'shared/hooks/useModal'
import { getParentDestination } from 'store/slices/destinations/selectors'
import { useAppSelector } from 'shared/hooks/redux'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'

import s from './TripPage.module.scss'

export const TripPage: FC = () => {
  const { query } = useRouter()
  const { id } = query
  const t = useTranslate()

  const [trip, setTrip] = useState<Trip | null>(null)
  const [insiderTips, setInsiderTips] = useState<string | null>('')
  const [relatedTours, setRelatedTours] = useState<Trip[]>([])
  const [tripNearby, setTripNearby] = useState<Destination[]>([])
  const [isLoad, setIsLoad] = useState(true)
  const { isOpen, onClose, open } = useModal()

  const destination = useAppSelector(state =>
    getParentDestination(state, tripNearby[0]?.parent)
  )

  const loadTrip = async (id: number) => {
    try {
      const { data } = await getTrip(id)
      setTrip(data)
      setIsLoad(true)
      setInsiderTips(data.tips)
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadTripSimilar = async (id: number) => {
    try {
      const { data } = await getTripsSimilar(id)
      setRelatedTours(data.data)
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadTripNearby = async (id: number) => {
    try {
      const { data } = await getTripsNearby(id)
      setTripNearby(data.data)
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    if (id) {
      loadTrip(+id)
      loadTripSimilar(+id)
      loadTripNearby(+id)
    }
  }, [query])

  return (
    <div className={s.wrapper}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${trip?.images ? withDomain(trip.images[0]) : ''
            })`,
        }}
      />

      <div className={s.container}>
        <div className={s.card}>
          {trip && isLoad ? (
            <TripPageIntro {...trip} id={Number(id)} /> // check why trip has no id TODO
          ) : (
            <div className={s.loader}>
              <p>{t('common.loadingText')}</p>
            </div>
          )}
        </div>

        <Tabs className={s.tabs}>
          <TabList className={s.tabList}>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab1')}</Tab>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab2')}</Tab>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab3')}</Tab>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab4')}</Tab>
            <Tab className={s.tab} onClick={open}>
              {t('travelPlannerTabs.tab5')}
            </Tab>
          </TabList>

          <TabPanel>
            {trip?.destinations ? (
              <TripPlan tripDestination={trip.destinations} />
            ) : null}
          </TabPanel>

          <TabPanel>
            {insiderTips ? <InsiderTips data={insiderTips} /> : null}
          </TabPanel>

          <TabPanel>
            {relatedTours.length ? (
              <RelatedTours similarTrips={relatedTours} />
            ) : null}
          </TabPanel>

          <TabPanel>
            {tripNearby && destination ? (
              <AreasOf
                className={s.destinations}
                destinations={tripNearby}
                destination={destination}
              />
            ) : null}
          </TabPanel>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t('contactForm.formTitle')}
          >
            <div className={s.modal}>
              <ContactForm />
            </div>
          </Modal>
        </Tabs>
      </div>
    </div>
  )
}
