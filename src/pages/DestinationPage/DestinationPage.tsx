// @ts-nocheck
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { DestinationLayout } from 'features/DestinationLayout'
import DestinationAreas from 'features/DestinationAreas/DestinationAreas'
import DestinationHotels from 'features/DestinationHotels/DestinationHotels'

import { useTranslate } from 'shared/hooks/useTranslate'
import { Map, getCurrentMap } from 'shared/helpers/getMap'
import { getPath } from 'shared/helpers/getPath'

import Arrow from '/public/assets/images/blackArrow.svg'

import s from './DestinationPage.module.scss'

export const DestinationPage: FC = () => {
  const dispatch = useAppDispatch()
  const { query, pathname, push } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const [map, setMap] = useState<Map | null>(null)
  const t = useTranslate()

  const route = getPath(pathname)
  const title = !map?.currentMap?.parentId
    ? route !== t('area.areas')
      ? t('hotels.title')
      : t('destinations.title')
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
        link: `/destinations/${route}/${location.id}`,
        cardTitle: location.name,
        cardText: location.description,
      }))
      .value()

    console.log(currentLocation)

    setMap({ ...map, location: currentLocation })
  }, [query.id])

  return (
    <>
      <DestinationLayout
        currentDestination={Number(query.id)}
        destinations={destinations}
        description={t('destinations.greeceDescription')}
        title={title}
      >
        {map?.currentMap && (
          <>
            {map.currentMap.parentId && map.parent && (
              <div
                onClick={() => push(`/destinations/${route}/${map.parent!.id}`)}
                className={s.back}
              >
                <Arrow className={s.arrow} />{' '}
                {t('destinationsSubRegion.buttonGoBack')} {map.parent.name}
                {t('destinationsSubRegion.buttonGoBackMap')}
              </div>
            )}
            {map.currentMap.map && map.currentMap.map(map.location)}
          </>
        )}
      </DestinationLayout>
      {route === 'areas' && map?.currentMap?.name ? (
        <DestinationAreas name={map.currentMap.name} />
      ) : (
        map && <DestinationHotels map={map} />
      )}
    </>
  )
}
