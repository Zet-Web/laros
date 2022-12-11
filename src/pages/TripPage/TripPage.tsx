import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { TripPlan } from './Tab/TripPlan'
import { InsiderTips } from './Tab/InsiderTips'
import { RelatedTours } from './Tab/RelatedTours'
import { Destinations } from './Tab/Destinations'
import { TripPageIntro } from './TripPageIntro/TripPageIntro'
import { ContactForm } from 'features'
import { Modal } from 'components'

import {
  getTrip,
  getTripsNearby,
  getTripsSimilar,
} from 'shared/api/routes/trips'
import { useModal } from 'shared/hooks/useModal'
import { getParentDestination } from 'store/slices/destinations/selectors'
import { useAppSelector } from 'shared/hooks/redux'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'

import { TripsMock } from 'shared/mocks/trip' //TODO delete when done
import { tripsMock } from 'shared/mocks/destinationInfo' //TODO delete when done
import { NearbyDestinationsMock } from 'shared/mocks/hotel' //TODO delete when done

import s from './TripPage.module.scss'

export const TripPage: FC = () => {
  const { query } = useRouter()
  const { id } = query

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
      // console.log(data) //TODO delete when done
      setTrip(data) //TODO uncomment when data appears on the server
      setIsLoad(true)
      setInsiderTips(data.tips)
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadTripSimilar = async (id: number) => {
    try {
      const { data } = await getTripsSimilar(id)
      // console.log(data) //TODO delete when done
      setRelatedTours(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadTripNearby = async (id: number) => {
    try {
      const { data } = await getTripsNearby(id)
      // console.log(data) //TODO delete when done
      setTripNearby(data.data) //TODO uncomment when data appears on the server
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    // setTrip(TripsMock) //TODO delete when there is data on the server
    // setRelatedTours(tripsMock) //TODO delete when there is data on the server
    // setTripNearby(NearbyDestinationsMock) //TODO delete when there is data on the server

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
          backgroundImage: `url(${trip?.images ? trip.images[0] : ''})`,
        }}
      />

      <div className={s.container}>
        <div className={s.card}>
          {trip && isLoad ? (
            <TripPageIntro {...trip} />
          ) : (
            <div className={s.loader}>
              <p>Loading...</p>
            </div>
          )}
        </div>

        <Tabs className={s.tabs}>
          <TabList className={s.tabList}>
            <Tab className={s.tab}>Trip plan</Tab>
            <Tab className={s.tab}>Insider tips</Tab>
            <Tab className={s.tab}>Related tours</Tab>
            <Tab className={s.tab}>Nearby destinations</Tab>
            <Tab className={s.tab} onClick={open}>
              Contact us
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
              <Destinations
                destinations={tripNearby}
                destination={destination}
              />
            ) : null}
          </TabPanel>

          <Modal isOpen={isOpen} onClose={onClose} title={'Contact form'}>
            <div className={s.modal}>
              <ContactForm />
            </div>
          </Modal>
        </Tabs>
      </div>
    </div>
  )
}
