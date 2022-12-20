import { FC, ReactNode, useState } from 'react'

import { DestionationsList } from './DestionationsList'
import { TruncatedText } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Destination } from 'shared/types/destinations'
import { TRUNCATED_TEXT_SIZE } from 'shared/constants'

import { defaultDescription } from 'shared/constants/destinations'
import {
  getParentDestinations,
  getRootDestinations,
  getSubDestinations,
  isNotFinalDestination,
} from 'store/slices/destinations/selectors'

import s from './DestinationLayout.module.scss'

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
  title,
  description = defaultDescription,
}) => {
  const t = useTranslate()

  const destinationsToDisplay = currentDestination
    ? getParentDestinations(destinations, currentDestination)
    : getRootDestinations(destinations)

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
          <div className={s.select}>{t('destinations.selectRegion')}</div>
          <div className={s.title}>{title}</div>

          <TruncatedText
            limit={TRUNCATED_TEXT_SIZE}
            more={t('destinations.buttonMore')}
          >
            {description}
          </TruncatedText>
        </div>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  )
}
