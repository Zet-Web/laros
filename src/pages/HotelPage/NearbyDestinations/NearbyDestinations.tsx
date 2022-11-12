import React, { FC } from 'react'
import Link from 'next/link'

import { Destination } from 'shared/types/destinations'
import { LIMIT_NEARBY_DESTINATIONS } from 'shared/constants'

import s from './NearbyDestinations.module.scss'

interface DestinationProps {
  destination: Destination[]
}

export const NearbyDestinations: FC<DestinationProps> = ({ destination }) => {
  return (
    <div className={s.destination}>
      <div className={s.destinationTitle}>Nearby destinations</div>

      <div className={s.destinationSubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.destinationWrap}>
        {destination?.slice(0, LIMIT_NEARBY_DESTINATIONS).map((item, index) => {
          return (
            <Link key={index} href={`/destinations/${item.id}`}>
              <div
                style={{ backgroundImage: `url(${item.images[0]})` }}
                className={s.destinationItem}
              >
                <div className={s.destinationItemDescription}>{item.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
