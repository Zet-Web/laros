import { createAsyncThunk } from '@reduxjs/toolkit'
import _ from 'lodash'
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
import { sendFlightRequestForm } from 'shared/api/routes/requests'
import { FlightRequestFormType } from 'shared/types/requestForm'

export const getBrochuresThunk = createAsyncThunk<Brochure[]>(
  'brochures/getBrochures',
  async payload => {
    const response = await getBrochures()
    if (response.status === 200 && response.data.data.length) {
      return response.data.data
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

export const sendFlightRequestThunk = createAsyncThunk<
  unknown,
  FlightRequestFormType
>('requests/flight', async data => {
  const form = {
    dest_from: data.departFrom.value,
    dest_to: data.arrivalTo.value,
    departure_date: data.earliestDeparture,
    return_date: data.latestReturn,
    flight_class: data.class,
    adults: data.adults,
    children: data.children,
    email: data.email,
    comment: data.comment,
    travellers: data.travellers.map(traveller => ({
      name: traveller.name,
      nationality: traveller.nationality,
      gender: traveller.gender,
      dob: traveller.birth,
      addresses: _.uniq([
        traveller.address,
        traveller.address1,
        traveller.address2,
      ]),
    })),
  }

  const response = await sendFlightRequestForm(form)
  if (response.status === 200) {
    return response.data.data
  }
})

export const sendPackageRequestThunk = createAsyncThunk<
  unknown,
  PackageRequestFormType
>('requests/flight', async data => {
  const form = {
    dest_from: data.departFrom.value,
    dest_to: data.arrivalTo.value,
    departure_date: data.earliestDeparture,
    return_date: data.latestReturn,
    flight_class: data.class,
    adults: data.adults,
    children: data.children,
    email: data.email,
    comment: data.comment,
    travellers: data.travellers.map(traveller => ({
      name: traveller.name,
      nationality: traveller.nationality,
      gender: traveller.gender,
      dob: traveller.birth,
      addresses: _.uniq([
        traveller.address,
        traveller.address1,
        traveller.address2,
      ]),
    })),
  }

  const response = await sendFlightRequestForm(form)
  if (response.status === 200) {
    return response.data.data
  }
})
