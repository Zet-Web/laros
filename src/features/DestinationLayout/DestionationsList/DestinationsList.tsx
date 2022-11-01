import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'
import { useAppDispatch } from 'shared/hooks/redux'
import { isRootDestination } from 'store/slices/destinations/selectors'
import { mockRegions } from 'shared/mocks/regions'

import World from '/public/assets/images/destinations/World.svg'

import s from './DestinationsList.module.scss'
import cn from 'classnames'

interface DestionationsListProps {
  destinations: Destination[]
  destination: number | null
}
export const DestionationsList: FC<DestionationsListProps> = ({
  destination,
  destinations,
}) => {
  const dispatch = useAppDispatch()
  const { push, query } = useRouter()

  const isRootDestinations = (destinations: Destination[]): boolean => {
    if (destinations.length) {
      return isRootDestination(destinations[0])
    }

    return true
  }

  const region = (regions: { id: number; image: any; name: string }[]) => {
    return regions.map(region => (
      <div
        key={region.id}
        onClick={() => push(`/destinations/areas/${region.id}`)}
        className={cn(s.item, {
          [s.active]: region.id === Number(query.id),
        })}
      >
        <region.image
          className={cn(s.icon, {
            [s.iconActive]: region.id === Number(query.id),
          })}
        />
        <span className={s.title}>{region.name}</span>
      </div>
    ))
  }

  return (
    <div className={s.list}>
      {mockRegions.map(place => {
        return (
          <>
            <div
              key={place.id}
              onClick={() => push(`/destinations/${place.id}`)}
              className={cn(s.item, {
                [s.active]: place.id === Number(query.id),
              })}
            >
              <place.image
                className={cn(s.icon, {
                  [s.iconActive]: place.id === Number(query.id),
                })}
              />
              <span className={s.title}>{place.name}</span>
            </div>
            {place.regions &&
              place.id === Number(query.id) &&
              region(place.regions)}
          </>
        )
      })}
      {isRootDestinations(destinations) && (
        <div
          onClick={() => push('/destinations')}
          className={cn(s.item, { [s.active]: destination === 0 })}
        >
          <World
            className={cn(s.icon, { [s.iconActive]: destination === 0 })}
          />
          <span className={s.title}>Worldwide</span>
        </div>
      )}
    </div>
  )
}
