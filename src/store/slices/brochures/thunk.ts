import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  Brochure,
  DownloadBrochureForm,
  SendBrochureForm,
} from 'shared/types/brochures'
import {
  getBrochures,
  sendDownloadBrochuresForm,
  sendSendBrochuresForm,
} from 'shared/api/routes/brochures'

export const getBrochuresThunk = createAsyncThunk<Brochure[]>(
  'brochures/getBrochures',
  async payload => {
    const response = await getBrochures()
    if (response.status === 200 && response.data.data.length) {
      const brochures: Brochure[] = response.data.data
      return brochures
    }
    return []
  }
)

export const sendDownloadBrochureThunk = createAsyncThunk<
  unknown,
  DownloadBrochureForm
>('brochures/downloadBrochures', async form => {
  const response = await sendDownloadBrochuresForm(form)
  if (response.status === 200) {
    return response.data.data
  }
})

export const sendSendBrochureThunk = createAsyncThunk<
  unknown,
  SendBrochureForm
>('brochures/sendBrochures', async form => {
  const response = await sendSendBrochuresForm(form)
  if (response.status === 200) {
    return response.data.data
  }
})
