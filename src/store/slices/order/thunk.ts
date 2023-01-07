import { createAsyncThunk } from '@reduxjs/toolkit'
import { createOrder } from 'shared/api/routes/order'
import { OrderPayload } from 'shared/types/order'

export const sendOrderThunk = createAsyncThunk<unknown, OrderPayload>(
  'order/sendOrder',
  async (form, { getState }) => {
    const response = await createOrder(form)
    if (response.status === 200) {
      return response.data.data
    }
  }
)
