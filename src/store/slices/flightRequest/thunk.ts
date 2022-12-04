import { createAsyncThunk } from '@reduxjs/toolkit'
import { FlightRequestFormType } from 'pages/FlightRequestPage'
import uniq from 'lodash/uniq'
import { sendFlightRequestForm } from 'shared/api/routes/requests'

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
      addresses: uniq([
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
