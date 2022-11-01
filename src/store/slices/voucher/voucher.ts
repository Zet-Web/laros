import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VoucherDelivery, VoucherForm } from 'shared/types/vouchers'

export type VoucherFormState = {
  form: VoucherForm
  history: {
    delivery: VoucherDelivery
    street?: string
    zip?: string
    region?: string
  }
}

const initialState: VoucherFormState = {
  form: {} as VoucherForm,
  history: { delivery: VoucherDelivery.EMAIL },
}

export const voucher = createSlice({
  name: 'voucher',
  initialState,
  reducers: {
    updateForm: (state: VoucherFormState, action: PayloadAction<any>) => {
      state.form = { ...state.form, ...action.payload }
    },
  },
})
export const { updateForm } = voucher.actions

export default voucher.reducer
