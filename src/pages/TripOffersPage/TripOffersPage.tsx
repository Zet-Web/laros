import { useRouter } from 'next/router'
import { TripCard } from 'pages/TravelPlannerPage/TripCard'
import { FC, useEffect, useState } from 'react'
import { tripPageInfo } from 'shared/mocks/tripInfo'
import { tripListMock } from 'shared/mocks/tripList'
import { TripItem } from 'shared/types/trip'
import s from './TripOffersPage.module.scss'
import cn from 'classnames'
import bg from '/public/assets/images/tripListPageBg.png'
import listIcon from '/public/assets/images/list.svg'
import gridIcon from '/public/assets/images/grid.svg'
import { useForm } from 'react-hook-form'
import { Tags } from 'components/Tags'
import Image from 'next/image'
import { useGetTrips } from 'shared/hooks/useGetTrips'
import { divide } from 'lodash'

enum View {
  LIST,
  GRID,
}
export const TripOffersPage: FC = () => {
  const { query } = useRouter()
  const [tripCatInfo, setTripCatInfo] = useState<any>({})
  const [view, setView] = useState(View.GRID)
  const { handleSubmit, control } = useForm()
  const [trips, isLoading, handleReady] = useGetTrips(query)
  console.log('trips :', trips)
  useEffect(() => handleReady(true), [query])

  useEffect(() => {
    const { category } = query
    setTripCatInfo(tripPageInfo)
  }, [query])
  return (
    <div className={s.container}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />
      <div className={s.title}>{tripCatInfo?.title}</div>
      <div className={s.description}>{tripCatInfo?.description}</div>
      <div className={s.filters}>
        <div className={s.filterTitle}>Sort by</div>
        <div className={s.filterSelects}>
          <Tags tags={[]} onChange={() => 1} />
          <div className={s.viewSwitch}>
            <span
              onClick={() => setView(View.LIST)}
              className={cn(s.viewIcon, {
                [s.viewSelected]: view === View.LIST,
              })}
            >
              <Image src={listIcon} />
            </span>
            <span
              onClick={() => setView(View.GRID)}
              className={cn(s.viewIcon, {
                [s.viewSelected]: view === View.GRID,
              })}
            >
              <Image src={gridIcon} />
            </span>
          </div>
        </div>
      </div>
      <div className={cn(s.offers, view === View.GRID ? s.grid : s.list)}>
        {isLoading && <div className={s.loading}>Loading...</div>}
        {!isLoading &&
          trips?.length &&
          trips.map((offer, idx) => {
            return (
              // @ts-ignore
              <TripCard
                period={'12'}
                key={idx}
                {...offer}
                wide={view === View.LIST}
              />
            )
          })}
      </div>
    </div>
  )
}
