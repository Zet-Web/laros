import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'

import s from './Destinations.module.scss'
import { useTranslate } from 'shared/hooks/useTranslate'
import { withDomain } from 'shared/helpers/withDomain'
import cn from 'classnames'

interface DestinationsProps {
  destinations: Destination[]
  destination: Destination
  background?: 'white' | 'gray'
  className?: string
  isAreas?: boolean
}

export const Destinations: FC<DestinationsProps> = ({
  destinations,
  destination,
  background = 'white',
  isAreas = false,
  className,
}) => {
  const { push } = useRouter()
  const t = useTranslate()

  const handlePush = (id: number) => {
    isAreas ? push(`/areas/${id}`) : push(`/destinations/areas/${id}`)
  }

  return (
    <div
      className={cn(
        s.wrapper,
        background === 'white' ? s.white : s.gray,
        className
      )}
    >
      {destination.name && (
        <div className={s.title}>
          {isAreas && 'Areas of'} {t('travelPlannerTripPlan.areasOfTitle')}
          {destination.location_name}
        </div>
      )}
      {destination.description && (
        <div
          dangerouslySetInnerHTML={{ __html: destination.description }}
          className={s.description}
        />
      )}

      <div className={s.images}>
        {destinations?.map(item => {
          return (
            <div
              className={s.image}
              key={item.id}
              onClick={() => handlePush(item.id)}
            >
              <div className={s.name}>{item.name}</div>
              {item.images.length ? (
                <Image
                  src={withDomain(item.images[0])}
                  layout={'fill'}
                  alt={'destination image'}
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
