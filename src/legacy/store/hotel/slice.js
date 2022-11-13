import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchHotels } from './asyncActions'
import { Hotel, HotelSliceState, Status } from './types'

const initialState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchHotels.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })

    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const { setItems } = hotelSlice.actions

export default hotelSlice.reducer
