import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TripCategory } from 'shared/types/trip'
import { getTripCategoriesThunk } from './thunk'

export type TripsState = {
  categories: TripCategory[]
}

const initialState: TripsState = {
  categories: [],
}

export const trips = createSlice({
  name: 'brochures',
  initialState,
  reducers: {
    setTripTypes: (
      state: TripsState,
      action: PayloadAction<TripCategory[]>
    ) => {
      state.categories = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getTripCategoriesThunk.fulfilled, (state, action) => {
      state.categories = [...action.payload]
    })
    builder.addCase(getTripCategoriesThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})

export const { setTripTypes } = trips.actions

export default trips.reducer
