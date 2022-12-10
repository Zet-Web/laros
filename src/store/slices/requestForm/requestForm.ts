import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Traveller } from 'shared/types/requestForm'

interface RequestFormState {
  travellers: Traveller[]
  travellersCount: number
}

const initialState: RequestFormState = {
  travellers: [],
  travellersCount: 2,
}

export const requestForm = createSlice({
  name: 'request form',
  initialState,
  reducers: {},
})
export const {} = requestForm.actions

export default requestForm.reducer
