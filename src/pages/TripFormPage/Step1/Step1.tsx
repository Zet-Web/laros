// @ts-nocheck
import { AddIcon, Button, InfoIcon } from 'components'
import { Select } from 'components/Select'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { calculateOrder } from 'shared/api/routes/order'
import { ORDER_CALCULATION_DEBOUNCE } from 'shared/constants'
import { destinationToOption } from 'shared/helpers/destinations'
import { prepareOrder } from 'shared/helpers/order'
import {
  getTripDays,
  provideOptionsWithIcon,
} from 'shared/helpers/transformers'
import { getTripDuration } from 'shared/helpers/trip'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { useDebounce } from 'shared/hooks/useDebounce'
import { TransferType } from 'shared/types/car'
import { Destination } from 'shared/types/destinations'
import { OrderForm } from 'shared/types/order'
import { Trip } from 'shared/types/trip'
import { updateForm } from 'store/slices/order/order'
import { Steps } from '../TripFormPage'
import s from './Step1.module.scss'
import { TripDayForm } from './TripDayForm'
import airportIcon from '/public/assets/images/airport.svg?url'
import { useTranslate } from '../../../shared/hooks/useTranslate'

interface Step1Props {
  setStep: (step: Steps) => void
  trip: Trip
  airports: Destination[]
}

export const Step1: FC<Step1Props> = ({ setStep, trip, airports }) => {
  const dispatch = useAppDispatch()
  const t = useTranslate()
  const { handleSubmit, control, setValue, watch } = useForm<
    Partial<OrderForm>
  >({
    defaultValues: {
      destinations: trip.destinations,
    },
  })
  const watchDestinations = watch('destinations')
  const calculationDebounce = useDebounce(watch, ORDER_CALCULATION_DEBOUNCE)
  const form = useAppSelector(state => state.order.form)
  const airportOptions = provideOptionsWithIcon(
    destinationToOption(airports),
    airportIcon
  )

  const onSubmit = (formData: any) => {
    // TODO add type
    dispatch(updateForm(formData))
    setStep(Steps.SECOND)
  }
  const loadPrice = async () => {
    const data = await calculateOrder(prepareOrder(form))
    // TODO connect
  }

  useEffect(() => {
    loadPrice()
  }, [calculationDebounce])

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
                // @ts-ignore
                value={value?.toString()}
                options={airportOptions}
              />
            )}
          />
        </div>
        <div className={s.select}>
          <div className={s.selectLabel}>{t('tripSteps.label4')}</div>
          <Controller
            name='dest_to'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                // @ts-ignore
                value={value?.toString()}
                options={airportOptions}
              />
            )}
          />
        </div>
      </div>
      {watchDestinations?.map((dest, index) => {
        return (
          <TripDayForm
            key={index}
            index={index}
            onChange={setValue}
            hotel={{ name: dest.hotel_name, id: dest.hotel }}
            description={dest.description ?? t('tripSteps.noDescription')}
            duration={dest.duration}
            rooms={[]}
            location={dest.destination_name}
            locationId={dest.id}
            day={getTripDays(
              index === 0 ? 1 : trip.destinations[index - 1]?.duration + 1,
              dest.duration
            )}
            total={getTripDuration(watchDestinations)}
            type={TransferType.PICKUP}
            to='Athens airport (ATH)'
            from=' The Corinth Canal to Nafplion'
          />
        ) // TODO refactor day
      })}

      <div className={s.endpoint}>
        <div className={s.select}>
          <div className={s.selectLabel}>{t('tripSteps.endPoint')}:</div>
          <Controller
            name='dest_to'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                // @ts-ignore
                value={value?.toString()}
                options={airportOptions}
              />
            )}
          />
        </div>
      </div>
      <div className={s.addLocationSection}>
        <AddIcon />
        <div className={s.addLocationTitle}>{t('tripSteps.add')}</div>
        <div className={s.addLocationInfo}>
          <InfoIcon />
        </div>
      </div>
      <div className={s.actions}>
        <Button onClick={handleSubmit(onSubmit)}>{t('tripSteps.next')}</Button>
        <Button variant='outline'>{t('tripSteps.cancel')}</Button>
      </div>
    </div>
  )
}
