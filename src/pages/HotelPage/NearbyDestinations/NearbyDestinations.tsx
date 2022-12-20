import React, { FC } from 'react'
import Link from 'next/link'

import { Destination } from 'shared/types/destinations'
import { LIMIT_NEARBY_DESTINATIONS } from 'shared/constants'

import s from './NearbyDestinations.module.scss'
import { useTranslate } from '../../../shared/hooks/useTranslate'

interface DestinationProps {
  destination: Destination[]
}

export const NearbyDestinations: FC<DestinationProps> = ({ destination }) => {
  const t = useTranslate()

  return (
    <div className={s.destination}>
      <div className={s.destinationTitle}>{t('hotel.nearbyTitle')}</div>

      <div className={s.destinationSubTitle}>{t('hotel.nearbySubTitle')}</div>

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
