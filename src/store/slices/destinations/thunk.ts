import { createAsyncThunk } from '@reduxjs/toolkit'
import { Destination } from 'shared/types/destinations'
import { getDestinations } from 'shared/api/routes/destinations'

export const getDestinationsThunk = createAsyncThunk<Destination[]>(
  'destinations/getDestinationss',
  async payload => {
    const response = await getDestinations()
    if (response.status === 200 && response.data.data.length) {
      const destinations: Destination[] = response.data.data
      return destinations
    }
    return []
  }
)
