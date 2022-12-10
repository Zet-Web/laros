import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Traveller } from '../../../shared/types/order'

interface PackageRequestState {
  travellers: Traveller[]
}

const initialState: PackageRequestState = {
  travellers: [],
}

export const packageRequest = createSlice({
  name: 'package',
  initialState,
  reducers: {
    addTraveller: (
      state: PackageRequestState,
      action: PayloadAction<Traveller>
    ) => {
      state.travellers = [...state.travellers, action.payload]
    },
  },
})
export const { addTraveller } = packageRequest.actions

export default packageRequest.reducer
