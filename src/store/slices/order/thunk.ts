import { createAsyncThunk } from '@reduxjs/toolkit'
import { createOrder } from 'shared/api/routes/order'
import { OrderForm } from 'shared/types/order'

export const sendOrderThunk = createAsyncThunk<unknown, OrderForm>(
  'brochures/sendBrochures',
  async form => {
    const response = await createOrder(form)
    if (response.status === 200) {
      return response.data.data
    }
  }
)
