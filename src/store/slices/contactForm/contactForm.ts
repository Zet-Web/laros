import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sendContactFormThunk } from './thunk'

export type ContactFormState = {}

const initialState: ContactFormState = {}

export const contactForm = createSlice({
  name: 'brochures',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(sendContactFormThunk.fulfilled, (state, action) => {
      //   state.loading = [...action.payload]
    })
    builder.addCase(sendContactFormThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})

export default contactForm.reducer
