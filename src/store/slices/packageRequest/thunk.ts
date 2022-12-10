import { createAsyncThunk } from '@reduxjs/toolkit'
import uniq from 'lodash/uniq'
import { sendPackageRequestForm } from 'shared/api/routes/requests'
import {
  PackageRequestFormType,
  PackageRequestPayload,
} from 'shared/types/requestForm'

export const sendPackageRequestThunk = createAsyncThunk<
  unknown,
  PackageRequestFormType
>('requests/package', async data => {
  const form: PackageRequestPayload = {
    dest_from: Number(data.departFrom.value),
    dest_to: Number(data.arrivalTo.value),
    departure_date: new Date(data.earliestDeparture).toLocaleDateString(
      'en-CA'
    ),
    return_date: new Date(data.latestReturn).toLocaleDateString('en-CA'),
    duration: data.travelDuration,
    hotel_category: Number(data.hotelCategory?.value),
    transfer_type: data.transferType,
    board_type: data.boardType,
    budget: Number(data.totalTripBudget),
    adults: data.adults,
    children: data.children,
    email: data.email,
    comment: data.comment,
    travellers: data.travellers.map(traveller => {
      const address = () => {
        if (traveller.address) {
          return uniq([
            traveller.address,
            traveller.address1,
            traveller.address2,
          ])
        }
        return [
          `${traveller.country} ${traveller.city} ${traveller.address1} ${traveller.address2}`,
        ]
      }

      return {
        name: traveller.name,
        nationality: Number(traveller.nationality.value),
        gender: traveller.gender,
        dob: new Date(traveller.birth).toLocaleDateString('en-CA'),
        addresses: address(),
      }
    }),
  }

  const response = await sendPackageRequestForm(form)
  if (response.status === 200) {
    return response.data.data
  }
})
