import { AddIcon, Button, InfoIcon } from 'components'
import { Select } from 'components/Select'
import { FC, Key } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { provideOptionsWithIcon } from 'shared/helpers/transformers'
import { useAppDispatch } from 'shared/hooks/redux'
import { TransferType } from 'shared/types/car'
import { Steps } from '../TripFormPage'
import s from './Step1.module.scss'
import { TripDayForm } from './TripDayForm'
import airportIcon from '/public/assets/images/airport.svg'

interface Step1Props {
  setStep: (step: Steps) => void
  trip: any
}

// @ts-ignore
export const Step1: FC<Step1Props> = ({ setStep, trip }) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()
  const destsMock = [{ value: '1', label: 'Zurich' }]
  const onSubmit = (formData: any) => {
    // TODO add type

    setStep(Steps.SECOND)
  }
  if (!trip) return
  return (
    <div className={s.container}>
      <div className={s.flights}>
        <div className={s.select}>
          <div className={s.selectLabel}>Starting point:</div>
          <Controller
            name='dest_from'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                options={provideOptionsWithIcon(destsMock, airportIcon)}
              />
            )}
          />
        </div>
        <div className={s.select}>
          <div className={s.selectLabel}>flight to</div>
          <Controller
            name='dest_to'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select onChange={onChange} value={value} options={[]} />
            )}
          />
        </div>
      </div>
      {trip?.destinations?.map(
        (
          dest: {
            hotel_name: any
            description: any
            duration: number
            destination_name: string
          },
          idx: Key | null | undefined
        ) => {
          return (
            <TripDayForm
              key={idx}
              hotel={{ name: dest.hotel_name }}
              description={dest.description ?? 'No description'}
              duration={dest.duration}
              rooms={[
                // @ts-ignore
                { room_name: 'Standard', capacity: 2 },
                // @ts-ignore
                { room_name: 'Standard', capacity: 2 },
              ]}
              location={dest.destination_name}
              day={1}
              total={trip.duration}
              type={TransferType.PICKUP}
              to='Athens airport (ATH)'
              from=' The Corinth Canal to Nafplion'
            />
          )
        }
      )}

      <div className={s.endpoint}>
        <div className={s.select}>
          <div className={s.selectLabel}>End point:</div>
          <Controller
            name='dest_to'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                options={provideOptionsWithIcon(destsMock, airportIcon)}
              />
            )}
          />
        </div>
      </div>
      <div className={s.addLocationSection}>
        <AddIcon />
        <div className={s.addLocationTitle}>Add location</div>
        <div className={s.addLocationInfo}>
          <InfoIcon />
        </div>
      </div>
      <div className={s.actions}>
        <Button onClick={() => handleSubmit(onSubmit)}>Next step</Button>
        <Button variant='outline'>Cancel</Button>
      </div>
    </div>
  )
}
