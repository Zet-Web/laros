// @ts-nocheck
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { DestinationLayout } from 'features/DestinationLayout'
import DestinationAreas from 'features/DestinationAreas/DestinationAreas'
import DestinationHotels from 'features/DestinationHotels/DestinationHotels'

import { Map, getCurrentMap } from 'shared/helpers/getMap'
import getPath from 'shared/helpers/getPath'

import Arrow from '/public/assets/images/blackArrow.svg'

import s from './DestinationPage.module.scss'
import _ from 'lodash'

export const DestinationPage: FC = () => {
  const dispatch = useAppDispatch()
  const { query, pathname, push } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const [map, setMap] = useState<Map | null>(null)

  const route = getPath(pathname)
  const title = !map?.currentMap?.parentId
    ? route.split('/')[2] !== 'areas'
      ? 'Hotels'
      : 'Destination'
    : map.currentMap.name

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  useEffect(() => {
    const map = getCurrentMap(Number(query.id))

    const currentLocation = _(destinations)
      .filter(d => d.parent === Number(query.id))
      .map(location => ({
        id: location.id,
        link: `/areas/${location.id}`,
        cardTitle: location.name,
        cardText: location.description,
      }))
      .value()

    setMap({ ...map, location: currentLocation })
  }, [query.id])

  return (
    <>
      <DestinationLayout
        currentDestination={Number(query.id)}
        destinations={destinations}
        title={title}
      >
        {map?.currentMap && (
          <>
            {map.currentMap.parentId && map.parent && (
              <div
                onClick={() => push(`${route}/${map.parent!.id}`)}
                className={s.back}
              >
                <Arrow className={s.arrow} /> Go back to {map.parent.name} Map
              </div>
            )}
            {map.currentMap.map && map.currentMap.map(map.location)}
          </>
        )}
      </DestinationLayout>
      {route.split('/')[2] === 'areas' && map?.currentMap?.name ? (
        <DestinationAreas name={map.currentMap.name} />
      ) : (
        map && <DestinationHotels map={map} />
      )}
    </>
  )
}
