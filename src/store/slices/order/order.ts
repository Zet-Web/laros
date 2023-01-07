import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderForm, OrderTransport } from 'shared/types/order'
import { sendOrderThunk } from './thunk'

export type OrderFormState = {
  form: OrderForm
}

const initialState: OrderFormState = {
  form: {
    date_start: Number(new Date()),
    transports: [] as OrderTransport[],
    rooms: [
      {
        adults: 2,
        children: 0,
      },
    ],
  } as OrderForm,
}

export const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateForm: (
      state: OrderFormState,
      action: PayloadAction<Partial<OrderForm>>
    ) => {
      state.form = { ...state.form, ...action.payload }
    },
  },
  extraReducers: builder => {
    builder.addCase(sendOrderThunk.fulfilled, (state, action) => {
      //   state.loading = [...action.payload]
    })
    builder.addCase(sendOrderThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})

export const { updateForm } = order.actions

export default order.reducer
