import { FC } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { AreaCard } from '../../components/AreaCard'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Destination } from 'shared/types/destinations'

import s from './AreasOf.module.scss'

interface DestinationsProps {
  destinations: Destination[]
  destination: Destination
  className?: string
  isAreas?: boolean
}

export const AreasOf: FC<DestinationsProps> = ({
  destinations,
  destination,
  isAreas = false,
  className,
}) => {
  const { push } = useRouter()
  const t = useTranslate()

  const handlePush = (id: number) => {
    isAreas ? push(`/areas/${id}`) : push(`destinations/areas/${id}`)
  }

  return (
    <div className={cn(s.wrapper, className)}>
      {destination.name && (
        <div className={s.title}>
          {t('travelPlannerTripPlan.areasOfTitle')} {destination.location_name}
        </div>
      )}

      {destination.description && (
        <div
          dangerouslySetInnerHTML={{ __html: destination.description }}
          className={s.description}
        />
      )}

      <div className={s.images}>
        {destinations?.map(item => (
          <AreaCard
            onClick={handlePush}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.images[0]}
          />
        ))}
      </div>
    </div>
  )
}
