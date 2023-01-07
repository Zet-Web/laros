import { FC, useEffect, useState } from 'react'
import Link from 'next/link'

import { AddIcon, Button, InfoIcon, Select } from 'components'
import { TripDayForm } from './TripDayForm'

import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { calculateOrder, getTripDay } from 'shared/api/routes/order'
import {
  getTripDays,
  provideOptionsWithIcon,
} from 'shared/helpers/transformers'

import { prepareOrder } from 'shared/helpers/order'
import { useTranslate } from 'shared/hooks/useTranslate'
import { destinationToOption } from 'shared/helpers/destinations'
import { getTripDuration } from 'shared/helpers/trip'
import { useAppDispatch } from 'shared/hooks/redux'
import { useDebounce } from 'shared/hooks/useDebounce'
import { updateForm } from 'store/slices/order/order'

import { CarTransferType } from 'shared/types/car'
import { Destination } from 'shared/types/destinations'
import { OrderForm } from 'shared/types/order'
import { Trip } from 'shared/types/trip'
import { Steps } from '../TripFormPage'
import { TransferOptions } from 'shared/types/transport'

import { ORDER_CALCULATION_DEBOUNCE } from 'shared/constants'

import airportIcon from '/public/assets/images/airport.svg?url'

import s from './Step1.module.scss'
import { Transfer } from './Transfer'
import { getTransfer } from 'shared/api/routes/transfer'
import { DEFAULT_TRANSFER } from 'shared/constants/transfer'
import { dateToServerFormat } from 'shared/helpers/dateFormatter'

interface Step1Props {
  setStep: (step: Steps) => void
  trip: Trip
  airports: Destination[]
  form: OrderForm
  transfers: TransferOptions[]
}

export const Step1: FC<Step1Props> = ({
  setStep,
  trip,
  airports,
  form,
  transfers,
}) => {
  const dispatch = useAppDispatch()
  const t = useTranslate()
  const { handleSubmit, control, setValue, getValues, watch } = useForm<
    Partial<OrderForm>
  >({
    defaultValues: {
      destinations: trip.destinations,
    },
  })
  const { append, remove } = useFieldArray({
    control,
    name: 'destinations',
  })
  const watchForm = watch()
  const watchDestinations = watch('destinations')
  const watchStartPoint = watch('dest_from')
  const watchEndPoint = watch('dest_to')
  const calculationDebounce = useDebounce(watch, ORDER_CALCULATION_DEBOUNCE)
  const airportOptions = provideOptionsWithIcon(
    destinationToOption(airports),
    airportIcon
  )
  const [startPointTransfer, setStartPointTransfer] = useState(DEFAULT_TRANSFER)
  const [endPointTransfer, setEndPointTransfer] = useState(DEFAULT_TRANSFER)

  const addLocation = async () => {
    if (!watchDestinations) return
    try {
      const defaultTripDay = await getTripDay(
        watchDestinations[watchDestinations?.length - 1].id
      )
      if (defaultTripDay) {
        append({
          id: defaultTripDay.location.id,
          images: [],
          destination_name: defaultTripDay.location.name,
          hotel_name: defaultTripDay.hotel.name,
          description: defaultTripDay.location.description,
          duration: 1,
          trip: trip.id,
          destination: defaultTripDay.location.id,
          hotel: defaultTripDay.hotel,
        })
      } else {
        alert(
          `No appropriate route found from  ${watchDestinations[watchDestinations?.length - 1].destination_name
          }`
        )
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit = (formData: any) => {
    console.log('formData :', formData)
    // TODO add type
    dispatch(updateForm(formData))
    setStep(Steps.SECOND)
  }
  const loadTransfer = async (from: number, to: number) => {
    const response = await getTransfer(from, to)
    return response
  }
  const loadPrice = async () => {
    const data = await calculateOrder(prepareOrder(form))
    // TODO connect
  }
  const updateEndPointTransfer = (id: number) => {
    const prevTransfer = getValues('transports') ?? []
    setValue(`transports`, [{
      transport: id,
      date: dateToServerFormat(new Date())  // TODO
    }, ...prevTransfer])
  }

  useEffect(() => {
    const loadTransfer = async (from: number, to: number) => {
      const response = await getTransfer(from, to)
      setEndPointTransfer(response)
    }
    if (watchDestinations && watchDestinations[watchDestinations.length - 1] && watchEndPoint) {
      loadTransfer(watchDestinations[watchDestinations?.length - 1].destination, Number(watchEndPoint.value))
    }
  }, [watchEndPoint, watchDestinations])

  useEffect(() => {
    const loadTransfer = async (from: number, to: number) => {
      const response = await getTransfer(from, to)
      setStartPointTransfer(response)
    }
    if (watchDestinations && watchDestinations[0] && watchStartPoint) {
      loadTransfer(Number(watchStartPoint.value), watchDestinations[0].destination)
    }
  }, [watchStartPoint, watchDestinations])

  if (!trip) return null
  return (
    <div className={s.container}>
      <div className={s.flights}>
        <div className={s.select}>
          <div className={s.selectLabel}>{t('tripSteps.label3')}:</div>
          <Controller
            name='dest_from'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                options={airportOptions}
              />
            )}
          />
        </div>
      </div>
      {watchDestinations?.map((dest, index) => {
        return (
          <TripDayForm
            key={dest.id}
            index={index}
            onDelete={
              index === watchDestinations.length - 1 && index > 0
                ? id => remove(id)
                : undefined
            }
            onChange={setValue}
            form={form}
            hotel={dest.hotel}
            description={dest.description ?? t('tripSteps.noDescription')}
            duration={dest.duration}
            capacity={form.rooms ?? []}
            destination={dest}
            day={getTripDays(watchDestinations, index)}
            total={getTripDuration(watchDestinations)}
            type={CarTransferType.PICKUP}
            from={
              trip.destinations[index - 1] ? {
                label: trip.destinations[index - 1].destination_name,
                value: trip.destinations[index - 1].destination.toString()
              } :
                watchForm.dest_from ?? undefined
            }
            previousDestination={watchDestinations[index - 1] ?? null}
            transfers={transfers}
          />
        )
      })}
      <Transfer onChange={(id, type) => updateEndPointTransfer(id)} from={{
        label: trip.destinations[trip.destinations.length - 1].destination_name,
        value: trip.destinations[trip.destinations.length - 1].destination.toString(),
      }} to={watchEndPoint?.label ?? ''} options={endPointTransfer} value={null} />
      <div className={s.endpoint}>
        <div className={s.select}>
          <div className={s.selectLabel}>{t('tripSteps.endPoint')}:</div>
          <Controller
            name='dest_to'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                options={airportOptions}
              />
            )}
          />
        </div>
      </div>
      <div onClick={() => addLocation()} className={s.addLocationSection}>
        <AddIcon />
        <div className={s.addLocationTitle}>{t('tripSteps.add')}</div>
        <div className={s.addLocationInfo}>
          <InfoIcon />
        </div>
      </div>
      <div className={s.actions}>
        <Button onClick={handleSubmit(onSubmit)}>{t('tripSteps.next')}</Button>
        <Button variant='outline'>
          <Link href={`/trips/${trip.id}`}>{t('tripSteps.cancel')}</Link>
        </Button>
      </div>
    </div>
  )
}
