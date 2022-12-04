import { createAsyncThunk } from '@reduxjs/toolkit'
import { VoucherForm } from 'shared/types/vouchers'
import { sendVoucherForm } from 'shared/api/routes/voucher'

export const sendContactFormThunk = createAsyncThunk<unknown, VoucherForm>(
  'voucher/sendVoucher',
  async form => {
    const response = await sendVoucherForm(form)
    if (response.status === 200) {
      return response.data.data
    }
  }
)
