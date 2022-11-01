import { createAsyncThunk } from '@reduxjs/toolkit'
import { TripCategory } from 'shared/types/trip'
import { getTripCategories } from 'shared/api/routes/trips'

export const getTripCategoriesThunk = createAsyncThunk<TripCategory[]>(
  'trips/getTripCategories',
  async payload => {
    const response = await getTripCategories()
    if (response.status === 200 && response.data.data.length) {
      const trips: TripCategory[] = response.data.data
      return trips
    }
    return []
  }
)
