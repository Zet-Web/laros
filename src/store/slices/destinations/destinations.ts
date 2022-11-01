import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Destination } from 'shared/types/destinations'
import { getDestinationsThunk } from './thunk'

export type DestinationsState = {
  destinations: Destination[]
  currentDestination: number | null
}

const initialState: DestinationsState = {
  destinations: [],
  currentDestination: null,
}

export const destinations = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setCurrentDestination: (
      state: DestinationsState,
      action: PayloadAction<number>
    ) => {
      state.currentDestination = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getDestinationsThunk.fulfilled, (state, action) => {
      state.destinations = [...action.payload]
    })
    builder.addCase(getDestinationsThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})
export const { setCurrentDestination } = destinations.actions

export default destinations.reducer
