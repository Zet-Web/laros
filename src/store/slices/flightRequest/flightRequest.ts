import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Traveller } from '../../../shared/types/order'

interface FlightRequestState {
  travellers: Traveller[]
}

const initialState: FlightRequestState = {
  travellers: [],
}

export const flightRequest = createSlice({
  name: 'flight request',
  initialState,
  reducers: {
    addTraveller: (
      state: FlightRequestState,
      action: PayloadAction<Traveller>
    ) => {
      state.travellers = [...state.travellers, action.payload]
    },
  },
})
export const { addTraveller } = flightRequest.actions

export default flightRequest.reducer
