import { FC, ReactNode, useState } from 'react'
import s from './DestinationLayout.module.scss'
import { DestionationsList } from './DestionationsList'
import { truncate } from 'lodash'
import { Destination } from 'shared/types/destinations'
import { TRUNCATED_TEXT_SIZE } from 'shared/constants'
import {
  getParentDestinations,
  getRootDestinations,
  getSubDestinations,
  isNotFinalDestination,
} from 'store/slices/destinations/selectors'
import { defaultDescription } from 'shared/constants/destinations'
import { Button } from '../../components'

interface DestinationLayoutProps {
  children: ReactNode
  destinations: Destination[]
  currentDestination: number | null
  title?: string
  description?: string
}

export const DestinationLayout: FC<DestinationLayoutProps> = ({
  children,
  destinations,
  currentDestination,
  title = 'Destinations',
  description = defaultDescription,
}) => {
  const destinationsToDisplay = currentDestination
    ? getParentDestinations(destinations, currentDestination)
    : getRootDestinations(destinations)
  const [isTruncated, setIsTruncated] = useState<boolean>(true)

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <div className={s.list}>
          <DestionationsList
            destinations={destinationsToDisplay}
            destination={currentDestination}
          />
        </div>
        <div className={s.description}>
          <div className={s.select}>Please select the region on the map</div>
          <div className={s.title}>{title}</div>
          <div className={s.text}>
            {isTruncated
              ? truncate(description, { length: TRUNCATED_TEXT_SIZE })
              : description}
          </div>

          {isTruncated && (
            <div onClick={() => setIsTruncated(false)} className={s.more}>
              More
            </div>
          )}
        </div>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  )
}
