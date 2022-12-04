import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import brochuresSlice from './slices/brochures/brochures'
import contactFormSlice from './slices/contactForm/contactForm'
import destinationsSlice from './slices/destinations/destinations'
import voucherSlice from './slices/voucher/voucher'
import orderSlice from './slices/order/order'
import tripsSlice from './slices/trips/trips'
import flightRequestSlice from './slices/flightRequest/flightRequest'

export const store = configureStore({
  reducer: {
    brochures: brochuresSlice,
    contact: contactFormSlice,
    destinations: destinationsSlice,
    vouchers: voucherSlice,
    order: orderSlice,
    trips: tripsSlice,
    flightRequest: flightRequestSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
