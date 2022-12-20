import { FC } from 'react'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'
import { isRootDestination } from 'store/slices/destinations/selectors'
import { mockRegions } from 'shared/mocks/regions'
import { getPath } from 'shared/helpers/getPath'
import { useTranslate } from 'shared/hooks/useTranslate'

import World from '/public/assets/images/destinations/World.svg'
import DestinationItem from './DestinationItem'

import _ from 'lodash'
import cn from 'classnames'
import s from './DestinationsList.module.scss'

interface DestionationsListProps {
  destinations: Destination[]
  destination: number | null
}
export const DestionationsList: FC<DestionationsListProps> = ({
  destination,
  destinations,
}) => {
  const { push, pathname } = useRouter()
  const route = getPath(pathname)
  const t = useTranslate()

  const isRootDestinations = (destinations: Destination[]): boolean => {
    if (destinations.length) {
      return isRootDestination(destinations)
    }

    return true
  }

  const currentRegion = mockRegions.find(region => region.id === destination)

  const destinationsMocks = currentRegion?.parentId
    ? mockRegions.find(region => region.id === currentRegion.parentId)
        ?.subRegions
    : _(destinations)
        .map(destination =>
          mockRegions.find(region => region.id === destination.id)
        )
        .value()

  return (
    <div className={s.list}>
      {destinationsMocks &&
        destinationsMocks.map(
          region =>
            region && <DestinationItem key={region.id} region={region} />
        )}
      {isRootDestinations(destinations) && (
        <div
          onClick={() => push(`/destinations/${route}`)}
          className={cn(s.item, { [s.active]: destination === 0 })}
        >
          <World
            className={cn(s.icon, { [s.iconActive]: destination === 0 })}
          />
          <span className={s.title}>{t('destinationWorldWide.title')}</span>
        </div>
      )}
    </div>
  )
}
