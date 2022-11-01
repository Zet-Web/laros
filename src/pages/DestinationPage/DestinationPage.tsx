import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { DestinationLayout } from 'features/DestinationLayout'
import DestinationAreas from 'features/DestinationAreas/DestinationAreas'

import { mockAreas } from 'shared/mocks/areas'
import { getMap } from 'shared/helpers/getMap'

export const DestinationPage: FC = () => {
  const dispatch = useAppDispatch()
  const { query } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const { map, name } = getMap(Number(query.id))

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  return (
    <>
      <DestinationLayout
        currentDestination={Number(query.id)}
        destinations={destinations}
      >
        {map}
      </DestinationLayout>
      <DestinationAreas name={name} areas={mockAreas[name]} />
    </>
  )
}
