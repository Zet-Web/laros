import React, { FC } from 'react'
import s from './Explore.module.scss'
import { Destination } from 'shared/types/destinations'
import { DESTINATIONS_HOME_LIMIT } from 'shared/constants/destinations'

interface ExploreProps {
  destinations: Destination[]
}

export const Explore: FC<ExploreProps> = ({ destinations }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h2 className={s.title}>Explore new places</h2>
        <p className={s.subtitle}>
          At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
          in orci, pretium nulla volutpat leo.
        </p>
      </div>
      <div className={s.images}>
        {destinations
          .slice(0, DESTINATIONS_HOME_LIMIT)
          .map((destination: Destination) => (
            <div
              className={s.exploreItem}
              style={
                destination?.images.length
                  ? { backgroundImage: `url(${destination.images[0]})` }
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
