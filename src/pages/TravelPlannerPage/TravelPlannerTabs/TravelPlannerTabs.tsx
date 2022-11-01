import { FC } from 'react'
import s from './TravelPlannerTabs.module.scss'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { TripPlan } from './TripPlan'
import { InsiderTips } from './InsiderTips'
import { RelatedTours } from './RelatedTours'
import { Destinations } from './Destinations'
import {
  tripPlanMock,
  insiderTips,
  relatedTours,
  destination,
} from 'shared/mocks/tripTab'

export const TravelPlannerTabs: FC = () => {
  return (
    <div className={s.wrapper}>
      <Tabs className={s.tabs}>
        <TabList className={s.tabList}>
          <Tab className={s.tab}>Trip plan</Tab>
          <Tab className={s.tab}>Insider tips</Tab>
          <Tab className={s.tab}>Related tours</Tab>
          <Tab className={s.tab}>Nearby destinations</Tab>
          <button className={s.contact}>Contact us</button>
        </TabList>

        <TabPanel>
          <TripPlan data={tripPlanMock} />
        </TabPanel>
        <TabPanel>
          <InsiderTips
            description={insiderTips.description}
            title={insiderTips.title}
            images={insiderTips.images}
          />
        </TabPanel>
        <TabPanel>
          <RelatedTours data={relatedTours} />
        </TabPanel>
        <TabPanel>
          <Destinations
            description={destination.description}
            title={destination.title}
            images={destination.images}
          />
        </TabPanel>
      </Tabs>
    </div>
  )
}
