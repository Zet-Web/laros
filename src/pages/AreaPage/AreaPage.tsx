import { ReactNode, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { DestinationLayout } from 'features/DestinationLayout'
import DestinationHotels from 'features/DestinationHotels/DestinationHotels'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import { getCurrentMap } from 'shared/helpers/getMap'

import Arrow from '/public/assets/images/blackArrow.svg'

import s from './AreaPage.module.scss'

export const AreaPage = () => {
  const dispatch = useAppDispatch()
  const { query, push } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const [currentMap, setCurrentMap] = useState<ReactNode>(null)

  useEffect(() => {
    const currentMap = getCurrentMap(Number(query.id))

    setCurrentMap(currentMap && currentMap)

    dispatch(getDestinationsThunk())
  }, [query.id])

  return (
    <>
      <DestinationLayout
        currentDestination={Number(query.id)}
        destinations={destinations}
      >
        <div onClick={() => push('/destinations/1')} className={s.back}>
          <Arrow className={s.arrow} /> Go back to Greece Map
        </div>
        {currentMap}
      </DestinationLayout>
      <DestinationHotels />
    </>
  )
}
