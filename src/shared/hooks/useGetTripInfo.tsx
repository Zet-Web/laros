import { useEffect, useState } from 'react'
import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { getTrip } from 'shared/api/routes/trips'
import { tripFullMock } from 'shared/mocks/tripList'
import { getCountries } from 'shared/api/routes/countries'
import { getAirportDestinations } from 'shared/api/routes/destinations'
import { Country } from 'shared/types/country'

export const useGetTripInfo = (
  id: number
): [Trip | null, Destination[], Country[], boolean] => {
  const [airports, setAirports] = useState<Destination[]>([])
  const [trip, setTrip] = useState<Trip | null>(null)
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!id) {
      return
    }
    const loadTrip = async (trip: number) => {
      try {
        const tripDetails = await getTrip(trip)
        // @ts-ignore
        setTrip(tripFullMock)
        // setTrip(tripDetails.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadTrip(id)
    setIsLoading(false) // TODO we can take into account other API req for loading status
  }, [id])

  const loadCountries = async () => {
    try {
      // @ts-ignore
      const countries = await getCountries()
      setCountries(countries.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  const loadAirports = async () => {
    try {
      const airports = await getAirportDestinations()
      setAirports(airports.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    loadCountries()
    loadAirports()
  }, [])

  return [trip, airports, countries, isLoading]
}
