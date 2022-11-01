import { useEffect, useState } from 'react'
import { getTrips } from 'shared/api/routes/trips'
import { Trip, TripFilterParams } from 'shared/types/trip'

export const useGetTrips = (
  query: Partial<TripFilterParams>
): [Trip[], boolean, (reset?: boolean) => void] => {
  const [trips, setTrips] = useState<Trip[]>([])
  const [isReady, setIsReady] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleReady = (reset?: boolean) => {
    setIsReady(true)
  }
  useEffect(() => {
    const loadTrips = async () => {
      setIsReady(false)
      try {
        setIsLoading(true)
        const { data } = await getTrips({})

        setTrips(data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    if (isReady) loadTrips()
  }, [isReady, query])

  return [trips, isLoading, handleReady]
}
