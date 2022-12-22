import React, { FC } from 'react'

import { Destination } from 'shared/types/destinations'
import { useTranslate } from 'shared/hooks/useTranslate'

import { DESTINATIONS_HOME_LIMIT } from 'shared/constants/destinations'
import { withDomain } from '../../../shared/helpers/withDomain'

import s from './Explore.module.scss'

interface ExploreProps {
  destinations: Destination[]
}

export const Explore: FC<ExploreProps> = ({ destinations }) => {
  const t = useTranslate()

  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h2 className={s.title}>{t('homepage.newPlacesTitle')}</h2>
        <p className={s.subtitle}>{t('homepage.newPlacesSubTitle')} </p>
      </div>

      <div className={s.images}>
        {destinations
          .slice(0, DESTINATIONS_HOME_LIMIT)
          .map((destination: Destination) => (
            <div
              className={s.exploreItem}
              style={
                destination?.images.length
                  ? {
                      backgroundImage: `url(${withDomain(
                        destination.images[0]
                      )})`,
                    }
                  : { backgroundColor: '#9c9ea1' }
              }
              key={destination.id}
            >
              <span className={s.itemName}>{destination.name}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
