import { FC } from 'react'
import { useRouter } from 'next/router'

import { Slider } from 'components'
import { TripCard } from 'features'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Trip } from 'shared/types/trip'

import s from './Trips.module.scss'

interface TripsProps {
  trips: Trip[]
  title: string | undefined
  subTitle: string
}

export const Trips: FC<TripsProps> = ({ trips, title, subTitle }) => {
  const { push } = useRouter()

  const handlePush = (id: number) => {
    push(`/trips/${id}`)
  }

  const t = useTranslate()

  return (
    <div className={s.trips}>
      <div className={s.title}>
        {t('areaPage.pre-definedTrips')} {title}
      </div>

      <div className={s.subTitle}>{subTitle}</div>

      <Slider
        slidesPerView={3}
        withPagination
        classname={s.slider}
        spaceBetween={30}
        withNavigation
      >
        {trips?.map(item => (
          <TripCard key={item.id} {...item} onClick={handlePush} />
        ))}
      </Slider>
    </div>
  )
}
