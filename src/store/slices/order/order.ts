import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sendOrderThunk } from './thunk'

export type ContactFormState = {}

const initialState: ContactFormState = {}

export const order = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(sendOrderThunk.fulfilled, (state, action) => {
      //   state.loading = [...action.payload]
    })
    builder.addCase(sendOrderThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})

export default order.reducer
